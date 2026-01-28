import { Request, Response } from "express";
import {
  findTeamUpdates,
  findTeamUpdate,
  createTeamUpdate,
  editTeamUpdate,
  deleteTeamUpdate,
} from "../services/team-update.service";
import {
  createTeamUpdateSchema,
  updateTeamUpdateSchema,
  teamUpdateQuerySchema,
} from "../schemas/team-update.schema";
import { Viewer, requireViewer, isAdmin } from "../utils/permissions";

function parseIdParam(raw?: string) {
  const id = Number(raw);
  if (!Number.isInteger(id) || id <= 0) {
    return null;
  }

  return id;
}

function canManageTeamUpdate(viewer: Viewer, userId: number) {
  return isAdmin(viewer) || viewer.id === userId;
}

async function ensureTeamUpdate(id: number, res: Response) {
  const teamUpdate = await findTeamUpdate({ id });
  if (!teamUpdate) {
    res.status(404).json({ message: "Team update not found" });
    return null;
  }

  return teamUpdate;
}

async function getTeamUpdates(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  const parsed = teamUpdateQuerySchema.safeParse(req.query);
  if (!parsed.success) {
    return res.status(400).json(parsed.error.format());
  }

  const updates = await findTeamUpdates(parsed.data);
  res.status(200).json(updates);
}

async function getTeamUpdateById(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  const teamUpdateId = parseIdParam(req.params.id);
  if (!teamUpdateId) {
    return res.status(400).json({ message: "Invalid team update id" });
  }

  const teamUpdate = await ensureTeamUpdate(teamUpdateId, res);
  if (!teamUpdate) {
    return;
  }

  res.status(200).json(teamUpdate);
}

async function insertTeamUpdate(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  const parsed = createTeamUpdateSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json(parsed.error.format());
  }

  if (parsed.data.userId && !isAdmin(viewer)) {
    return res.status(403).json({
      message: "Only admins can set userId when creating a team update",
    });
  }

  const created = await createTeamUpdate({
    userId: parsed.data.userId ?? viewer.id,
    projectId: parsed.data.projectId,
    yesterdayWork: parsed.data.yesterdayWork,
    todayWork: parsed.data.todayWork,
    blocker: parsed.data.blocker,
    nextAction: parsed.data.nextAction,
    status: parsed.data.status,
  });

  res.status(201).json(created);
}

async function updateTeamUpdate(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  const teamUpdateId = parseIdParam(req.params.id);
  if (!teamUpdateId) {
    return res.status(400).json({ message: "Invalid team update id" });
  }

  const parsed = updateTeamUpdateSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json(parsed.error.format());
  }

  const existing = await ensureTeamUpdate(teamUpdateId, res);
  if (!existing) {
    return;
  }

  if (!canManageTeamUpdate(viewer, existing.userId)) {
    return res.status(403).json({
      message: "Only admins or the update author can modify this team update",
    });
  }

  const updated = await editTeamUpdate(teamUpdateId, {
    yesterdayWork: parsed.data.yesterdayWork,
    todayWork: parsed.data.todayWork,
    blocker: parsed.data.blocker,
    nextAction: parsed.data.nextAction,
    status: parsed.data.status,
  });

  res.status(200).json(updated);
}

async function deleteTeamUpdateById(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  const teamUpdateId = parseIdParam(req.params.id);
  if (!teamUpdateId) {
    return res.status(400).json({ message: "Invalid team update id" });
  }

  const existing = await ensureTeamUpdate(teamUpdateId, res);
  if (!existing) {
    return;
  }

  if (!canManageTeamUpdate(viewer, existing.userId)) {
    return res.status(403).json({
      message: "Only admins or the update author can delete this team update",
    });
  }

  await deleteTeamUpdate(teamUpdateId);
  res.status(200).json({ message: "Team update deleted successfully" });
}

export {
  getTeamUpdates,
  getTeamUpdateById,
  insertTeamUpdate,
  updateTeamUpdate,
  deleteTeamUpdateById,
};
