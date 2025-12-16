import { RoleType, ActivityTargetType } from "@prisma/client";
import { z } from "zod";
import { baseQuerySchema } from "./base.schema";
import { registerSchema } from "../openapi/registry";

const activityLogSortFields = [
  "id",
  "occurredAt",
  "userId",
  "action",
  "targetType",
  "targetId",
] as const;

const activityLogQuerySchema = registerSchema(
  "ActivityLogQuery",
  z
    .object({
      targetType: z.enum(ActivityTargetType).optional(),
      targetId: z.coerce.number().int().positive().optional(),
      userId: z.coerce.number().int().positive().optional(),
      action: z.string().trim().min(1).max(100).optional(),
      from: z.coerce.date().optional(),
      to: z.coerce.date().optional(),
      sortBy: z.enum(activityLogSortFields).optional(),
    })
    .extend(baseQuerySchema.shape)
    .superRefine((data, ctx) => {
      if (data.from && data.to && data.to < data.from) {
        ctx.addIssue({
          code: "custom",
          message: "to must be on or after from",
          path: ["to"],
        });
      }
    })
    .openapi({ description: "Filters accepted by GET /activity-logs." }),
);

const activityLogBulkDeleteSchema = registerSchema(
  "ActivityLogBulkDeleteQuery",
  z
    .object({
      olderThan: z.coerce.date().optional(),
      targetType: z.enum(ActivityTargetType).optional(),
    })
    .refine((data) => data.olderThan || data.targetType, {
      message: "Provide at least olderThan or targetType",
      path: ["olderThan"],
    })
    .openapi({
      description: "Query params accepted by DELETE /activity-logs for bulk deletion.",
    }),
);

const activityLogUserSchema = z.object({
  id: z.number().int().positive(),
  fullName: z.string(),
  email: z.email(),
  role: z.nativeEnum(RoleType).nullable(),
});

const activityLogResponseSchema = registerSchema(
  "ActivityLogResponse",
  z
    .object({
      id: z.number().int().positive(),
      userId: z.number().int().positive().nullable(),
      action: z.string(),
      targetType: z.enum(ActivityTargetType),
      targetId: z.number().int().positive(),
      details: z.unknown().nullable(),
      occurredAt: z.string().datetime(),
      user: activityLogUserSchema.nullable(),
    })
    .openapi({ description: "Audit log entry." }),
);

const activityLogBulkDeleteResponseSchema = registerSchema(
  "ActivityLogBulkDeleteResponse",
  z
    .object({
      message: z.string(),
      deletedCount: z.number().int().nonnegative(),
    })
    .openapi({ description: "Result of bulk deleting activity logs." }),
);

export {
  activityLogQuerySchema,
  activityLogBulkDeleteSchema,
  activityLogResponseSchema,
  activityLogBulkDeleteResponseSchema,
};
