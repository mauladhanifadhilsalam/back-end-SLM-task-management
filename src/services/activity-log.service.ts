import prisma from "../db/prisma";
import { ActivityTargetType, Prisma } from "@prisma/client";

type LogActivityInput = {
  userId?: number;
  action: string;
  targetType: ActivityTargetType;
  targetId: number;
  details?: Prisma.InputJsonValue;
  occurredAt?: Date;
};

type ActivityLogFilters = {
  targetType?: ActivityTargetType;
  targetId?: number;
  userId?: number;
  action?: string;
  from?: Date;
  to?: Date;
  page?: number;
  pageSize?: number;
};

type DeleteActivityLogsInput = {
  olderThan?: Date;
  targetType?: ActivityTargetType;
};

const activityLogInclude = {
  user: {
    select: {
      id: true,
      fullName: true,
      email: true,
      role: true,
    },
  },
} satisfies Prisma.ActivityLogInclude;

function buildActivityLogWhere(
  filters: ActivityLogFilters,
): Prisma.ActivityLogWhereInput {
  const where: Prisma.ActivityLogWhereInput = {};

  if (filters.targetType) {
    where.targetType = filters.targetType;
  }

  if (typeof filters.targetId === "number") {
    where.targetId = filters.targetId;
  }

  if (typeof filters.userId === "number") {
    where.userId = filters.userId;
  }

  if (filters.action) {
    where.action = {
      contains: filters.action,
      mode: "insensitive",
    };
  }

  if (filters.from || filters.to) {
    where.occurredAt = {};
    if (filters.from) {
      where.occurredAt.gte = filters.from;
    }
    if (filters.to) {
      where.occurredAt.lte = filters.to;
    }
  }

  return where;
}

async function logActivity(input: LogActivityInput) {
  return prisma.activityLog.create({
    data: input,
  });
}

async function recordActivity(input: LogActivityInput) {
  try {
    return await logActivity(input);
  } catch (error) {
    console.error("Failed to record activity log", error);
    return null;
  }
}

function toActivityDetails(payload: unknown): Prisma.InputJsonValue {
  return JSON.parse(JSON.stringify(payload));
}

async function findActivityLogs(filters: ActivityLogFilters) {
  const page = filters.page ?? 1;
  const pageSize = filters.pageSize ?? 25;

  const where = buildActivityLogWhere(filters);
  const skip = (page - 1) * pageSize;

  const [items, total] = await prisma.$transaction([
    prisma.activityLog.findMany({
      where,
      skip,
      take: pageSize,
      orderBy: { occurredAt: "desc" },
      include: activityLogInclude,
    }),
    prisma.activityLog.count({ where }),
  ]);

  const totalPages = pageSize > 0 ? Math.ceil(total / pageSize) : 0;

  return {
    items,
    total,
    page,
    pageSize,
    totalPages,
  };
}

async function findActivityLog(id: number) {
  return prisma.activityLog.findUnique({
    where: { id },
    include: activityLogInclude,
  });
}

async function deleteActivityLog(id: number) {
  return prisma.activityLog.delete({
    where: { id },
  });
}

async function deleteActivityLogs(filters: DeleteActivityLogsInput) {
  const where: Prisma.ActivityLogWhereInput = {};
  if (filters.olderThan) {
    where.occurredAt = { lt: filters.olderThan };
  }
  if (filters.targetType) {
    where.targetType = filters.targetType;
  }

  return prisma.activityLog.deleteMany({ where });
}

export {
  ActivityLogFilters,
  LogActivityInput,
  buildActivityLogWhere,
  logActivity,
  recordActivity,
  toActivityDetails,
  findActivityLogs,
  findActivityLog,
  deleteActivityLog,
  deleteActivityLogs,
};
