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
  user: { id: number; fullName: string };
  ticket: TicketWithRelations;
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

async function notifyProjectAssignments(project: ProjectWithAssignments) {
  if (!project.assignments?.length) {
    return;
  }

  await Promise.all(
    project.assignments.map(async (assignment) => {
      if (!assignment.user) {
        return;
      }

      void dispatchNotification({
        recipientId: assignment.user.id,
        targetType: NotificationTargetType.PROJECT,
        targetId: project.id,
        subject: `Assigned to project "${project.name}"`,
        message: `You have been assigned to "${project.name}" as ${formatRole(
          assignment.roleInProject,
        )}.`,
      });
    }),
  );
}

async function notifyTicketAssignees(
  ticket: TicketWithRelations,
  assigneeIds: number[],
) {
  const uniqueAssigneeIds = Array.from(new Set(assigneeIds)).filter(
    (id) => Number.isInteger(id) && id > 0,
  );
  if (!uniqueAssigneeIds.length) {
    return;
  }

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
        subject: `${capitalizeWord(ticket.type)} #${ticket.id} assigned to you`,
        message: `You have been assigned to "${ticket.title}".`,
      });
    }),
  );
}

async function notifyTicketCompletion(
  ticket: TicketWithRelations,
  previousStatus: TicketStatus,
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

  void dispatchNotification({
    recipientId: requester.id,
    targetType: NotificationTargetType.TICKET,
    targetId: ticket.id,
    subject: `${capitalizeWord(ticket.type)} "${ticket.title}" is ${ticket.status.toLowerCase()}`,
    message: `Your requested ${capitalizeWord(ticket.type)} "${ticket.title}" was marked as ${ticket.status.toLowerCase()}.`,
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
    subject: `New comment on "${ticket.title}"`,
    message: `${comment.user.fullName} commented on "${ticket.title}": ${comment.message}`,
  });
}

export {
  notifyProjectAssignments,
  notifyTicketAssignees,
  notifyTicketCompletion,
  notifyTicketRequesterComment,
};
export type { CommentWithTicket as CommentNotificationPayload };
