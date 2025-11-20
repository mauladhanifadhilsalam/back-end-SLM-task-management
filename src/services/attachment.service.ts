import prisma from "../db/prisma";
import { Prisma } from "@prisma/client";

type AttachmentFilters = {
  ticketId?: number;
  userId?: number;
};

type NewAttachmentInput = Pick<
  Prisma.AttachmentCreateInput,
  "fileName" | "filePath" | "fileSize" | "mimeType"
> & {
  ticketId: number;
  userId: number;
};

async function findAttachments(filters: AttachmentFilters = {}) {
  const where: Prisma.AttachmentWhereInput = {
    ...(filters.ticketId ? { ticketId: filters.ticketId } : {}),
    ...(filters.userId ? { userId: filters.userId } : {}),
  };

  return prisma.attachment.findMany({
    where,
    orderBy: { createdAt: "desc" },
  });
}

async function findAttachment(where: Prisma.AttachmentWhereUniqueInput) {
  return prisma.attachment.findUnique({
    where,
  });
}

async function createAttachment(data: NewAttachmentInput) {
  return prisma.attachment.create({
    data,
  });
}

async function deleteAttachment(id: number) {
  return prisma.attachment.delete({
    where: { id },
  });
}

export { findAttachments, findAttachment, createAttachment, deleteAttachment };
