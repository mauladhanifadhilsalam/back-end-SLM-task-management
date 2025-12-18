import { z } from "zod";
import { baseQuerySchema } from "./base.schema";

const teamUpdateSortFields = [
  "id",
  "userId",
  "yesterdayWork",
  "todayWork",
  "blocker",
  "nextAction",
  "createdAt",
  "updatedAt",
] as const;

const teamUpdateBaseSchema = z.object({
  yesterdayWork: z.string().trim().min(1),
  todayWork: z.string().trim().min(1),
  blocker: z.string().trim().min(1),
  nextAction: z.string().trim().min(1),
});

const createTeamUpdateSchema = teamUpdateBaseSchema;

const updateTeamUpdateSchema = teamUpdateBaseSchema.partial();

const teamUpdateQuerySchema = z
  .object({
    userId: z.coerce.number().int().positive().optional(),
    createdFrom: z.coerce.date().optional(),
    createdTo: z.coerce.date().optional(),
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
  });

export {
  createTeamUpdateSchema,
  updateTeamUpdateSchema,
  teamUpdateQuerySchema,
};
