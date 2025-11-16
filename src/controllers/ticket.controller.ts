import { Request, Response } from "express";
import {
  findTickets,
  findTicket,
  createTicket,
  editTicket,
  deleteTicket,
  findAssignableUsers,
} from "../services/ticket.service";
import { findProject } from "../services/project.service";
import { findUser } from "../services/user.service";
import {
  requireViewer,
  isAdmin,
  canViewTicket,
  canModifyTicketState,
  canModifyTicket,
} from "../utils/permissions";
import {
  ticketQuerySchema,
  createTicketSchema,
  updateTicketSchema
} from "../schemas/ticket.schema";

function parseIdParam(value: string) {
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed <= 0) {
    return null;
  }
  return parsed;
}

async function getAllTickets(req: Request, res: Response) {
  try {
    if (!requireViewer(req, res)) {
      return;
    }

    const parsed = ticketQuerySchema.safeParse(req.query);
    if (!parsed.success) {
      return res.status(400).json(parsed.error.format());
    }

    const tickets = await findTickets(parsed.data);
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

async function getTicketById(req: Request, res: Response) {
  try {
    const viewer = requireViewer(req, res);
    if (!viewer) {
      return;
    }

    const id = parseIdParam(req.params.id);
    if (!id) {
      return res.status(400).json({ message: "Invalid ticket id" });
    }

    const ticket = await findTicket({ id });
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    if (!canViewTicket(ticket, viewer)) {
      return res.status(403).json({ message: "Insufficient permissions" });
    }

    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

async function insertTicket(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  const parsed = createTicketSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json(parsed.error.format());
  }

  const {
    projectId,
    requesterId,
    assigneeIds,
    startDate,
    dueDate,
    ...rest
  } = parsed.data;

  const effectiveRequesterId =
    isAdmin(viewer) && requesterId ? requesterId : viewer.id;

  const project = await findProject({ id: projectId });
  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }

  const requester = await findUser({ id: effectiveRequesterId });
  if (!requester) {
    return res.status(404).json({ message: "Requester not found" });
  }

  const uniqueAssigneeIds =
    assigneeIds && assigneeIds.length
      ? Array.from(new Set(assigneeIds))
      : undefined;

  if (uniqueAssigneeIds && uniqueAssigneeIds.length) {
    const assignees = await findAssignableUsers(uniqueAssigneeIds);
    if (assignees.length !== uniqueAssigneeIds.length) {
      return res
        .status(404)
        .json({ message: "One or more assignees not found" });
    }
  }

  const ticket = await createTicket({
    projectId,
    requesterId: effectiveRequesterId,
    startDate,
    dueDate,
    assigneeIds: uniqueAssigneeIds,
    ...rest,
  });

  res.status(201).json(ticket);
}

async function updateTicket(req: Request, res: Response) {
  const id = parseIdParam(req.params.id);
  if (!id) {
    return res.status(400).json({ message: "Invalid ticket id" });
  }

  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  const existing = await findTicket({ id });
  if (!existing) {
    return res.status(404).json({ message: "Ticket not found" });
  }

  if (!canModifyTicket(existing, viewer)) {
    return res.status(403).json({ message: "Insufficient permissions" });
  }

  const parsed = updateTicketSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json(parsed.error.format());
  }

  const {
    projectId,
    requesterId,
    assigneeIds,
    startDate,
    dueDate,
    ...rest
  } = parsed.data;

  if (projectId !== undefined && projectId !== existing.projectId) {
    const project = await findProject({ id: projectId });
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
  }

  if (requesterId !== undefined && requesterId !== existing.requesterId) {
    if (!isAdmin(viewer)) {
      return res
        .status(403)
        .json({ message: "Only admins can change the requester" });
    }

    const requester = await findUser({ id: requesterId });
    if (!requester) {
      return res.status(404).json({ message: "Requester not found" });
    }
  }

  let uniqueAssigneeIds: number[] | undefined;
  if (assigneeIds !== undefined) {
    uniqueAssigneeIds = Array.from(new Set(assigneeIds));
    if (uniqueAssigneeIds.length) {
      const assignees = await findAssignableUsers(uniqueAssigneeIds);
      if (assignees.length !== uniqueAssigneeIds.length) {
        return res
          .status(404)
          .json({ message: "One or more assignees not found" });
      }
    }
  }

  const nextRequesterId =
    requesterId !== undefined ? requesterId : existing.requesterId;
  const existingAssigneeIds = existing.assignees.map(
    (assignee) => assignee.user.id,
  );
  const nextAssigneeIds =
    uniqueAssigneeIds !== undefined ? uniqueAssigneeIds : existingAssigneeIds;

  const nextType = parsed.data.type ?? existing.type;

  if (
    !canModifyTicketState(
      nextType,
      nextRequesterId,
      nextAssigneeIds,
      viewer,
    )
  ) {
    return res.status(403).json({ message: "Insufficient permissions" });
  }

  const nextStart =
    startDate !== undefined ? startDate : existing.startDate ?? null;
  const nextDue = dueDate !== undefined ? dueDate : existing.dueDate ?? null;

  if (
    nextStart instanceof Date &&
    nextDue instanceof Date &&
    nextDue < nextStart
  ) {
    return res
      .status(400)
      .json({ message: "Due date must be on or after start date" });
  }

  const updated = await editTicket(id, {
    projectId,
    requesterId,
    startDate,
    dueDate,
    assigneeIds: uniqueAssigneeIds,
    ...rest,
  });

  res.status(200).json(updated);
}

async function deleteTicketById(req: Request, res: Response) {
  const id = parseIdParam(req.params.id);
  if (!id) {
    return res.status(400).json({ message: "Invalid ticket id" });
  }

  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  const ticket = await findTicket({ id });
  if (!ticket) {
    return res.status(404).json({ message: "Ticket not found" });
  }

  if (!canModifyTicket(ticket, viewer)) {
    return res.status(403).json({ message: "Insufficient permissions" });
  }

  await deleteTicket(id);
  res.status(200).json({ message: "Ticket deleted successfully" });
}

export {
  getAllTickets,
  getTicketById,
  insertTicket,
  updateTicket,
  deleteTicketById,
};
