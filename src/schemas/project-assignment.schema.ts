import { z } from "zod";
import { ProjectRoleType } from "@prisma/client";
import { baseQuerySchema } from "./base.schema";

const projectAssignmentSortFields = [
  "id",
  "projectId",
  "userId",
  "roleInProject",
  "assignedAt",
] as const;

const projectAssignmentQuerySchema = z
  .object({
    projectId: z.coerce.number().int().positive().optional(),
    userId: z.coerce.number().int().positive().optional(),
    roleInProject: z.enum(ProjectRoleType).optional(),
    assignedFrom: z.coerce.date().optional(),
    assignedTo: z.coerce.date().optional(),
    sortBy: z.enum(projectAssignmentSortFields).optional(),
  }).extend(baseQuerySchema.shape)
  .superRefine((data, ctx) => {
    if (
      data.assignedFrom &&
      data.assignedTo &&
      data.assignedTo < data.assignedFrom
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["assignedTo"],
        message: "assignedTo must be on or after assignedFrom",
      });
    }
  });

const createProjectAssignmentSchema = z.object({
  projectId: z.number().int().positive(),
  userId: z.number().int().positive(),
  roleInProject: z.enum(ProjectRoleType),
});

export { projectAssignmentQuerySchema, createProjectAssignmentSchema };
