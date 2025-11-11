import { Request } from "express";
import { RoleType, TicketType } from "../generated/prisma";
import { findTicket } from "../services/ticket.service";

type Viewer = { id: number; role: RoleType };
type TicketWithRelations = NonNullable<
  Awaited<ReturnType<typeof findTicket>>
>;

function getViewer(req: Request): Viewer | null {
  if (!req.user) {
    return null;
  }

  const id = Number(req.user.sub);
  if (!Number.isInteger(id) || id <= 0) {
    return null;
  }

  return { id, role: req.user.role };
}

function isAdmin(viewer: Viewer) {
  return viewer.role === RoleType.ADMIN;
}

function isDeveloper(viewer: Viewer) {
  return viewer.role === RoleType.DEVELOPER;
}

function canViewTicket(ticket: TicketWithRelations, viewer: Viewer) {
  if (isAdmin(viewer)) {
    return true;
  }

  if (ticket.type === TicketType.TASK && isDeveloper(viewer)) {
    return true;
  }

  if (ticket.type === TicketType.ISSUE && isDeveloper(viewer)) {
    return true;
  }

  if (ticket.requesterId === viewer.id) {
    return true;
  }

  return ticket.assignees.some((assignee) => assignee.user.id === viewer.id);
}

function canModifyTicketState(
  type: TicketType,
  requesterId: number,
  assigneeIds: number[],
  viewer: Viewer,
) {
  if (isAdmin(viewer)) {
    return true;
  }

  if (isDeveloper(viewer)) {
    if (type === TicketType.TASK) {
      return true;
    }

    if (type === TicketType.ISSUE) {
      return (
        requesterId === viewer.id || assigneeIds.includes(viewer.id)
      );
    }
  }

  if (requesterId === viewer.id) {
    return true;
  }

  return assigneeIds.includes(viewer.id);
}

function canModifyTicket(ticket: TicketWithRelations, viewer: Viewer) {
  const assigneeIds = ticket.assignees.map((assignee) => assignee.user.id);
  return canModifyTicketState(ticket.type, ticket.requesterId, assigneeIds, viewer);
}

export {
  Viewer,
  TicketWithRelations,
  getViewer,
  isAdmin,
  isDeveloper,
  canViewTicket,
  canModifyTicketState,
  canModifyTicket,
};
