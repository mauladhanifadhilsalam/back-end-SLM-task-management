import { Request, Response } from "express";
import {
  findProjectUpdates,
  findProjectUpdate,
  createProjectUpdate,
  editProjectUpdate,
  deleteProjectUpdate,
} from "../services/project-update.service";
import {
  createProjectUpdateSchema,
  updateProjectUpdateSchema,
  projectUpdateQuerySchema,
} from "../schemas/project-update.schema";
import { Viewer, requireViewer, isAdmin } from "../utils/permissions";

function parseIdParam(raw?: string) {
  const id = Number(raw);
  if (!Number.isInteger(id) || id <= 0) {
    return null;
  }

  return id;
}

function canManageProjectUpdate(viewer: Viewer, facilitatorId: number) {
  return isAdmin(viewer) || viewer.id === facilitatorId;
}

async function ensureProjectUpdate(id: number, res: Response) {
  const projectUpdate = await findProjectUpdate({ id });
  if (!projectUpdate) {
    res.status(404).json({ message: "Project update not found" });
    return null;
  }

  return projectUpdate;
}

async function getProjectUpdates(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  const parsed = projectUpdateQuerySchema.safeParse(req.query);
  if (!parsed.success) {
    return res.status(400).json(parsed.error.format());
  }

  const updates = await findProjectUpdates(parsed.data);
  res.status(200).json(updates);
}

async function getProjectUpdateById(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  const projectUpdateId = parseIdParam(req.params.id);
  if (!projectUpdateId) {
    return res.status(400).json({ message: "Invalid project update id" });
  }

  const projectUpdate = await ensureProjectUpdate(projectUpdateId, res);
  if (!projectUpdate) {
    return;
  }

  res.status(200).json(projectUpdate);
}

async function insertProjectUpdate(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  const parsed = createProjectUpdateSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json(parsed.error.format());
  }

  const created = await createProjectUpdate({
    facilitatorId: viewer.id,
    projectId: parsed.data.projectId,
    phaseId: parsed.data.phaseId,
    participant: parsed.data.participant,
    objective: parsed.data.objective,
    progressHighlight: parsed.data.progressHighlight,
    teamMood: parsed.data.teamMood,
    reportDate: parsed.data.reportDate,
  });

  res.status(201).json(created);
}

async function updateProjectUpdate(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  const projectUpdateId = parseIdParam(req.params.id);
  if (!projectUpdateId) {
    return res.status(400).json({ message: "Invalid project update id" });
  }

  const parsed = updateProjectUpdateSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json(parsed.error.format());
  }

  const existing = await ensureProjectUpdate(projectUpdateId, res);
  if (!existing) {
    return;
  }

  if (!canManageProjectUpdate(viewer, existing.facilitatorId)) {
    return res.status(403).json({
      message: "Only admins or the facilitator can modify this project update",
    });
  }

  const updated = await editProjectUpdate(projectUpdateId, {
    phaseId: parsed.data.phaseId,
    participant: parsed.data.participant,
    objective: parsed.data.objective,
    progressHighlight: parsed.data.progressHighlight,
    teamMood: parsed.data.teamMood,
    reportDate: parsed.data.reportDate,
  });

  res.status(200).json(updated);
}

async function deleteProjectUpdateById(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  const projectUpdateId = parseIdParam(req.params.id);
  if (!projectUpdateId) {
    return res.status(400).json({ message: "Invalid project update id" });
  }

  const existing = await ensureProjectUpdate(projectUpdateId, res);
  if (!existing) {
    return;
  }

  if (!canManageProjectUpdate(viewer, existing.facilitatorId)) {
    return res.status(403).json({
      message: "Only admins or the facilitator can delete this project update",
    });
  }

  await deleteProjectUpdate(projectUpdateId);
  res.status(200).json({ message: "Project update deleted successfully" });
}

export {
  getProjectUpdates,
  getProjectUpdateById,
  insertProjectUpdate,
  updateProjectUpdate,
  deleteProjectUpdateById,
};
