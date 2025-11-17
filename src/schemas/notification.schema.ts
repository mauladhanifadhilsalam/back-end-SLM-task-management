import { z } from "zod";
import {
  NotificationState,
  NotificationTargetType,
  NotifyStatusType,
} from "../generated/prisma";

const positiveInt = z.number().int().positive();
const nullableDateSchema = z.union([z.literal(null), z.coerce.date()]);

const notificationFilterSchema = z.object({
  recipientId: z.coerce.number().int().positive().optional(),
  targetType: z.enum(NotificationTargetType).optional(),
  targetId: z.coerce.number().int().positive().optional(),
  state: z.enum(NotificationState).optional(),
});

const baseFields = {
  recipientId: positiveInt,
  targetType: z.enum(NotificationTargetType),
  targetId: positiveInt.optional(),
  message: z.string().trim().min(1).max(1000),
  state: z.enum(NotificationState).optional(),
  readAt: nullableDateSchema.optional(),
  status: z.enum(NotifyStatusType).optional(),
  sentAt: nullableDateSchema.optional(),
  emailError: z.string().trim().max(1000).optional(),
};

const createNotificationSchema = z
  .object(baseFields)
  .superRefine((data, ctx) => {
    if (data.readAt !== undefined && data.state !== NotificationState.READ) {
      ctx.addIssue({
        code: "custom",
        path: ["readAt"],
        message: "readAt can only be set when state is READ",
      });
    }
  });

const updateNotificationSchema = z
  .object({
    ...baseFields,
    recipientId: positiveInt.optional(),
    targetType: z.enum(NotificationTargetType).optional(),
  })
  .partial()
  .refine(
    (data) => Object.values(data).some((value) => value !== undefined),
    {
      message: "At least one field must be provided",
      path: [],
    },
  )
  .superRefine((data, ctx) => {
    if (data.readAt !== undefined && data.state !== NotificationState.READ) {
      ctx.addIssue({
        code: "custom",
        path: ["readAt"],
        message: "readAt can only be set when state is READ",
      });
    }
  });

const updateNotificationStateSchema = z.object({
  state: z.enum(NotificationState),
});

export {
  nullableDateSchema,
  notificationFilterSchema,
  createNotificationSchema,
  updateNotificationSchema,
  updateNotificationStateSchema,
};
