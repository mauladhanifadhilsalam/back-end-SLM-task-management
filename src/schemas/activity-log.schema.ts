import { z } from "zod";
import { ActivityTargetType } from "../generated/prisma";

const activityLogQuerySchema = z
  .object({
    targetType: z.enum(ActivityTargetType).optional(),
    targetId: z.coerce.number().int().positive().optional(),
    userId: z.coerce.number().int().positive().optional(),
    action: z.string().trim().min(1).max(100).optional(),
    page: z.coerce.number().int().positive().optional(),
    pageSize: z.coerce.number().int().positive().max(100).optional(),
    from: z.coerce.date().optional(),
    to: z.coerce.date().optional(),
  })
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
    targetType: z.nativeEnum(ActivityTargetType).optional(),
  })
  .refine((data) => data.olderThan || data.targetType, {
    message: "Provide at least olderThan or targetType",
    path: ["olderThan"],
  });

export { activityLogQuerySchema, activityLogBulkDeleteSchema };
