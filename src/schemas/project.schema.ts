import { z } from "zod";
import { ProjectStatus, ProjectRoleType, RoleType } from "@prisma/client";
import { baseQuerySchema } from "./base.schema";
import { registerSchema } from "../openapi/registry";

const projectSortFields = [
  "name",
  "categories",
  "ownerId",
  "startDate",
  "endDate",
  "status",
  "completion",
  "notes",
  "id",
  "createdAt",
  "updatedAt",
] as const;

const phaseInputSchema = registerSchema(
  "ProjectPhaseInlineInput",
  z
    .object({
      name: z.string(),
      startDate: z.coerce.date(),
      endDate: z.coerce.date(),
    })
    .openapi({ description: "Phase definition embedded in project creation." }),
);

const projectAssignmentSchema = registerSchema(
  "ProjectAssignmentInput",
  z
    .object({
      userId: z.number().int().positive(),
      roleInProject: z.enum(ProjectRoleType),
    })
    .openapi({
      description: "Associates an existing user to a project with a role.",
    }),
);

const createProjectSchema = registerSchema(
  "ProjectCreateInput",
  z
    .object({
      name: z.string(),
      categories: z.array(z.string()).min(1),
      ownerId: z.number().int().positive(),
      startDate: z.coerce.date(),
      endDate: z.coerce.date(),
      phases: z.array(phaseInputSchema).min(1),
      assignments: z.array(projectAssignmentSchema).optional(),
      status: z.enum(ProjectStatus).optional(),
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
    })
    .openapi({ description: "Payload for POST /projects." }),
);

const updateProjectSchema = registerSchema(
  "ProjectUpdateInput",
  z
    .object({
      name: z.string().optional(),
      categories: z.array(z.string()).min(1).optional(),
      ownerId: z.number().int().positive().optional(),
      startDate: z.coerce.date().optional(),
      endDate: z.coerce.date().optional(),
      status: z.enum(ProjectStatus).optional(),
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
    })
    .openapi({ description: "Payload for PATCH /projects/{id}." }),
);

const projectQuerySchema = registerSchema(
  "ProjectQuery",
  z
    .object({
      status: z.enum(ProjectStatus).optional(),
      ownerId: z.coerce.number().int().positive().optional(),
      assignedUserId: z.coerce.number().int().positive().optional(),
      category: z.string().trim().min(1).optional(),
      sortBy: z.enum(projectSortFields).optional(),
    })
    .extend(baseQuerySchema.shape)
    .openapi({ description: "Query params accepted by GET /projects." }),
);

const projectOwnerSummarySchema = z.object({
  id: z.number().int().positive(),
  name: z.string(),
  company: z.string(),
  email: z.email(),
});

const projectPhaseResponseSchema = z.object({
  id: z.number().int().positive(),
  name: z.string(),
  startDate: z.string().datetime(),
  endDate: z.string().datetime(),
});

const projectAssignmentResponseSchema = z.object({
  roleInProject: z.enum(ProjectRoleType),
  user: z.object({
    id: z.number().int().positive(),
    fullName: z.string(),
    email: z.email(),
    role: z.nativeEnum(RoleType),
  }),
});

const projectResponseSchema = registerSchema(
  "ProjectResponse",
  z
    .object({
      id: z.number().int().positive(),
      name: z.string(),
      categories: z.array(z.string()),
      ownerId: z.number().int().positive(),
      owner: projectOwnerSummarySchema,
      startDate: z.string().datetime(),
      endDate: z.string().datetime(),
      status: z.enum(ProjectStatus),
      completion: z.number().min(0).max(100).optional(),
      notes: z.string().nullable().optional(),
      createdAt: z.string().datetime(),
      updatedAt: z.string().datetime(),
      phases: z.array(projectPhaseResponseSchema),
      assignments: z.array(projectAssignmentResponseSchema),
    })
    .openapi({ description: "Project resource with owner, phases, and assignments." }),
);

export {
  phaseInputSchema,
  projectAssignmentSchema,
  createProjectSchema,
  updateProjectSchema,
  projectQuerySchema,
  projectResponseSchema,
};
