import { Request, Response } from "express";
import { z } from "zod";
import { RoleType, TicketType } from "../generated/prisma";
import {
  findTicketAssignees,
  createTicketAssignee,
  deleteTicketAssignee,
  findTicketAssignee,
} from "../services/ticket-assignee.service";
import { findTicket } from "../services/ticket.service";
import { findUser } from "../services/user.service";

type Viewer = { id: number; role: RoleType };
type TicketWithRelations = NonNullable<
  Awaited<ReturnType<typeof findTicket>>
>;

const ticketAssigneeQuerySchema = z.object({
  ticketId: z.coerce.number().int().positive(),
});

const createTicketAssigneeSchema = z.object({
  ticketId: z.number().int().positive(),
  userId: z.number().int().positive(),
});

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

    if (
      type === TicketType.ISSUE &&
      (requesterId === viewer.id || assigneeIds.includes(viewer.id))
    ) {
      return true;
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

function parseIdParam(value: string) {
  const id = Number(value);
  if (!Number.isInteger(id) || id <= 0) {
    return null;
  }

  return id;
}

async function getTicketAssignees(req: Request, res: Response) {
  const viewer = getViewer(req);
  if (!viewer) {
    return res.status(401).json({ message: "Authentication required" });
  }

  const parsed = ticketAssigneeQuerySchema.safeParse(req.query);
  if (!parsed.success) {
    return res.status(400).json(parsed.error.format());
  }

  const ticket = await findTicket({ id: parsed.data.ticketId });
  if (!ticket) {
    return res.status(404).json({ message: "Ticket not found" });
  }

  if (!canViewTicket(ticket, viewer)) {
    return res.status(403).json({ message: "Insufficient permissions" });
  }

  const assignees = await findTicketAssignees({ ticketId: ticket.id });
  res.status(200).json(assignees);
}

async function addTicketAssignee(req: Request, res: Response) {
  const viewer = getViewer(req);
  if (!viewer) {
    return res.status(401).json({ message: "Authentication required" });
  }

  const parsed = createTicketAssigneeSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json(parsed.error.format());
  }

  const { ticketId, userId } = parsed.data;

  const ticket = await findTicket({ id: ticketId });
  if (!ticket) {
    return res.status(404).json({ message: "Ticket not found" });
  }

  if (!canModifyTicket(ticket, viewer)) {
    return res.status(403).json({ message: "Insufficient permissions" });
  }

  const uniqueAssigneeIds = ticket.assignees.map((assignee) => assignee.user.id);
  if (uniqueAssigneeIds.includes(userId)) {
    return res
      .status(409)
      .json({ message: "User is already assigned to this ticket" });
  }

  const assignee = await findUser({ id: userId });
  if (!assignee) {
    return res.status(404).json({ message: "Assignee not found" });
  }

  const created = await createTicketAssignee({ ticketId: ticket.id, userId });
  res.status(201).json(created);
}

async function removeTicketAssignee(req: Request, res: Response) {
  const viewer = getViewer(req);
  if (!viewer) {
    return res.status(401).json({ message: "Authentication required" });
  }

  const id = parseIdParam(req.params.id);
  if (!id) {
    return res
      .status(400)
      .json({ message: "Invalid ticket assignee identifier" });
  }

  const assignment = await findTicketAssignee({ id });
  if (!assignment) {
    return res.status(404).json({ message: "Ticket assignee not found" });
  }

  const ticket = await findTicket({ id: assignment.ticketId });
  if (!ticket) {
    return res.status(404).json({ message: "Ticket not found" });
  }

  if (!canModifyTicket(ticket, viewer)) {
    return res.status(403).json({ message: "Insufficient permissions" });
  }

  await deleteTicketAssignee(id);
  res.status(200).json({ message: "Assignee removed successfully" });
}

export {
  getTicketAssignees,
  addTicketAssignee,
  removeTicketAssignee,
};
