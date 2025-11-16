import { Request, Response } from "express";
import { z } from "zod";
import { RoleType } from "../generated/prisma";
import {
  findComments,
  findComment,
  createComment,
  editComment,
  deleteComment,
} from "../services/comment.service";
import { findTicket } from "../services/ticket.service";
import {
  Viewer,
  TicketWithRelations,
  requireViewer,
  isAdmin,
} from "../utils/permissions";

const messageSchema = z.object({
  message: z.string().trim().min(1),
});

const createCommentSchema = z
  .object({
    ticketId: z.number().int().positive(),
  })
  .merge(messageSchema);

const updateCommentSchema = messageSchema;

const commentFilterSchema = z.object({
  ticketId: z.coerce.number().int().positive().optional(),
});

function parseIdParam(raw?: string) {
  const id = Number(raw);
  if (!Number.isInteger(id) || id <= 0) {
    return null;
  }

  return id;
}

function canManageOwnComment(viewer: Viewer, authorId: number) {
  const allowedRole =
    viewer.role === RoleType.PROJECT_MANAGER ||
    viewer.role === RoleType.DEVELOPER;
  return allowedRole && viewer.id === authorId;
}

async function ensureTicketAccess(
  ticketId: number,
  res: Response,
): Promise<TicketWithRelations | null> {
  const ticket = await findTicket({ id: ticketId });
  if (!ticket) {
    res.status(404).json({ message: "Ticket not found" });
    return null;
  }

  return ticket;
}

async function ensureCommentAccessible(commentId: number, res: Response) {
  const comment = await findComment({ id: commentId });
  if (!comment) {
    res.status(404).json({ message: "Comment not found" });
    return null;
  }

  const ticket = comment.ticket as TicketWithRelations;
  if (!ticket) {
    res.status(500).json({ message: "Comment missing ticket reference" });
    return null;
  }

  return comment;
}

async function getComments(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  const parsed = commentFilterSchema.safeParse(req.query);
  if (!parsed.success) {
    return res.status(400).json(parsed.error.format());
  }

  const { ticketId } = parsed.data;

  if (ticketId) {
    const ticket = await ensureTicketAccess(ticketId, res);
    if (!ticket) {
      return;
    }
  }

  const comments = await findComments({ ticketId });
  res.status(200).json(comments);
}

async function getCommentById(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  const commentId = parseIdParam(req.params.id);
  if (!commentId) {
    return res.status(400).json({ message: "Invalid comment id" });
  }

  const comment = await ensureCommentAccessible(commentId, res);
  if (!comment) {
    return;
  }

  res.status(200).json(comment);
}

async function insertComment(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  const parsed = createCommentSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json(parsed.error.format());
  }

  const ticket = await ensureTicketAccess(parsed.data.ticketId, res);
  if (!ticket) {
    return;
  }

  const created = await createComment({
    ticketId: ticket.id,
    userId: viewer.id,
    message: parsed.data.message,
  });

  res.status(201).json(created);
}

async function updateComment(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  const commentId = parseIdParam(req.params.id);
  if (!commentId) {
    return res.status(400).json({ message: "Invalid comment id" });
  }

  const parsed = updateCommentSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json(parsed.error.format());
  }

  const existing = await ensureCommentAccessible(commentId, res);
  if (!existing) {
    return;
  }

  if (!isAdmin(viewer) && !canManageOwnComment(viewer, existing.userId)) {
    return res
      .status(403)
      .json({ message: "Only admins or eligible authors can modify this comment" });
  }

  const updated = await editComment(commentId, { message: parsed.data.message });
  res.status(200).json(updated);
}

async function deleteCommentById(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  const commentId = parseIdParam(req.params.id);
  if (!commentId) {
    return res.status(400).json({ message: "Invalid comment id" });
  }

  const existing = await ensureCommentAccessible(commentId, res);
  if (!existing) {
    return;
  }

  if (!isAdmin(viewer) && !canManageOwnComment(viewer, existing.userId)) {
    return res
      .status(403)
      .json({ message: "Only admins or eligible authors can delete this comment" });
  }

  await deleteComment(commentId);
  res.status(200).json({ message: "Comment deleted successfully" });
}

export {
  getComments,
  getCommentById,
  insertComment,
  updateComment,
  deleteCommentById,
};
