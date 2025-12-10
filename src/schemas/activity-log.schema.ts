import { z } from "zod";
import { ActivityTargetType } from "@prisma/client";
import { baseQuerySchema } from "./base.schema";

const activityLogSortFields = [
  "id",
  "occurredAt",
  "userId",
  "action",
  "targetType",
  "targetId",
] as const;

const activityLogQuerySchema = z
  .object({
    targetType: z.enum(ActivityTargetType).optional(),
    targetId: z.coerce.number().int().positive().optional(),
    userId: z.coerce.number().int().positive().optional(),
    action: z.string().trim().min(1).max(100).optional(),
    from: z.coerce.date().optional(),
    to: z.coerce.date().optional(),
    sortBy: z.enum(activityLogSortFields).optional(),
  }).extend(baseQuerySchema.shape)
  .superRefine((data, ctx) => {
    if (data.from && data.to && data.to < data.from) {
      ctx.addIssue({
        code: "custom",
        message: "to must be on or after from",
        path: ["to"],
      });
    }
  });

const activityLogBulkDeleteSchema = z
  .object({
    olderThan: z.coerce.date().optional(),
    targetType: z.enum(ActivityTargetType).optional(),
  })
  .refine((data) => data.olderThan || data.targetType, {
    message: "Provide at least olderThan or targetType",
    path: ["olderThan"],
  });

export { activityLogQuerySchema, activityLogBulkDeleteSchema };
