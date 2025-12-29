import { z } from "zod";
import { RoleType, TeamUpdateStatus } from "@prisma/client";
import { baseQuerySchema } from "./base.schema";
import { registerSchema } from "../openapi/registry";

const teamUpdateSortFields = [
  "id",
  "userId",
  "projectId",
  "yesterdayWork",
  "todayWork",
  "blocker",
  "nextAction",
  "status",
  "createdAt",
  "updatedAt",
] as const;

const teamUpdateBaseSchema = z.object({
  yesterdayWork: z.string().trim().min(1).nullable(),
  todayWork: z.string().trim().min(1),
  blocker: z.string().trim().min(1).nullable(),
  nextAction: z.string().trim().min(1).nullable(),
  status: z.enum(TeamUpdateStatus),
});

const createTeamUpdateSchema = registerSchema(
  "TeamUpdateCreateInput",
  teamUpdateBaseSchema
    .extend({
      projectId: z.coerce.number().int().positive(),
    })
    .openapi({ description: "Payload for POST /team-updates." }),
);

const updateTeamUpdateSchema = registerSchema(
  "TeamUpdateUpdateInput",
  teamUpdateBaseSchema.partial().openapi({ description: "Payload for PATCH /team-updates/{id}." }),
);

const teamUpdateQuerySchema = registerSchema(
  "TeamUpdateQuery",
  z
    .object({
      userId: z.coerce.number().int().positive().optional(),
      projectId: z.coerce.number().int().positive().optional(),
      createdFrom: z.coerce.date().optional(),
      createdTo: z.coerce.date().optional(),
      status: z.enum(TeamUpdateStatus).optional(),
      sortBy: z.enum(teamUpdateSortFields).optional(),
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
    .openapi({ description: "Filters accepted by GET /team-updates." }),
);

const teamUpdateDeveloperSchema = z.object({
  id: z.number().int().positive(),
  fullName: z.string(),
  email: z.email(),
  role: z.nativeEnum(RoleType),
});

const teamUpdateResponseSchema = registerSchema(
  "TeamUpdateResponse",
  z
    .object({
      id: z.number().int().positive(),
      userId: z.number().int().positive(),
      projectId: z.number().int().positive(),
      status: z.enum(TeamUpdateStatus),
      yesterdayWork: z.string().nullable(),
      todayWork: z.string(),
      blocker: z.string().nullable(),
      nextAction: z.string().nullable(),
      createdAt: z.string().datetime(),
      updatedAt: z.string().datetime(),
      developer: teamUpdateDeveloperSchema,
    })
    .openapi({ description: "Team update resource returned by the API." }),
);

export {
  createTeamUpdateSchema,
  updateTeamUpdateSchema,
  teamUpdateQuerySchema,
  teamUpdateResponseSchema,
};
