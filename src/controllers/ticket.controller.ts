import { Request, Response } from "express";
import { RoleType, TicketType } from "../generated/prisma";
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
  ticketQuerySchema,
  createTicketSchema,
  updateTicketSchema,
} from "../schemas/ticket.schema";

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

function parseIdParam(value: string) {
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed <= 0) {
    return null;
  }
  return parsed;
}

async function getAllTickets(req: Request, res: Response) {
  try {
    const viewer = getViewer(req);
    if (!viewer) {
      return res.status(401).json({ message: "Authentication required" });
    }

    const parsed = ticketQuerySchema.safeParse(req.query);
    if (!parsed.success) {
      return res.status(400).json(parsed.error.format());
    }

    const filters = isAdmin(viewer)
      ? parsed.data
      : {
          ...parsed.data,
          accessibleByUserId: viewer.id,
          includeAllTasksForDevelopers: isDeveloper(viewer),
          includeAllIssuesForDevelopers: isDeveloper(viewer),
        };

    const tickets = await findTickets(filters);
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

async function getTicketById(req: Request, res: Response) {
  try {
    const viewer = getViewer(req);
    if (!viewer) {
      return res.status(401).json({ message: "Authentication required" });
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
  const viewer = getViewer(req);
  if (!viewer) {
    return res.status(401).json({ message: "Authentication required" });
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

  const viewer = getViewer(req);
  if (!viewer) {
    return res.status(401).json({ message: "Authentication required" });
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

  const viewer = getViewer(req);
  if (!viewer) {
    return res.status(401).json({ message: "Authentication required" });
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
