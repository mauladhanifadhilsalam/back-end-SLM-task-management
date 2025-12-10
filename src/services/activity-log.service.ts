import prisma from "../db/prisma";
import { ActivityLog, ActivityTargetType, Prisma } from "@prisma/client";
import { refreshDashboard } from "./dashboard.service";
import { enqueueActivityLog } from "../queues/activityLog";
import {
  buildPaginatedResult,
  resolvePagination,
} from "../utils/pagination";
import { resolveSorting } from "../utils/sorting";
import { activityLogQuerySchema } from "../schemas/activity-log.schema";
import { z } from "zod";

type LogActivityInput = {
  userId?: number;
  action: string;
  targetType: ActivityTargetType;
  targetId: number;
  details?: Prisma.InputJsonValue;
  occurredAt?: Date;
};

type ActivityLogFilters = z.infer<typeof activityLogQuerySchema>;
type ActivityLogSortBy = keyof ActivityLog;

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
  const activityLog = await prisma.activityLog.create({
    data: input,
  });
  if (activityLog) {
    await refreshDashboard();
  }
}

async function recordActivity(input: LogActivityInput) {
  try {
    return await enqueueActivityLog(input);
  } catch (error) {
    console.error("Failed to record activity log", error);
    return null;
  }
}

function toActivityDetails(payload: unknown): Prisma.InputJsonValue {
  return JSON.parse(JSON.stringify(payload));
}

async function findActivityLogs(filters: ActivityLogFilters) {
  const pagination = resolvePagination(filters);
  const where = buildActivityLogWhere(filters);
  const orderBy = resolveSorting<ActivityLogSortBy>(filters, "occurredAt", "desc");
  const skip = (pagination.page - 1) * pagination.pageSize;

  const [items, total] = await prisma.$transaction([
    prisma.activityLog.findMany({
      where,
      skip,
      take: pagination.pageSize,
      orderBy,
      include: activityLogInclude,
    }),
    prisma.activityLog.count({ where }),
  ]);

  return buildPaginatedResult(items, total, pagination);
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
