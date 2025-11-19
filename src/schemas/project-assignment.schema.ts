import { z } from "zod";
import { ProjectRoleType } from "../generated/prisma";

const projectAssignmentQuerySchema = z.object({
  projectId: z.coerce.number().int().positive(),
});

const createProjectAssignmentSchema = z.object({
  projectId: z.number().int().positive(),
  userId: z.number().int().positive(),
  roleInProject: z.enum(ProjectRoleType),
});

export { projectAssignmentQuerySchema, createProjectAssignmentSchema };
