import prisma from "../db/prisma";
import {
  Prisma,
  NotificationState,
  NotificationTargetType,
  NotifyStatusType,
} from "../generated/prisma";

type NotificationFilters = {
  recipientId?: number;
  state?: NotificationState;
  targetType?: NotificationTargetType;
  targetId?: number;
};

type CreateNotificationInput = {
  recipientId: number;
  targetType: NotificationTargetType;
  targetId?: number | null;
  message: string;
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

async function findNotifications(filters: NotificationFilters = {}) {
  const { recipientId, state, targetType, targetId } = filters;

  return prisma.notification.findMany({
    where: {
      ...(typeof recipientId === "number" ? { recipientId } : {}),
      ...(state ? { state } : {}),
      ...(targetType ? { targetType } : {}),
      ...(typeof targetId === "number" ? { targetId } : {}),
    },
    include: notificationInclude,
    orderBy: [{ createdAt: "desc" }, { id: "desc" }],
  });
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
