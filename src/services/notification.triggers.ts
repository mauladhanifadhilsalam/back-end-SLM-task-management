import {
  NotificationTargetType,
  TicketStatus,
} from "../generated/prisma";
import type { TicketWithRelations } from "../utils/permissions";
import { dispatchNotification } from "./notification.dispatcher";
import capitalizeWord from "../utils/capitalizeWord";

type ProjectAssignment = {
  roleInProject: string;
  user: {
    id: number;
    fullName: string;
    email: string;
  } | null;
};

type ProjectWithAssignments = {
  id: number;
  name: string;
  assignments: ProjectAssignment[];
};

type CommentWithTicket = {
  id: number;
  message: string;
  user: { id: number; fullName: string; email: string | null };
  ticket: TicketWithRelations;
};

type NotificationActor = {
  id: number;
  fullName: string;
};

const completionStatuses = new Set<TicketStatus>([
  TicketStatus.DONE,
  TicketStatus.CLOSED,
]);

function formatRole(role?: string) {
  if (!role) return "project member";
  return role
    .split("_")
    .map((segment) => segment.charAt(0) + segment.slice(1).toLowerCase())
    .join(" ");
}

function formatActorName(actor?: NotificationActor | null) {
  return actor?.fullName ?? "Someone";
}

function buildProjectSubject(
  projectName: string | null | undefined,
  detail: string,
) {
  const normalized = projectName?.trim();
  return normalized && normalized.length
    ? `[${normalized}] ${detail}`
    : detail;
}

async function notifyProjectAssignments(
  project: ProjectWithAssignments,
  actor?: NotificationActor | null,
) {
  if (!project.assignments?.length) {
    return;
  }

  const actorName = formatActorName(actor);

  await Promise.all(
    project.assignments.map(async (assignment) => {
      if (!assignment.user) {
        return;
      }

      void dispatchNotification({
        recipientId: assignment.user.id,
        targetType: NotificationTargetType.PROJECT,
        targetId: project.id,
        subject:
          `You are assigned to project "${project.name}"`,
        message: `${actorName} assigned you to "${project.name}" as ${formatRole(
          assignment.roleInProject,
        )}.`,
      });
    }),
  );
}

async function notifyTicketAssignees(
  ticket: TicketWithRelations,
  assigneeIds: number[],
  actor?: NotificationActor | null,
) {
  const uniqueAssigneeIds = Array.from(new Set(assigneeIds)).filter(
    (id) => Number.isInteger(id) && id > 0,
  );
  if (!uniqueAssigneeIds.length) {
    return;
  }

  const actorName = formatActorName(actor);

  await Promise.all(
    uniqueAssigneeIds.map(async (userId) => {
      const assignee = ticket.assignees.find(
        (assignment) => assignment.user.id === userId,
      );
      if (!assignee) {
        return;
      }

      void dispatchNotification({
        recipientId: userId,
        targetType: NotificationTargetType.TICKET,
        targetId: ticket.id,
        subject: buildProjectSubject(
          ticket.project?.name,
          `${capitalizeWord(ticket.type)} #${ticket.id} assigned to you`,
        ),
        message: `${actorName} assigned you to ${ticket.type.toLowerCase()} "${ticket.title}".`,
      });
    }),
  );
}

async function notifyTicketCompletion(
  ticket: TicketWithRelations,
  previousStatus: TicketStatus,
  actor?: NotificationActor | null,
) {
  if (!completionStatuses.has(ticket.status)) {
    return;
  }

  if (completionStatuses.has(previousStatus)) {
    return;
  }

  const requester = ticket.requester;
  if (!requester) {
    return;
  }

  const actorName = formatActorName(actor);

  void dispatchNotification({
    recipientId: requester.id,
    targetType: NotificationTargetType.TICKET,
    targetId: ticket.id,
    subject: buildProjectSubject(
      ticket.project?.name,
      `${capitalizeWord(ticket.type)} #${ticket.id} is ${ticket.status.toLowerCase()}`,
    ),
    message: `${actorName} marked your requested ${ticket.type.toLowerCase()} "${ticket.title}" as ${ticket.status.toLowerCase()}.`,
  });
}

async function notifyTicketRequesterComment(comment: CommentWithTicket) {
  const ticket = comment.ticket;
  const requester = ticket?.requester;
  if (!requester) {
    return;
  }

  if (comment.user.id === requester.id) {
    return;
  }

  void dispatchNotification({
    recipientId: requester.id,
    targetType: NotificationTargetType.TICKET,
    targetId: ticket.id,
    subject: buildProjectSubject(
      ticket.project?.name,
      `${capitalizeWord(ticket.type)} #${ticket.id}`,
    ),
    message: comment.message,
    from: comment.user.email
      ? `${comment.user.fullName} <${comment.user.email}>`
      : undefined,
    replyTo: comment.user.email ?? undefined,
  });
}

export {
  notifyProjectAssignments,
  notifyTicketAssignees,
  notifyTicketCompletion,
  notifyTicketRequesterComment,
};
export type {
  CommentWithTicket as CommentNotificationPayload,
  NotificationActor,
};
