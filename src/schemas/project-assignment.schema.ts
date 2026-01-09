import { RoleType, ProjectStatus } from "@prisma/client";
import { z } from "zod";
import { baseQuerySchema } from "./base.schema";
import { registerSchema } from "../openapi/registry";

const projectAssignmentSortFields = ["id", "projectId", "userId", "assignedAt"] as const;

const projectAssignmentQuerySchema = registerSchema(
  "ProjectAssignmentQuery",
  z
    .object({
      projectId: z.coerce.number().int().positive().optional(),
      userId: z.coerce.number().int().positive().optional(),
      assignedFrom: z.coerce.date().optional(),
      assignedTo: z.coerce.date().optional(),
      sortBy: z.enum(projectAssignmentSortFields).optional(),
    })
    .extend(baseQuerySchema.shape)
    .superRefine((data, ctx) => {
      if (data.assignedFrom && data.assignedTo && data.assignedTo < data.assignedFrom) {
        ctx.addIssue({
          code: "custom",
          path: ["assignedTo"],
          message: "assignedTo must be on or after assignedFrom",
        });
      }
    })
    .openapi({ description: "Filters accepted by GET /project-assignments." }),
);

const createProjectAssignmentSchema = registerSchema(
  "ProjectAssignmentCreateInput",
  z
    .object({
      projectId: z.number().int().positive(),
      userId: z.number().int().positive(),
    })
    .openapi({ description: "Payload for POST /project-assignments." }),
);

const projectAssignmentResponseSchema = registerSchema(
  "ProjectAssignmentResponse",
  z
    .object({
      id: z.number().int().positive(),
      projectId: z.number().int().positive(),
      userId: z.number().int().positive(),
      assignedAt: z.string().datetime(),
      project: z.object({
        id: z.number().int().positive(),
        name: z.string(),
        status: z.enum(ProjectStatus),
        startDate: z.string().datetime(),
        endDate: z.string().datetime(),
      }),
      user: z.object({
        id: z.number().int().positive(),
        fullName: z.string(),
        email: z.email(),
        role: z.nativeEnum(RoleType),
        projectRole: z.string().nullable(),
      }),
    })
    .openapi({ description: "Project assignment record with related entities." }),
);

export {
  projectAssignmentQuerySchema,
  createProjectAssignmentSchema,
  projectAssignmentResponseSchema,
};
