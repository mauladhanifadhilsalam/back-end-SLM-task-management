import { Request, Response } from "express";
import fs from "fs/promises";
import path from "path";
import {
  findAttachments,
  findAttachment,
  createAttachment,
  deleteAttachment,
} from "../services/attachment.service";
import { findTicket } from "../services/ticket.service";
import {
  requireViewer,
  canModifyTicket,
  isAdmin,
} from "../utils/permissions";
import {
  attachmentQuerySchema,
  createAttachmentSchema,
} from "../schemas/attachment.schema";

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

  return path.join(process.cwd(), filePath);
}

async function removeStoredFile(filePath?: string | null) {
  if (!filePath) {
    return;
  }

  try {
    await fs.unlink(resolveStoredPath(filePath));
  } catch {}
}

async function getBase64(FilePath: string) {
  const file = await fs.readFile(FilePath);
  const base64 = file.toString("base64");
  return base64;
}

async function getAttachments(req: Request, res: Response) {
  const parsed = attachmentQuerySchema.safeParse(req.query);
  if (!parsed.success) {
    return res.status(400).json(parsed.error.format());
  }

  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  if (!parsed.data.ticketId) {
    if (!isAdmin(viewer)) {
      return res
        .status(403)
        .json({ message: "You are not allowed to access all attachments" });
    }

    const attachments = await findAttachments();

    const base64Attachments = await Promise.all(
      attachments.map(async (attachment) => {
        const base64 = await getBase64(attachment.filePath);
        return { ...attachment, base64 };
      }),
    );

    return res.status(200).json(base64Attachments);
  }

  const ticket = await findTicket({ id: parsed.data.ticketId });
  if (!ticket) {
    return res.status(404).json({ message: "Ticket not found" });
  }

  const attachments = await findAttachments({ ticketId: ticket.id });

  const base64Attachments = await Promise.all(
    attachments.map(async (attachment) => {
      const base64 = await getBase64(attachment.filePath);
      return { ...attachment, base64 };
    }),
  );

  res.status(200).json(base64Attachments);
}

async function addAttachment(req: Request, res: Response) {
  const file = req.file as Express.Multer.File | undefined;
  const viewer = requireViewer(req, res);
  if (!viewer) {
    await discardUploadedFile(file);
    return;
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
    filePath: relativePath,
    fileSize: file.size,
    mimeType: file.mimetype,
  });

  res.status(201).json(attachment);
}

async function deleteAttachmentById(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
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
