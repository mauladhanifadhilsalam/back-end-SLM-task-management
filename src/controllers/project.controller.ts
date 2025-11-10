import { Request, Response } from "express";
import { z } from "zod";
import { ProjectStatus, ProjectRoleType } from "../generated/prisma";
import {
  findProjects,
  findProject,
  createProject,
  editProject,
  deleteProject,
  verifyUsersExist,
} from "../services/project.service";
import { findProjectOwner } from "../services/project-owner.service";
import { da } from "zod/v4/locales";

const createProjectSchema = z
  .object({
    name: z.string(),
    categories: z.array(z.string()).min(1),
    ownerId: z.number().int().positive(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
    phases: z.array(
      z.object({
        name: z.string(),
        startDate: z.coerce.date(),
        endDate: z.coerce.date(),
      }),
    ).min(1),
    assignments: z.array(
      z.object({
        userId: z.number().int().positive(),
        roleInProject: z.enum(ProjectRoleType),
      })
    ).optional(),
    status: z.enum(ProjectStatus).optional(),
    completion: z.number().min(0).max(100).optional(),
    notes: z.string().optional(),
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

const updateProjectSchema = z
  .object({
    name: z.string().optional(),
    categories: z.array(z.string()).min(1).optional(),
    ownerId: z.number().int().positive().optional(),
    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional(),
    status: z.enum(ProjectStatus).optional(),
    completion: z.number().min(0).max(100).optional(),
    notes: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.endDate && data.startDate && data.endDate < data.startDate) {
      ctx.addIssue({
        code: "custom",
        message: "End date must be on or after start date",
        path: ["endDate"],
      });
    }
  });

async function getAllProjects(_req: Request, res: Response) {
  try {
    const projects = await findProjects();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

async function getProjectById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const project = await findProject({ id: Number(id) });
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

async function insertProject(req: Request, res: Response) {
  const parsed = createProjectSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error.format());

  const {
    ownerId,
    completion,
    categories,
    startDate,
    endDate,
    phases,
    assignments,
    ...rest
  } = parsed.data;

  const owner = await findProjectOwner({ id: ownerId });
  if (!owner)
    return res.status(404).json({ message: "Project owner not found" });

  if (assignments) {
    const {allExist, missingUserIds} = await verifyUsersExist(assignments.map(a => a.userId));
    if (!allExist) {
      return res.status(404).json({ message: {
        missing: missingUserIds.map(id => `User with ID ${id} not found`)
      }});
    }
  }

  const project = await createProject({
    ownerId,
    categories,
    completion,
    startDate,
    endDate,
    ...(phases?.length
      ? {
          phases: {
            create: phases.map((p) => ({
              name: p.name,
              startDate: p.startDate,
              endDate: p.endDate,
            })),
          },
        }
      : {}),
    ...(assignments?.length
      ? {
          assignments: {
            createMany: {
              data: assignments.map(a => ({
                userId: a.userId,
                roleInProject: a.roleInProject,
              })),
              skipDuplicates: true,
            },
          },
        }
      : {}),
    ...rest,
  });

  res.status(201).json(project);
}

async function updateProject(req: Request, res: Response) {
  const { id } = req.params;
  const projectId = Number(id);

  const existing = await findProject({ id: projectId });
  if (!existing) {
    return res.status(404).json({ message: "Project not found" });
  }

  const parsed = updateProjectSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error.format());

  const { ownerId, categories, completion, startDate, endDate, ...rest } =
    parsed.data;

  if (ownerId !== undefined && ownerId !== existing.ownerId) {
    const owner = await findProjectOwner({ id: ownerId });
    if (!owner)
      return res.status(404).json({ message: "Project owner not found" });
  }

  const nextStart = startDate ?? existing.startDate;
  const nextEnd = endDate ?? existing.endDate;

  if (nextEnd < nextStart) {
    return res.status(400).json({
      message: "End date must be on or after start date",
    });
  }

  const updated = await editProject(projectId, {
    ...rest,
    ownerId,
    categories,
    completion,
    startDate,
    endDate,
  });

  res.status(200).json(updated);
}

async function deleteProjectById(req: Request, res: Response) {
  const { id } = req.params;

  const project = await findProject({ id: Number(id) });
  if (!project) return res.status(404).json({ message: "Project not found" });

  await deleteProject(project.id);
  res.status(200).send({ message: "Project deleted successfully" });
}

export {
  getAllProjects,
  getProjectById,
  insertProject,
  updateProject,
  deleteProjectById,
};
