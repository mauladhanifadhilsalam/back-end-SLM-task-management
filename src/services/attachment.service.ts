import prisma from "../db/prisma";
import { Prisma } from "../generated/prisma";

const attachmentInclude = {
  user: {
    select: {
      id: true,
      fullName: true,
      email: true,
      role: true,
    },
  },
} satisfies Prisma.AttachmentInclude;

type AttachmentFilters = {
  ticketId?: number;
  userId?: number;
};

type NewAttachmentInput = {
  ticketId: number;
  userId: number;
  fileName: string;
  filePath: string;
  fileSize: number;
};

async function findAttachments(filters: AttachmentFilters = {}) {
  const where: Prisma.AttachmentWhereInput = {
    ...(filters.ticketId ? { ticketId: filters.ticketId } : {}),
    ...(filters.userId ? { userId: filters.userId } : {}),
  };

  return prisma.attachment.findMany({
    where,
    include: attachmentInclude,
    orderBy: { createdAt: "desc" },
  });
}

async function findAttachment(where: Prisma.AttachmentWhereUniqueInput) {
  return prisma.attachment.findUnique({
    where,
    include: attachmentInclude,
  });
}

async function createAttachment(data: NewAttachmentInput) {
  return prisma.attachment.create({
    data,
    include: attachmentInclude,
  });
}

async function deleteAttachment(id: number) {
  return prisma.attachment.delete({
    where: { id },
    include: attachmentInclude,
  });
}

export {
  findAttachments,
  findAttachment,
  createAttachment,
  deleteAttachment,
};
