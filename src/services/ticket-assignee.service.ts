import prisma from "../db/prisma";
import { Prisma } from "@prisma/client";
import {
  buildPaginatedResult,
  resolvePagination,
  PaginatedResult,
} from "../utils/pagination";

type TicketAssigneeFilters = {
  ticketId?: number;
  userId?: number;
  assignedFrom?: Date;
  assignedTo?: Date;
  page?: number;
  pageSize?: number;
};

type NewTicketAssigneeInput = {
  ticketId: number;
  userId: number;
};

const ticketAssigneeInclude = {
  user: {
    select: {
      id: true,
      fullName: true,
      email: true,
      role: true,
    },
  },
  ticket: {
    select: {
      id: true,
      title: true,
      type: true,
      status: true,
      priority: true,
      projectId: true,
    },
  },
} satisfies Prisma.TicketAssigneeInclude;

type TicketAssigneeListItem = Prisma.TicketAssigneeGetPayload<{
  include: typeof ticketAssigneeInclude;
}>;

async function findTicketAssignees(
  filters: TicketAssigneeFilters = {},
): Promise<PaginatedResult<TicketAssigneeListItem>> {
  const { ticketId, userId, assignedFrom, assignedTo } = filters;

  const where: Prisma.TicketAssigneeWhereInput = {
    ...(typeof ticketId === "number" ? { ticketId } : {}),
    ...(typeof userId === "number" ? { userId } : {}),
  };

  if (assignedFrom || assignedTo) {
    where.assignedAt = {
      ...(assignedFrom ? { gte: assignedFrom } : {}),
      ...(assignedTo ? { lte: assignedTo } : {}),
    };
  }

  const pagination = resolvePagination(filters);
  const skip = (pagination.page - 1) * pagination.pageSize;

  const [items, total] = await prisma.$transaction([
    prisma.ticketAssignee.findMany({
      where,
      include: ticketAssigneeInclude,
      orderBy: { assignedAt: "desc" },
      skip,
      take: pagination.pageSize,
    }),
    prisma.ticketAssignee.count({ where }),
  ]);

  return buildPaginatedResult(items, total, pagination);
}

async function findTicketAssignee(
  where: Prisma.TicketAssigneeWhereUniqueInput,
) {
  return await prisma.ticketAssignee.findUnique({
    where,
    include: ticketAssigneeInclude,
  });
}

async function createTicketAssignee(data: NewTicketAssigneeInput) {
  return await prisma.ticketAssignee.create({
    data,
    include: ticketAssigneeInclude,
  });
}

async function deleteTicketAssignee(id: number) {
  return await prisma.ticketAssignee.delete({
    where: { id },
  });
}

export {
  findTicketAssignees,
  findTicketAssignee,
  createTicketAssignee,
  deleteTicketAssignee,
};
export type { TicketAssigneeFilters, NewTicketAssigneeInput };
