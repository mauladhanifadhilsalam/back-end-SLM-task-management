import prisma from "../db/prisma";
import { Comment, Prisma } from "@prisma/client";
import { ticketInclude } from "./ticket.service";
import { buildPaginatedResult, resolvePagination, PaginatedResult } from "../utils/pagination";
import { resolveSorting } from "../utils/sorting";
import z from "zod";
import { commentQuerySchema } from "../schemas/comment.schema";

type CommentFilters = z.infer<typeof commentQuerySchema>;
type CommentSortBy = keyof Comment;

type NewCommentInput = Pick<Prisma.CommentCreateInput, "message"> & {
  ticketId: number;
  userId: number;
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

type CommentListItem = Prisma.CommentGetPayload<{
  include: typeof commentInclude;
}>;

async function findComments(
  filters: CommentFilters = {},
): Promise<PaginatedResult<CommentListItem>> {
  const { ticketId, authorId, createdFrom, createdTo } = filters;
  const where: Prisma.CommentWhereInput = {
    ...(ticketId ? { ticketId } : {}),
    ...(authorId ? { userId: authorId } : {}),
  };

  if (createdFrom || createdTo) {
    where.createdAt = {
      ...(createdFrom ? { gte: createdFrom } : {}),
      ...(createdTo ? { lte: createdTo } : {}),
    };
  }

  const pagination = resolvePagination(filters);
  const orderBy = resolveSorting<CommentSortBy>(filters, "createdAt", "asc");
  const skip = (pagination.page - 1) * pagination.pageSize;

  const [items, total] = await prisma.$transaction([
    prisma.comment.findMany({
      where,
      include: commentInclude,
      orderBy,
      skip,
      take: pagination.pageSize,
    }),
    prisma.comment.count({ where }),
  ]);

  return buildPaginatedResult(items, total, pagination);
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

export { findComments, findComment, createComment, editComment, deleteComment };
