import prisma from "../db/prisma";
import { Prisma } from "@prisma/client";
import {
  buildPaginatedResult,
  resolvePagination,
  PaginatedResult,
} from "../utils/pagination";

type AttachmentFilters = {
  ticketId?: number;
  userId?: number;
  page?: number;
  pageSize?: number;
  uploadedFrom?: Date;
  uploadedTo?: Date;
};

type NewAttachmentInput = Pick<
  Prisma.AttachmentCreateInput,
  "fileName" | "filePath" | "fileSize" | "mimeType"
> & {
  ticketId: number;
  userId: number;
};

type AttachmentListItem = Prisma.AttachmentGetPayload<{}>;

async function findAttachments(
  filters: AttachmentFilters = {},
): Promise<PaginatedResult<AttachmentListItem>> {
  const where: Prisma.AttachmentWhereInput = {
    ...(filters.ticketId ? { ticketId: filters.ticketId } : {}),
    ...(filters.userId ? { userId: filters.userId } : {}),
  };

  if (filters.uploadedFrom || filters.uploadedTo) {
    where.createdAt = {
      ...(filters.uploadedFrom ? { gte: filters.uploadedFrom } : {}),
      ...(filters.uploadedTo ? { lte: filters.uploadedTo } : {}),
    };
  }

  const pagination = resolvePagination(filters);
  const skip = (pagination.page - 1) * pagination.pageSize;

  const [items, total] = await prisma.$transaction([
    prisma.attachment.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip,
      take: pagination.pageSize,
    }),
    prisma.attachment.count({ where }),
  ]);

  return buildPaginatedResult(items, total, pagination);
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
