import { ProjectStatus } from "@prisma/client";
import { z } from "zod";
import { baseQuerySchema } from "./base.schema";
import { registerSchema } from "../openapi/registry";

const projectPhaseSortFields = [
  "id",
  "projectId",
  "name",
  "startDate",
  "endDate",
  "createdAt",
] as const;

const createProjectPhaseSchema = registerSchema(
  "ProjectPhaseCreateInput",
  z
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
    })
    .openapi({ description: "Payload for POST /project-phases." }),
);

const updateProjectPhaseSchema = registerSchema(
  "ProjectPhaseUpdateInput",
  createProjectPhaseSchema
    .partial()
    .superRefine((data, ctx) => {
      if (data.startDate && data.endDate && data.endDate < data.startDate) {
        ctx.addIssue({
          code: "custom",
          message: "End date must be on or after start date",
          path: ["endDate"],
        });
      }
    })
    .openapi({ description: "Payload for PATCH /project-phases/{id}." }),
);

const projectPhaseQuerySchema = registerSchema(
  "ProjectPhaseQuery",
  z
    .object({
      projectId: z.coerce.number().int().positive().optional(),
      startAfter: z.coerce.date().optional(),
      endBefore: z.coerce.date().optional(),
      activeOnly: z.coerce.boolean().optional(),
      sortBy: z.enum(projectPhaseSortFields).optional(),
    })
    .extend(baseQuerySchema.shape)
    .superRefine((data, ctx) => {
      if (data.startAfter && data.endBefore && data.endBefore < data.startAfter) {
        ctx.addIssue({
          code: "custom",
          path: ["endBefore"],
          message: "endBefore must be on or after startAfter",
        });
      }
    })
    .openapi({
      description: "Filters accepted by GET /project-phases.",
    }),
);

const projectSummarySchema = z.object({
  id: z.number().int().positive(),
  name: z.string(),
  status: z.enum(ProjectStatus),
  startDate: z.string().datetime(),
  endDate: z.string().datetime(),
});

const projectPhaseResponseSchema = registerSchema(
  "ProjectPhaseResponse",
  z
    .object({
      id: z.number().int().positive(),
      projectId: z.number().int().positive(),
      name: z.string(),
      startDate: z.string().datetime(),
      endDate: z.string().datetime(),
      createdAt: z.string().datetime(),
      updatedAt: z.string().datetime().optional(),
      project: projectSummarySchema,
    })
    .openapi({ description: "Project phase resource." }),
);

export {
  createProjectPhaseSchema,
  updateProjectPhaseSchema,
  projectPhaseQuerySchema,
  projectPhaseResponseSchema,
};
