import { RoleType } from "@prisma/client";
import { z } from "zod";
import { NotificationState, NotificationTargetType, NotifyStatusType } from "@prisma/client";
import { baseQuerySchema } from "./base.schema";
import { registerSchema } from "../openapi/registry";

const positiveInt = z.number().int().positive();
const nullableDateSchema = z.union([z.literal(null), z.coerce.date()]);
const emailSubjectSchema = z.string().trim().min(1).max(200);
const emailTextSchema = z.string().trim().min(1).max(2000);
const emailFromSchema = z.string().trim().min(1).max(255);
const emailReplyToSchema = z.email().trim().max(255);

const notificationSortFields = [
  "id",
  "recipientId",
  "targetId",
  "state",
  "status",
  "sentAt",
  "createdAt",
] as const;

const notificationQuerySchema = registerSchema(
  "NotificationQuery",
  z
    .object({
      recipientId: z.coerce.number().int().positive().optional(),
      targetType: z.enum(NotificationTargetType).optional(),
      targetId: z.coerce.number().int().positive().optional(),
      state: z.enum(NotificationState).optional(),
      status: z.enum(NotifyStatusType).optional(),
      sentFrom: z.coerce.date().optional(),
      sentTo: z.coerce.date().optional(),
      sortBy: z.enum(notificationSortFields).optional(),
    })
    .extend(baseQuerySchema.shape)
    .superRefine((data, ctx) => {
      if (data.sentFrom && data.sentTo && data.sentTo < data.sentFrom) {
        ctx.addIssue({
          code: "custom",
          path: ["sentTo"],
          message: "sentTo must be on or after sentFrom",
        });
      }
    })
    .openapi({ description: "Filters accepted by GET /notifications." }),
);

const baseFields = {
  recipientId: positiveInt,
  targetType: z.enum(NotificationTargetType),
  targetId: positiveInt.optional(),
  message: z.string().trim().min(1).max(1000),
  subject: emailSubjectSchema.optional(),
  emailText: emailTextSchema.optional(),
  emailFrom: emailFromSchema.optional(),
  emailReplyTo: emailReplyToSchema.optional(),
  state: z.enum(NotificationState).optional(),
  readAt: nullableDateSchema.optional(),
  status: z.enum(NotifyStatusType).optional(),
  sentAt: nullableDateSchema.optional(),
  emailError: z.string().trim().max(1000).optional(),
};

const resendNotificationSchema = registerSchema(
  "NotificationResendInput",
  z
    .object({
      subject: emailSubjectSchema.optional(),
      text: emailTextSchema.optional(),
      from: emailFromSchema.optional(),
      replyTo: emailReplyToSchema.optional(),
    })
    .partial()
    .openapi({
      description: "Optional overrides when resending a failed email notification.",
    }),
);

const createNotificationSchema = registerSchema(
  "NotificationCreateInput",
  z
    .object(baseFields)
    .superRefine((data, ctx) => {
      if (data.readAt !== undefined && data.state !== NotificationState.READ) {
        ctx.addIssue({
          code: "custom",
          path: ["readAt"],
          message: "readAt can only be set when state is READ",
        });
      }
    })
    .openapi({ description: "Payload for POST /notifications." }),
);

const updateNotificationSchema = registerSchema(
  "NotificationUpdateInput",
  z
    .object({
      ...baseFields,
      recipientId: positiveInt.optional(),
      targetType: z.enum(NotificationTargetType).optional(),
    })
    .partial()
    .refine((data) => Object.values(data).some((value) => value !== undefined), {
      message: "At least one field must be provided",
      path: [],
    })
    .superRefine((data, ctx) => {
      if (data.readAt !== undefined && data.state !== NotificationState.READ) {
        ctx.addIssue({
          code: "custom",
          path: ["readAt"],
          message: "readAt can only be set when state is READ",
        });
      }
    })
    .openapi({ description: "Payload for PATCH /notifications/{id}." }),
);

const updateNotificationStateSchema = registerSchema(
  "NotificationStateUpdateInput",
  z
    .object({
      state: z.enum(NotificationState),
    })
    .openapi({ description: "State transition payload for notifications." }),
);

const notificationRecipientSchema = z.object({
  id: z.number().int().positive(),
  fullName: z.string(),
  email: z.email(),
  role: z.nativeEnum(RoleType),
});

const notificationResponseSchema = registerSchema(
  "NotificationResponse",
  z
    .object({
      id: z.number().int().positive(),
      recipientId: z.number().int().positive(),
      targetType: z.enum(NotificationTargetType),
      targetId: z.number().int().positive().nullable(),
      message: z.string(),
      subject: z.string().nullable().optional(),
      emailText: z.string().nullable().optional(),
      emailFrom: z.string().nullable().optional(),
      emailReplyTo: z.string().nullable().optional(),
      state: z.enum(NotificationState),
      readAt: z.string().datetime().nullable(),
      status: z.enum(NotifyStatusType).nullable(),
      sentAt: z.string().datetime().nullable(),
      emailError: z.string().nullable().optional(),
      createdAt: z.string().datetime().optional(),
      updatedAt: z.string().datetime().optional(),
      recipient: notificationRecipientSchema,
    })
    .openapi({ description: "Notification resource including recipient info." }),
);

export {
  nullableDateSchema,
  notificationQuerySchema,
  createNotificationSchema,
  updateNotificationSchema,
  updateNotificationStateSchema,
  resendNotificationSchema,
  notificationResponseSchema,
};
