import { Request, Response } from "express";
import {
  findProjectAssignments,
  createProjectAssignment,
  deleteProjectAssignment,
  findProjectAssignment,
} from "../services/project-assignment.service";
import { findProject, verifyUsersExist } from "../services/project.service";
import {
  projectAssignmentQuerySchema,
  createProjectAssignmentSchema,
} from "../schemas/project-assignment.schema";
import { requireViewer, isAdmin } from "../utils/permissions";
import { notifyProjectAssignments } from "../services/notification.triggers";
import { ActivityTargetType } from "@prisma/client";
import { recordActivity, toActivityDetails } from "../services/activity-log.service";
import { findAnyUser } from "../services/user.service";

function parseIdParam(value: string) {
  const id = Number(value);
  if (!Number.isInteger(id) || id <= 0) {
    return null;
  }

  return id;
}

async function getProjectAssignments(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  const parsed = projectAssignmentQuerySchema.safeParse(req.query);
  if (!parsed.success) {
    return res.status(400).json(parsed.error.format());
  }

  const filters = parsed.data;
  let scopedFilters = filters;

  if (typeof filters.projectId !== "number") {
    if (!isAdmin(viewer)) {
      return res.status(400).json({ message: "projectId is required" });
    }
  } else {
    const project = await findProject({ id: filters.projectId });
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    scopedFilters = { ...filters, projectId: project.id };
  }

  const assignments = await findProjectAssignments(scopedFilters);
  res.status(200).json(assignments);
}

async function addProjectAssignment(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  const actorProfile = await findAnyUser(viewer.id);
  const notificationActor = actorProfile
    ? { id: actorProfile.id, fullName: actorProfile.fullName }
    : undefined;

  const parsed = createProjectAssignmentSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json(parsed.error.format());
  }

  const { projectId, userId } = parsed.data;

  const project = await findProject({ id: projectId });
  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }

  const existingAssignment = project.assignments.find(
    (assignment) => assignment.user?.id === userId,
  );
  if (existingAssignment) {
    return res.status(409).json({
      message: "User already assigned to this project",
    });
  }

  const { allExist, missingUserIds } = await verifyUsersExist([userId]);
  if (!allExist) {
    return res.status(404).json({
      message: {
        missing: missingUserIds.map((id) => `User with ID ${id} not found`),
      },
    });
  }

  const created = await createProjectAssignment({
    projectId: project.id,
    userId,
  });

  await notifyProjectAssignments(
    {
      id: created.project.id,
      name: created.project.name,
      assignments: [
        {
          user: created.user,
        },
      ],
    },
    notificationActor,
  );
  await recordActivity({
    userId: viewer.id,
    action: "PROJECT_ASSIGNMENT_ADDED",
    targetType: ActivityTargetType.PROJECT_ASSIGNMENT,
    targetId: created.id,
    details: toActivityDetails({
      projectId: project.id,
      assigneeId: userId,
    }),
  });

  res.status(201).json(created);
}

async function removeProjectAssignment(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  const id = parseIdParam(req.params.id);
  if (!id) {
    return res.status(400).json({ message: "Invalid project assignment identifier" });
  }

  const assignment = await findProjectAssignment({ id });
  if (!assignment) {
    return res.status(404).json({ message: "Project assignment not found" });
  }

  await deleteProjectAssignment(id);
  await recordActivity({
    userId: viewer.id,
    action: "PROJECT_ASSIGNMENT_REMOVED",
    targetType: ActivityTargetType.PROJECT_ASSIGNMENT,
    targetId: id,
    details: toActivityDetails({
      projectId: assignment.project.id,
      assigneeId: assignment.user.id,
    }),
  });

  res.status(200).json({ message: "Project assignment removed successfully" });
}

export { getProjectAssignments, addProjectAssignment, removeProjectAssignment };
