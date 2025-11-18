import prisma from "../db/prisma";
import { Prisma } from "@prisma/client";
import { ticketInclude } from "./ticket.service";

type CommentFilters = {
  ticketId?: number;
};

type NewCommentInput = {
  ticketId: number;
  userId: number;
  message: string;
};

const commentInclude = {
  user: {
    select: {
      id: true,
      fullName: true,
      email: true,
      role: true,
    },
  },
  ticket: {
    include: ticketInclude,
  },
} satisfies Prisma.CommentInclude;

async function findComments(filters: CommentFilters = {}) {
  const { ticketId } = filters;
  return await prisma.comment.findMany({
    where: {
      ...(ticketId ? { ticketId } : {}),
    },
    include: commentInclude,
    orderBy: { createdAt: "asc" },
  });
}

async function findComment(where: Prisma.CommentWhereUniqueInput) {
  return await prisma.comment.findUnique({
    where,
    include: commentInclude,
  });
}

async function createComment(data: NewCommentInput) {
  return await prisma.comment.create({
    data,
    include: commentInclude,
  });
}

async function editComment(id: number, data: Prisma.CommentUpdateInput) {
  return await prisma.comment.update({
    where: { id },
    data,
    include: commentInclude,
  });
}

async function deleteComment(id: number) {
  return await prisma.comment.delete({
    where: { id },
  });
}

export {
  findComments,
  findComment,
  createComment,
  editComment,
  deleteComment,
};
