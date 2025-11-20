import prisma from "../db/prisma";
import { Prisma } from "@prisma/client";

type TicketAssigneeFilters = {
  ticketId?: number;
  userId?: number;
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

async function findTicketAssignees(filters: TicketAssigneeFilters = {}) {
  const { ticketId, userId } = filters;

  return await prisma.ticketAssignee.findMany({
    where: {
      ...(typeof ticketId === "number" ? { ticketId } : {}),
      ...(typeof userId === "number" ? { userId } : {}),
    },
    include: ticketAssigneeInclude,
    orderBy: { assignedAt: "desc" },
  });
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
