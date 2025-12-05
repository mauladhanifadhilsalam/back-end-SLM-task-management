import prisma from "../db/prisma";
import {
  Prisma,
  NotificationState,
  NotificationTargetType,
  NotifyStatusType,
} from "@prisma/client";
import {
  buildPaginatedResult,
  resolvePagination,
  PaginatedResult,
} from "../utils/pagination";

type NotificationFilters = {
  recipientId?: number;
  state?: NotificationState;
  targetType?: NotificationTargetType;
  targetId?: number;
  status?: NotifyStatusType;
  page?: number;
  pageSize?: number;
  sentFrom?: Date;
  sentTo?: Date;
};

type CreateNotificationInput = {
  recipientId: number;
  targetType: NotificationTargetType;
  targetId?: number | null;
  message: string;
  subject?: string | null;
  emailText?: string | null;
  emailFrom?: string | null;
  emailReplyTo?: string | null;
  state?: NotificationState;
  readAt?: Date | null;
  status?: NotifyStatusType | null;
  sentAt?: Date | null;
  emailError?: string | null;
};

type UpdateNotificationInput = Partial<CreateNotificationInput> & {
  recipientId?: number;
  targetType?: NotificationTargetType;
};

const notificationInclude = {
  recipient: {
    select: {
      id: true,
      fullName: true,
      email: true,
      role: true,
    },
  },
} satisfies Prisma.NotificationInclude;

type NotificationWithRelations = Prisma.NotificationGetPayload<{
  include: typeof notificationInclude;
}>;

function buildStatePatch(state?: NotificationState, readAt?: Date | null) {
  if (state === undefined && readAt === undefined) {
    return {};
  }

  if (state === NotificationState.READ) {
    return {
      state: NotificationState.READ,
      readAt: readAt ?? new Date(),
    };
  }

  if (state === NotificationState.UNREAD) {
    return {
      state: NotificationState.UNREAD,
      readAt: null,
    };
  }

  if (readAt !== undefined) {
    return { readAt };
  }

  return {};
}

async function findNotifications(
  filters: NotificationFilters = {},
): Promise<PaginatedResult<NotificationWithRelations>> {
  const { recipientId, state, targetType, targetId, status, sentFrom, sentTo } =
    filters;

  const where: Prisma.NotificationWhereInput = {
    ...(typeof recipientId === "number" ? { recipientId } : {}),
    ...(state ? { state } : {}),
    ...(targetType ? { targetType } : {}),
    ...(typeof targetId === "number" ? { targetId } : {}),
    ...(status ? { status } : {}),
  };

  if (sentFrom || sentTo) {
    where.sentAt = {
      ...(sentFrom ? { gte: sentFrom } : {}),
      ...(sentTo ? { lte: sentTo } : {}),
    };
  }

  const pagination = resolvePagination(filters);
  const skip = (pagination.page - 1) * pagination.pageSize;

  const [items, total] = await prisma.$transaction([
    prisma.notification.findMany({
      where,
      include: notificationInclude,
      orderBy: [{ createdAt: "desc" }, { id: "desc" }],
      skip,
      take: pagination.pageSize,
    }),
    prisma.notification.count({ where }),
  ]);

  return buildPaginatedResult(items, total, pagination);
}

async function findNotification(where: Prisma.NotificationWhereUniqueInput) {
  return prisma.notification.findUnique({
    where,
    include: notificationInclude,
  });
}

async function createNotification(data: CreateNotificationInput) {
  const statePatch = buildStatePatch(data.state, data.readAt);

  return prisma.notification.create({
    data: {
      recipientId: data.recipientId,
      targetType: data.targetType,
      ...(data.targetId !== undefined ? { targetId: data.targetId } : {}),
      message: data.message,
      ...(data.subject !== undefined ? { subject: data.subject } : {}),
      ...(data.emailText !== undefined ? { emailText: data.emailText } : {}),
      ...(data.emailFrom !== undefined ? { emailFrom: data.emailFrom } : {}),
      ...(data.emailReplyTo !== undefined
        ? { emailReplyTo: data.emailReplyTo }
        : {}),
      ...(data.status !== undefined ? { status: data.status } : {}),
      ...(data.sentAt !== undefined ? { sentAt: data.sentAt } : {}),
      ...(data.emailError !== undefined ? { emailError: data.emailError } : {}),
      ...statePatch,
    },
    include: notificationInclude,
  });
}

async function editNotification(id: number, data: UpdateNotificationInput) {
  const statePatch = buildStatePatch(data.state, data.readAt);

  const {
    recipientId,
    targetType,
    targetId,
    message,
    subject,
    emailText,
    emailFrom,
    emailReplyTo,
    status,
    sentAt,
    emailError,
  } = data;

  return prisma.notification.update({
    where: { id },
    data: {
      recipientId,
      targetType,
      targetId,
      message,
      subject,
      emailText,
      emailFrom,
      emailReplyTo,
      status,
      sentAt,
      emailError,
      ...statePatch,
    },
    include: notificationInclude,
  });
}

async function deleteNotification(id: number) {
  return prisma.notification.delete({
    where: { id },
  });
}

async function setNotificationState(
  id: number,
  state: NotificationState,
  readAt?: Date | null,
) {
  const patch = buildStatePatch(state, readAt);

  return prisma.notification.update({
    where: { id },
    data: patch,
    include: notificationInclude,
  });
}

export {
  notificationInclude,
  NotificationWithRelations,
  NotificationFilters,
  findNotifications,
  findNotification,
  createNotification,
  editNotification,
  deleteNotification,
  setNotificationState,
};
