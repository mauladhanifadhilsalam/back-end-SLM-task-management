import { Request, Response } from "express";
import {
  findProjects,
  findProject,
  createProject,
  editProject,
  deleteProject,
  verifyUsersExist,
} from "../services/project.service";
import { findProjectOwner } from "../services/project-owner.service";
import {
  createProjectSchema,
  updateProjectSchema,
} from "../schemas/project.schema";
import { notifyProjectAssignments } from "../services/notification.triggers";
import { requireViewer, isAdmin, isProjectManager } from "../utils/permissions";
import { ActivityTargetType } from "@prisma/client";
import {
  recordActivity,
  toActivityDetails,
} from "../services/activity-log.service";
import { findAnyUser } from "../services/user.service";

async function getAllProjects(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  try {
    const projects = await findProjects();
    const canSeeAll = isAdmin(viewer) || isProjectManager(viewer);
    const visibleProjects = canSeeAll
      ? projects
      : projects.filter((project) =>
          project.assignments.some(
            (assignment) => assignment.user?.id === viewer.id,
          ),
        );
    res.status(200).json(visibleProjects);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

async function getProjectById(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  try {
    const { id } = req.params;
    const project = await findProject({ id: Number(id) });
    if (!project) return res.status(404).json({ message: "Project not found" });
    const canSeeProject =
      isAdmin(viewer) ||
      isProjectManager(viewer) ||
      project.assignments.some((assignment) => assignment.user?.id === viewer.id);
    if (!canSeeProject) {
      return res.status(403).json({ message: "Insufficient permissions" });
    }
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

async function insertProject(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  const parsed = createProjectSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error.format());

  const { ownerId, categories, startDate, endDate, phases, assignments, ...rest } =
    parsed.data;

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

  const actor = await findAnyUser(viewer.id);
  const notificationActor = actor
    ? { id: actor.id, fullName: actor.fullName }
    : undefined;
  await notifyProjectAssignments(project, notificationActor);
  await recordActivity({
    userId: viewer.id,
    action: "PROJECT_CREATED",
    targetType: ActivityTargetType.PROJECT,
    targetId: project.id,
    details: toActivityDetails({
      name: project.name,
      ownerId: project.ownerId,
      startDate,
      endDate,
    }),
  });
  res.status(201).json(project);
}

async function updateProject(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  const { id } = req.params;
  const projectId = Number(id);

  const existing = await findProject({ id: projectId });
  if (!existing) {
    return res.status(404).json({ message: "Project not found" });
  }

  const parsed = updateProjectSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error.format());

  const { ownerId, categories, startDate, endDate, ...rest } = parsed.data;

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
    startDate,
    endDate,
  });

  await recordActivity({
    userId: viewer.id,
    action: "PROJECT_UPDATED",
    targetType: ActivityTargetType.PROJECT,
    targetId: updated.id,
    details: toActivityDetails({
      projectId: updated.id,
      changedFields: Object.keys(parsed.data),
    }),
  });

  res.status(200).json(updated);
}

async function deleteProjectById(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  const { id } = req.params;

  const project = await findProject({ id: Number(id) });
  if (!project) return res.status(404).json({ message: "Project not found" });

  await deleteProject(project.id);
  await recordActivity({
    userId: viewer.id,
    action: "PROJECT_DELETED",
    targetType: ActivityTargetType.PROJECT,
    targetId: project.id,
    details: toActivityDetails({
      name: project.name,
      ownerId: project.ownerId,
    }),
  });
  res.status(200).send({ message: "Project deleted successfully" });
}

export {
  getAllProjects,
  getProjectById,
  insertProject,
  updateProject,
  deleteProjectById,
};
