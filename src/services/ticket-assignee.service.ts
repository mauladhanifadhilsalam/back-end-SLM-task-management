import prisma from "../db/prisma";
import { Prisma, TicketAssignee, TicketStatus } from "@prisma/client";
import { buildPaginatedResult, resolvePagination, PaginatedResult } from "../utils/pagination";
import z from "zod";
import { ticketAssigneeQuerySchema } from "../schemas/ticket-assignee.schema";
import { resolveSorting } from "../utils/sorting";

type TicketAssigneeFilters = z.infer<typeof ticketAssigneeQuerySchema>;

type ticketAssigneeSortBy = keyof TicketAssignee;

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

function buildTicketAssigneeWhere(
  filters: TicketAssigneeFilters = {},
): Prisma.TicketAssigneeWhereInput {
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

  return where;
}

async function findTicketAssignees(
  filters: TicketAssigneeFilters = {},
): Promise<PaginatedResult<TicketAssigneeListItem>> {
  const where = buildTicketAssigneeWhere(filters);

  const pagination = resolvePagination(filters);
  const orderBy = resolveSorting<ticketAssigneeSortBy>(filters, "id", "desc");
  const skip = (pagination.page - 1) * pagination.pageSize;

  const [items, total] = await prisma.$transaction([
    prisma.ticketAssignee.findMany({
      where,
      include: ticketAssigneeInclude,
      orderBy,
      skip,
      take: pagination.pageSize,
    }),
    prisma.ticketAssignee.count({ where }),
  ]);

  return buildPaginatedResult(items, total, pagination);
}

async function findTicketAssignee(where: Prisma.TicketAssigneeWhereUniqueInput) {
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

async function findLatestAssigneeForProject(projectId: number, userIds: number[]) {
  if (!userIds.length) return null;

  const latest = await prisma.ticketAssignee.findFirst({
    where: {
      userId: { in: userIds },
      ticket: { projectId },
    },
    orderBy: { assignedAt: "desc" },
    select: { userId: true },
  });

  return latest?.userId ?? null;
}

async function findLeastLoadedAssignees(projectId: number, userIds: number[]) {
  if (!userIds.length) return [];

  const counts = await prisma.ticketAssignee.groupBy({
    by: ["userId"],
    where: {
      userId: { in: userIds },
      ticket: {
        projectId,
        status: { notIn: [TicketStatus.DONE, TicketStatus.CLOSED, TicketStatus.RESOLVED] },
      },
    },
    _count: { _all: true },
  });

  const countsByUser = new Map<number, number>();
  counts.forEach((row) => {
    countsByUser.set(row.userId, row._count._all);
  });

  let minCount = Number.POSITIVE_INFINITY;
  const candidates: number[] = [];

  for (const userId of userIds) {
    const count = countsByUser.get(userId) ?? 0;
    if (count < minCount) {
      minCount = count;
      candidates.length = 0;
      candidates.push(userId);
    } else if (count === minCount) {
      candidates.push(userId);
    }
  }

  return candidates;
}

export {
  findTicketAssignees,
  findTicketAssignee,
  createTicketAssignee,
  deleteTicketAssignee,
  findLatestAssigneeForProject,
  findLeastLoadedAssignees,
};
export type { TicketAssigneeFilters, NewTicketAssigneeInput };
