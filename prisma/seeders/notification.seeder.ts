import prisma from "../../src/db/prisma";
import {
  NotificationState,
  NotificationTargetType,
} from "../../src/generated/prisma";
import { createNotification } from "../../src/services/notification.service";

type NotificationSeed = {
  recipientEmail: string;
  targetType: NotificationTargetType;
  projectOwnerEmail?: string;
  ticketTitle?: string;
  commentMessage?: string;
  message: string;
  state?: NotificationState;
  readAt?: string;
};

const notificationSeeds: NotificationSeed[] = [
  {
    recipientEmail: "skywalker@example.com",
    targetType: NotificationTargetType.PROJECT,
    projectOwnerEmail: "grammont@example.com",
    message: "Project Velvet status summary is ready for review.",
  },
  {
    recipientEmail: "gandalf@yahoo.com",
    targetType: NotificationTargetType.TICKET,
    ticketTitle: "Stabilize SSO callback failures",
    message: "QA reopened the ticket after detecting a regression.",
  },
  {
    recipientEmail: "samwise@example.com",
    targetType: NotificationTargetType.TICKET,
    ticketTitle: "Draft customer launch communications",
    message: "Ticket deadline approaching in three days.",
  },
  {
    recipientEmail: "frodo@example.com",
    targetType: NotificationTargetType.COMMENT,
    commentMessage:
      "Marketing wants the talking points by Friday. Uploading the outline for review later today.",
    message: "Samwise replied to your comment on launch communications.",
    state: NotificationState.READ,
    readAt: "2025-03-14T10:00:00.000Z",
  },
];

async function getUserId(
  email: string,
  cache: Map<string, number>,
): Promise<number> {
  const cached = cache.get(email);
  if (cached) return cached;

  const user = await prisma.user.findUnique({
    where: { email },
    select: { id: true },
  });

  if (!user) {
    throw new Error(`Cannot seed notifications: user with email ${email} not found`);
  }

  cache.set(email, user.id);
  return user.id;
}

async function getProjectIdByOwner(
  ownerEmail: string,
  cache: Map<string, number>,
): Promise<number> {
  const cached = cache.get(ownerEmail);
  if (cached) return cached;

  const project = await prisma.project.findFirst({
    where: {
      owner: { email: ownerEmail },
    },
    select: { id: true },
    orderBy: { id: "asc" },
  });

  if (!project) {
    throw new Error(
      `Cannot seed notifications: project for owner ${ownerEmail} not found`,
    );
  }

  cache.set(ownerEmail, project.id);
  return project.id;
}

async function getTicketIdByTitle(
  title: string,
  cache: Map<string, number>,
): Promise<number> {
  const cached = cache.get(title);
  if (cached) return cached;

  const ticket = await prisma.ticket.findFirst({
    where: { title },
    select: { id: true },
  });

  if (!ticket) {
    throw new Error(
      `Cannot seed notifications: ticket with title "${title}" not found`,
    );
  }

  cache.set(title, ticket.id);
  return ticket.id;
}

async function getCommentIdByMessage(
  message: string,
  cache: Map<string, number>,
): Promise<number> {
  const cached = cache.get(message);
  if (cached) return cached;

  const comment = await prisma.comment.findFirst({
    where: { message },
    select: { id: true },
  });

  if (!comment) {
    throw new Error(
      "Cannot seed notifications: comment with the provided message not found",
    );
  }

  cache.set(message, comment.id);
  return comment.id;
}

export default async function seedNotification() {
  const userCache = new Map<string, number>();
  const projectCache = new Map<string, number>();
  const ticketCache = new Map<string, number>();
  const commentCache = new Map<string, number>();

  for (const seed of notificationSeeds) {
    const recipientId = await getUserId(seed.recipientEmail, userCache);

    let targetId: number | undefined;
    if (seed.targetType === NotificationTargetType.PROJECT) {
      if (!seed.projectOwnerEmail) {
        throw new Error(
          "Cannot seed notifications: projectOwnerEmail missing for PROJECT target",
        );
      }
      targetId = await getProjectIdByOwner(seed.projectOwnerEmail, projectCache);
    } else if (seed.targetType === NotificationTargetType.TICKET) {
      if (!seed.ticketTitle) {
        throw new Error(
          "Cannot seed notifications: ticketTitle missing for TICKET target",
        );
      }
      targetId = await getTicketIdByTitle(seed.ticketTitle, ticketCache);
    } else if (seed.targetType === NotificationTargetType.COMMENT) {
      if (!seed.commentMessage) {
        throw new Error(
          "Cannot seed notifications: commentMessage missing for COMMENT target",
        );
      }
      targetId = await getCommentIdByMessage(seed.commentMessage, commentCache);
    }

    await createNotification({
      recipientId,
      targetType: seed.targetType,
      targetId,
      message: seed.message,
      state: seed.state,
      readAt: seed.readAt ? new Date(seed.readAt) : undefined,
    });
  }
}
