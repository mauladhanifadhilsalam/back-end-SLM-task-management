import { Request, Response } from "express";
import fs from "fs/promises";
import path from "path";
import { z } from "zod";
import {
  findAttachments,
  findAttachment,
  createAttachment,
  deleteAttachment,
} from "../services/attachment.service";
import { findTicket } from "../services/ticket.service";
import {
  getViewer,
  canViewTicket,
  canModifyTicket,
} from "../utils/ticketPermissions";
import env from "../utils/env";

const attachmentQuerySchema = z.object({
  ticketId: z.coerce.number().int().positive().optional(),
});

const createAttachmentSchema = z.object({
  ticketId: z.coerce.number().int().positive(),
});

function parseIdParam(value: string) {
  const id = Number(value);
  if (!Number.isInteger(id) || id <= 0) {
    return null;
  }

  return id;
}

async function discardUploadedFile(file?: Express.Multer.File | null) {
  if (!file) {
    return;
  }

  try {
    await fs.unlink(file.path);
  } catch {}
}

function resolveStoredPath(filePath: string) {
  if (path.isAbsolute(filePath)) {
    return filePath;
  }

  const sanitized = filePath.replace(/^uploads[\\/]/, "");
  return path.join(process.cwd(), "uploads", sanitized);
}

async function removeStoredFile(filePath?: string | null) {
  if (!filePath) {
    return;
  }

  try {
    await fs.unlink(resolveStoredPath(filePath));
  } catch {}
}

async function getAttachments(req: Request, res: Response) {
  const viewer = getViewer(req);
  if (!viewer) {
    return res.status(401).json({ message: "Authentication required" });
  }

  const parsed = attachmentQuerySchema.safeParse(req.query);
  if (!parsed.success) {
    return res.status(400).json(parsed.error.format());
  }

  if (!parsed.data.ticketId) {
    const attachments = await findAttachments();
    return res.status(200).json(attachments);
  }

  const ticket = await findTicket({ id: parsed.data.ticketId });
  if (!ticket) {
    return res.status(404).json({ message: "Ticket not found" });
  }

  if (!canViewTicket(ticket, viewer)) {
    return res.status(403).json({ message: "Insufficient permissions" });
  }

  const attachments = await findAttachments({ ticketId: ticket.id });
  res.status(200).json(attachments);
}

async function addAttachment(req: Request, res: Response) {
  const file = req.file as Express.Multer.File | undefined;
  const viewer = getViewer(req);
  if (!viewer) {
    await discardUploadedFile(file);
    return res.status(401).json({ message: "Authentication required" });
  }

  const parsed = createAttachmentSchema.safeParse(req.body);
  if (!parsed.success) {
    await discardUploadedFile(file);
    return res.status(400).json(parsed.error.format());
  }

  if (!file) {
    return res.status(400).json({ message: "File is required" });
  }

  const ticket = await findTicket({ id: parsed.data.ticketId });
  if (!ticket) {
    await discardUploadedFile(file);
    return res.status(404).json({ message: "Ticket not found" });
  }

  if (!canModifyTicket(ticket, viewer)) {
    await discardUploadedFile(file);
    return res.status(403).json({ message: "Insufficient permissions" });
  }

  const uploadsDir = path.join(process.cwd());
  const relativePath = path
    .relative(uploadsDir, file.path)
    .split(path.sep)
    .join("/");

  const attachment = await createAttachment({
    ticketId: ticket.id,
    userId: viewer.id,
    fileName: file.originalname,
    filePath: env.baseUrl + relativePath,
    fileSize: file.size,
  });

  res.status(201).json(attachment);
}

async function deleteAttachmentById(req: Request, res: Response) {
  const viewer = getViewer(req);
  if (!viewer) {
    return res.status(401).json({ message: "Authentication required" });
  }

  const id = parseIdParam(req.params.id);
  if (!id) {
    return res.status(400).json({ message: "Invalid attachment identifier" });
  }

  const attachment = await findAttachment({ id });
  if (!attachment) {
    return res.status(404).json({ message: "Attachment not found" });
  }

  const ticket = await findTicket({ id: attachment.ticketId });
  if (!ticket) {
    return res.status(404).json({ message: "Ticket not found" });
  }

  const isOwner = attachment.userId === viewer.id;
  if (!isOwner && !canModifyTicket(ticket, viewer)) {
    return res.status(403).json({ message: "Insufficient permissions" });
  }

  const deleted = await deleteAttachment(id);
  await removeStoredFile(deleted.filePath);

  res.status(200).json({ message: "Attachment deleted successfully" });
}

export { getAttachments, addAttachment, deleteAttachmentById };
