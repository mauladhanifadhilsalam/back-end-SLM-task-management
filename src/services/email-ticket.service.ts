import { RoleType, TicketPriority, TicketType } from "@prisma/client";
import env from "../config/env";
import { isAdmin, isProjectManager } from "../utils/permissions";
import { findProject } from "./project.service";
import { createTicket } from "./ticket.service";
import { findLatestAssigneeForProject } from "./ticket-assignee.service";
import { findAnyUser, findActiveDevelopersByIds, findActiveUserByEmail } from "./user.service";

type EmailTicketInput = {
  subject?: string | null;
  body?: string | null;
  fromEmail?: string | null;
  messageId?: string | null;
};

function resolveTicketType(value: string) {
  const normalized = value.trim().toUpperCase();
  return TicketType[normalized as keyof typeof TicketType] ?? TicketType.ISSUE;
}

function resolveTicketPriority(value: string) {
  const normalized = value.trim().toUpperCase();
  return TicketPriority[normalized as keyof typeof TicketPriority] ?? TicketPriority.MEDIUM;
}

async function resolveRequester(fromEmail?: string | null) {
  if (fromEmail) {
    const requester = await findActiveUserByEmail(fromEmail);
    if (requester) {
      return requester;
    }
  }

  if (env.emailTicketRequesterId) {
    const fallback = await findAnyUser(env.emailTicketRequesterId);
    if (fallback?.isActive) {
      return fallback;
    }
  }

  return null;
}

function requesterCanCreate(
  projectAssignments: { user?: { id: number } }[],
  requester: { id: number; role: RoleType },
) {
  const viewer = { id: requester.id, role: requester.role };
  if (isAdmin(viewer) || isProjectManager(viewer)) {
    return true;
  }

  const memberIds = projectAssignments
    .map((assignment) => assignment.user?.id)
    .filter((id): id is number => typeof id === "number");

  return memberIds.includes(requester.id);
}

function resolveNextAssigneeId(assigneeIds: number[], lastAssigneeId: number | null) {
  if (!assigneeIds.length) {
    return null;
  }

  const orderedIds = [...assigneeIds].sort((a, b) => a - b);
  if (!lastAssigneeId) {
    return orderedIds[0];
  }

  const index = orderedIds.indexOf(lastAssigneeId);
  if (index === -1) {
    return orderedIds[0];
  }

  const nextIndex = (index + 1) % orderedIds.length;
  return orderedIds[nextIndex];
}

async function createTicketFromEmail(input: EmailTicketInput) {
  if (!env.emailTicketProjectId) {
    console.warn("Email ticket import skipped: EMAIL_TICKET_PROJECT_ID missing");
    return null;
  }

  const project = await findProject({ id: env.emailTicketProjectId });
  if (!project) {
    console.warn(`Email ticket import skipped: project ${env.emailTicketProjectId} not found`);
    return null;
  }

  const requester = await resolveRequester(input.fromEmail);
  if (!requester) {
    console.warn("Email ticket import skipped: requester not found");
    return null;
  }

  if (!requesterCanCreate(project.assignments, requester)) {
    console.warn("Email ticket import skipped: requester lacks project access");
    return null;
  }

  const assignmentIds = project.assignments
    .map((assignment) => assignment.user?.id)
    .filter((id): id is number => typeof id === "number");
  const activeDevelopers = await findActiveDevelopersByIds(assignmentIds);
  const activeDeveloperIds = activeDevelopers.map((developer) => developer.id);
  const lastAssigneeId =
    activeDeveloperIds.length > 0
      ? await findLatestAssigneeForProject(project.id, activeDeveloperIds)
      : null;
  const nextAssigneeId = resolveNextAssigneeId(activeDeveloperIds, lastAssigneeId);

  const title = input.subject?.trim() || "Email request";
  const body = input.body?.trim();
  const descriptionLines = [
    body && body.length ? body : "(no message body)",
    "",
    `From: ${input.fromEmail ?? "unknown"}`,
  ];

  if (input.messageId) {
    descriptionLines.push(`Message-Id: ${input.messageId}`);
  }

  const ticket = await createTicket({
    projectId: env.emailTicketProjectId,
    requesterId: requester.id,
    type: resolveTicketType(env.emailTicketType),
    title,
    description: descriptionLines.join("\n"),
    priority: resolveTicketPriority(env.emailTicketPriority),
    assigneeIds: nextAssigneeId ? [nextAssigneeId] : undefined,
  });

  return ticket;
}

export { createTicketFromEmail };
