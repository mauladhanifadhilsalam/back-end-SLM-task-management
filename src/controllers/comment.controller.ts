import { Request, Response } from "express";
import { RoleType, ActivityTargetType } from "@prisma/client";
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
import {
  notifyTicketRequesterComment,
  CommentNotificationPayload,
} from "../services/notification.triggers";
import {
  recordActivity,
  toActivityDetails,
} from "../services/activity-log.service";
import {
  commentQuerySchema,
  createCommentSchema,
  updateCommentSchema,
} from "../schemas/comment.schema";

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

  const parsed = commentQuerySchema.safeParse(req.query);
  if (!parsed.success) {
    return res.status(400).json(parsed.error.format());
  }

  const filters = parsed.data;

  if (filters.ticketId) {
    const ticket = await ensureTicketAccess(filters.ticketId, res);
    if (!ticket) {
      return;
    }
  }

  const comments = await findComments(filters);
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

  await notifyTicketRequesterComment(created as CommentNotificationPayload);
  await recordActivity({
    userId: viewer.id,
    action: "COMMENT_CREATED",
    targetType: ActivityTargetType.COMMENT,
    targetId: created.id,
    details: toActivityDetails({
      ticketId: created.ticketId,
    }),
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
      .json({
        message: "Only admins or eligible authors can modify this comment",
      });
  }

  const updated = await editComment(commentId, {
    message: parsed.data.message,
  });
  await recordActivity({
    userId: viewer.id,
    action: "COMMENT_UPDATED",
    targetType: ActivityTargetType.COMMENT,
    targetId: updated.id,
    details: toActivityDetails({
      ticketId: updated.ticketId,
    }),
  });
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
      .json({
        message: "Only admins or eligible authors can delete this comment",
      });
  }

  const deleted = await deleteComment(commentId);
  await recordActivity({
    userId: viewer.id,
    action: "COMMENT_DELETED",
    targetType: ActivityTargetType.COMMENT,
    targetId: deleted.id,
    details: toActivityDetails({
      ticketId: deleted.ticketId,
    }),
  });
  res.status(200).json({ message: "Comment deleted successfully" });
}

export {
  getComments,
  getCommentById,
  insertComment,
  updateComment,
  deleteCommentById,
};
