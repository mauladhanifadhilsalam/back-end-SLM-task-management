import { Request, Response } from "express";
import {
  findTicketAssignees,
  createTicketAssignee,
  deleteTicketAssignee,
  findTicketAssignee,
} from "../services/ticket-assignee.service";
import { findTicket } from "../services/ticket.service";
import { findUser, findAnyUser } from "../services/user.service";
import {
  requireViewer,
  canViewTicket,
  canModifyTicket,
} from "../utils/permissions";
import {
  ticketAssigneeQuerySchema,
  createTicketAssigneeSchema
} from "../schemas/ticket-assignee.schema";
import { notifyTicketAssignees } from "../services/notification.triggers";
import { ActivityTargetType } from "../generated/prisma";
import {
  recordActivity,
  toActivityDetails,
} from "../services/activity-log.service";

function parseIdParam(value: string) {
  const id = Number(value);
  if (!Number.isInteger(id) || id <= 0) {
    return null;
  }

  return id;
}

async function getTicketAssignees(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
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
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }
  const actorProfile = await findAnyUser(viewer.id);
  const notificationActor = actorProfile
    ? { id: actorProfile.id, fullName: actorProfile.fullName }
    : undefined;

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

  const updatedTicket = await findTicket({ id: ticket.id });
  if (updatedTicket) {
    await notifyTicketAssignees(updatedTicket, [userId], notificationActor);
  }

  await recordActivity({
    userId: viewer.id,
    action: "TICKET_ASSIGNEE_ADDED",
    targetType: ActivityTargetType.TICKET,
    targetId: ticket.id,
    details: toActivityDetails({
      assignmentId: created.id,
      assigneeId: userId,
    }),
  });

  res.status(201).json(created);
}

async function removeTicketAssignee(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
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
  await recordActivity({
    userId: viewer.id,
    action: "TICKET_ASSIGNEE_REMOVED",
    targetType: ActivityTargetType.TICKET,
    targetId: ticket.id,
    details: toActivityDetails({
      assignmentId: id,
      assigneeId: assignment.userId,
    }),
  });
  res.status(200).json({ message: "Assignee removed successfully" });
}

export {
  getTicketAssignees,
  addTicketAssignee,
  removeTicketAssignee,
};
