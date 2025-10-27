import { Request, Response } from "express";
import { z } from "zod";
import {
  findProjectPhases,
  findProjectPhase,
  createProjectPhase,
  editProjectPhase,
  deleteProjectPhase,
} from "../services/project-phase.service";
import { findProject } from "../services/project.service";

const createProjectPhaseSchema = z
  .object({
    name: z.string().min(1),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
    projectId: z.number().int().positive(),
  })
  .superRefine((data, ctx) => {
    if (data.endDate < data.startDate) {
      ctx.addIssue({
        code: "custom",
        message: "End date must be on or after start date",
        path: ["endDate"],
      });
    }
  });

const updateProjectPhaseSchema = createProjectPhaseSchema
  .partial()
  .superRefine((data, ctx) => {
    if (data.startDate && data.endDate && data.endDate < data.startDate) {
      ctx.addIssue({
        code: "custom",
        message: "End date must be on or after start date",
        path: ["endDate"],
      });
    }
  });

async function getAllProjectPhases(req: Request, res: Response) {
  try {
    const { projectId } = req.query;

    let filter: { projectId: number } | undefined;
    if (projectId !== undefined) {
      const value = Array.isArray(projectId) ? projectId[0] : projectId;
      const parsed = Number(value);

      if (!Number.isInteger(parsed) || parsed <= 0) {
        return res
          .status(400)
          .json({ message: "projectId must be a positive integer" });
      }

      filter = { projectId: parsed };
    }

    const phases = await findProjectPhases(filter);
    res.status(200).json(phases);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

async function getProjectPhaseById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const phase = await findProjectPhase({ id: Number(id) });
    if (!phase)
      return res.status(404).json({ message: "Project phase not found" });
    res.status(200).json(phase);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

async function insertProjectPhase(req: Request, res: Response) {
  const parsed = createProjectPhaseSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error.format());

  const { name, startDate, endDate, projectId } = parsed.data;

  const project = await findProject({ id: projectId });
  if (!project) return res.status(404).json({ message: "Project not found" });

  const created = await createProjectPhase({
    name,
    startDate,
    endDate,
    projectId,
  });

  res.status(201).json(created);
}

async function updateProjectPhase(req: Request, res: Response) {
  const { id } = req.params;
  const phaseId = Number(id);

  const existing = await findProjectPhase({ id: phaseId });
  if (!existing)
    return res.status(404).json({ message: "Project phase not found" });

  const parsed = updateProjectPhaseSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error.format());

  const { name, startDate, endDate, projectId } = parsed.data;

  if (projectId !== undefined && projectId !== existing.projectId) {
    const project = await findProject({ id: projectId });
    if (!project) return res.status(404).json({ message: "Project not found" });
  }

  const nextStart = startDate ?? existing.startDate;
  const nextEnd = endDate ?? existing.endDate;

  if (nextEnd < nextStart) {
    return res
      .status(400)
      .json({ message: "End date must be on or after start date" });
  }

  const updated = await editProjectPhase(phaseId, {
    name,
    startDate,
    endDate,
    projectId,
  });

  res.status(200).json(updated);
}

async function deleteProjectPhaseById(req: Request, res: Response) {
  const { id } = req.params;

  const phase = await findProjectPhase({ id: Number(id) });
  if (!phase)
    return res.status(404).json({ message: "Project phase not found" });

  await deleteProjectPhase(phase.id);
  res.status(200).json({ message: "Project phase deleted successfully" });
}

export {
  getAllProjectPhases,
  getProjectPhaseById,
  insertProjectPhase,
  updateProjectPhase,
  deleteProjectPhaseById,
};
