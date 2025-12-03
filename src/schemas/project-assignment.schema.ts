import { z } from "zod";
import { ProjectRoleType } from "@prisma/client";

const projectAssignmentQuerySchema = z
  .object({
    projectId: z.coerce.number().int().positive().optional(),
    userId: z.coerce.number().int().positive().optional(),
    roleInProject: z.nativeEnum(ProjectRoleType).optional(),
    assignedFrom: z.coerce.date().optional(),
    assignedTo: z.coerce.date().optional(),
    page: z.coerce.number().int().positive().optional(),
    pageSize: z.coerce.number().int().positive().max(100).optional(),
  })
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
