import prisma from "../db/prisma";
import {
  Prisma,
  RoleType,
  TicketPriority,
  TicketStatus,
  TicketType,
} from "../generated/prisma";

type TicketFilters = {
  projectId?: number;
  requesterId?: number;
  status?: TicketStatus;
  priority?: TicketPriority | null;
  type?: TicketType;
  assigneeId?: number;
  search?: string;
};

type NewTicketInput = {
  projectId: number;
  requesterId: number;
  type: TicketType;
  title: string;
  description?: string | null;
  priority?: TicketPriority | null;
  status?: TicketStatus;
  startDate?: Date | null;
  dueDate?: Date | null;
  assigneeIds?: number[];
};

type UpdateTicketInput = Partial<
  Omit<
    NewTicketInput,
    "assigneeIds" | "projectId" | "requesterId" | "type" | "title"
  >
> & {
  projectId?: number;
  requesterId?: number;
  type?: TicketType;
  title?: string;
  assigneeIds?: number[];
};

const ticketInclude = {
  project: {
    select: {
      id: true,
      name: true,
      status: true,
      startDate: true,
      endDate: true,
    },
  },
  requester: {
    select: {
      id: true,
      fullName: true,
      email: true,
      role: true,
    },
  },
  assignees: {
    select: {
      id: true,
      assignedAt: true,
      user: {
        select: {
          id: true,
          fullName: true,
          email: true,
          role: true,
        },
      },
    },
  },
} satisfies Prisma.TicketInclude;

function buildTicketWhere(filters: TicketFilters = {}) {
  const {
    projectId,
    requesterId,
    status,
    priority,
    type,
    assigneeId,
    search,
  } = filters;

  const where: Prisma.TicketWhereInput = {
    ...(projectId ? { projectId } : {}),
    ...(requesterId ? { requesterId } : {}),
    ...(status ? { status } : {}),
    ...(type ? { type } : {}),
    ...(priority !== undefined
      ? priority === null
        ? { priority: null }
        : { priority }
      : {}),
    ...(assigneeId
      ? {
          assignees: {
            some: {
              userId: assigneeId,
            },
          },
        }
      : {}),
  };

  if (search) {
    where.OR = [
      {
        title: {
          contains: search,
          mode: "insensitive",
        },
      },
      {
        description: {
          contains: search,
          mode: "insensitive",
        },
      },
    ];
  }

  const orClauses: Prisma.TicketWhereInput[] = [];

  return where;
}

async function findTickets(filters?: TicketFilters) {
  return await prisma.ticket.findMany({
    where: buildTicketWhere(filters),
    include: ticketInclude,
    orderBy: { updatedAt: "desc" },
  });
}

async function findTicket(where: Prisma.TicketWhereUniqueInput) {
  return await prisma.ticket.findUnique({
    where,
    include: ticketInclude,
  });
}

async function findAssignableUsers(ids: number[]) {
  if (!ids.length) return [];

  return await prisma.user.findMany({
    where: {
      id: { in: ids },
      role: {
        in: [RoleType.PROJECT_MANAGER, RoleType.DEVELOPER],
      },
    },
    select: {
      id: true,
    },
  });
}

async function createTicket(data: NewTicketInput) {
  const { assigneeIds, ...rest } = data;
  const uniqueAssigneeIds = assigneeIds
    ? Array.from(new Set(assigneeIds))
    : undefined;

  return await prisma.ticket.create({
    data: {
      ...rest,
      ...(uniqueAssigneeIds && uniqueAssigneeIds.length
        ? {
            assignees: {
              create: uniqueAssigneeIds.map((userId) => ({ userId })),
            },
          }
        : {}),
    },
    include: ticketInclude,
  });
}

async function editTicket(id: number, data: UpdateTicketInput) {
  const { assigneeIds, ...rest } = data;
  const uniqueAssigneeIds = assigneeIds
    ? Array.from(new Set(assigneeIds))
    : undefined;

  return await prisma.ticket.update({
    where: { id },
    data: {
      ...rest,
      ...(uniqueAssigneeIds
        ? {
            assignees: {
              deleteMany: {},
              ...(uniqueAssigneeIds.length
                ? {
                    create: uniqueAssigneeIds.map((userId) => ({ userId })),
                  }
                : {}),
            },
          }
        : {}),
    },
    include: ticketInclude,
  });
}

async function deleteTicket(id: number) {
  return await prisma.ticket.delete({
    where: { id },
  });
}

export {
  ticketInclude,
  findTickets,
  findTicket,
  createTicket,
  editTicket,
  deleteTicket,
  findAssignableUsers,
};
