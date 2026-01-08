import { z } from "zod";
import { RoleType } from "@prisma/client";
import { baseQuerySchema } from "./base.schema";
import { registerSchema } from "../openapi/registry";

const projectUpdateSortFields = [
  "id",
  "projectId",
  "phaseId",
  "facilitatorId",
  "participant",
  "objective",
  "progressHighlight",
  "teamMood",
  "reportDate",
  "createdAt",
  "updatedAt",
] as const;

const projectUpdateBaseSchema = z.object({
  phaseId: z.coerce.number().int().positive(),
  participant: z.string().trim().min(1).nullable(),
  objective: z.string().trim().min(1).nullable(),
  progressHighlight: z.string().trim().min(1).nullable(),
  teamMood: z.string().trim().min(1).nullable(),
});

const createProjectUpdateSchema = registerSchema(
  "ProjectUpdateCreateInput",
  projectUpdateBaseSchema
    .extend({
      projectId: z.coerce.number().int().positive(),
      reportDate: z.coerce.date(),
    })
    .openapi({ description: "Payload for POST /project-updates." }),
);

const updateProjectUpdateSchema = registerSchema(
  "ProjectUpdateUpdateInput",
  projectUpdateBaseSchema
    .extend({
      reportDate: z.coerce.date().optional(),
    })
    .partial()
    .openapi({ description: "Payload for PATCH /project-updates/{id}." }),
);

const projectUpdateQuerySchema = registerSchema(
  "ProjectUpdateQuery",
  z
    .object({
      projectId: z.coerce.number().int().positive().optional(),
      phaseId: z.coerce.number().int().positive().optional(),
      facilitatorId: z.coerce.number().int().positive().optional(),
      createdFrom: z.coerce.date().optional(),
      createdTo: z.coerce.date().optional(),
      sortBy: z.enum(projectUpdateSortFields).optional(),
    })
    .extend(baseQuerySchema.shape)
    .superRefine((data, ctx) => {
      if (data.createdFrom && data.createdTo && data.createdTo < data.createdFrom) {
        ctx.addIssue({
          code: "custom",
          path: ["createdTo"],
          message: "createdTo must be on or after createdFrom",
        });
      }
    })
    .openapi({ description: "Filters accepted by GET /project-updates." }),
);

const projectUpdateFacilitatorSchema = z.object({
  id: z.number().int().positive(),
  fullName: z.string(),
  email: z.email(),
  role: z.enum(RoleType),
});

const projectUpdatePhaseSchema = z.object({
  id: z.number().int().positive(),
  name: z.string(),
  startDate: z.iso.datetime(),
  endDate: z.iso.datetime(),
});

const projectUpdateResponseSchema = registerSchema(
  "ProjectUpdateResponse",
  z
    .object({
      id: z.number().int().positive(),
      projectId: z.number().int().positive(),
      phaseId: z.number().int().positive(),
      facilitatorId: z.number().int().positive(),
      participant: z.string().nullable(),
      objective: z.string().nullable(),
      progressHighlight: z.string().nullable(),
      teamMood: z.string().nullable(),
      reportDate: z.iso.date(),
      createdAt: z.iso.datetime(),
      updatedAt: z.iso.datetime(),
      facilitator: projectUpdateFacilitatorSchema,
      phase: projectUpdatePhaseSchema,
    })
    .openapi({ description: "Project update resource returned by the API." }),
);

export {
  createProjectUpdateSchema,
  updateProjectUpdateSchema,
  projectUpdateQuerySchema,
  projectUpdateResponseSchema,
};
