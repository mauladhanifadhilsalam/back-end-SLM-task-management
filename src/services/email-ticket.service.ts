import { RoleType, TicketPriority, TicketType } from "@prisma/client";
import env from "../config/env";
import { isAdmin, isProjectManager } from "../utils/permissions";
import { findProject } from "./project.service";
import { createTicket } from "./ticket.service";
import { findAnyUser, findActiveUserByEmail } from "./user.service";

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
  });

  return ticket;
}

export { createTicketFromEmail };
