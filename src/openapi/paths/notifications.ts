import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";
import {
  notificationQuerySchema,
  createNotificationSchema,
  updateNotificationSchema,
  updateNotificationStateSchema,
  resendNotificationSchema,
  notificationResponseSchema,
} from "../../schemas/notification.schema";
import { messageResponseSchema, buildPaginatedResponseSchema } from "../helpers";

function registerNotificationPaths(registry: OpenAPIRegistry) {
  const idParamSchema = z.object({
    id: z.coerce.number().int().positive(),
  });

  const paginatedNotificationResponseSchema = buildPaginatedResponseSchema(
    notificationResponseSchema,
  );

  registry.registerPath({
    method: "get",
    path: "/notifications",
    tags: ["Notifications"],
    summary: "List notifications",
    description:
      "Admins can filter any recipient; other roles are scoped to their own notifications.",
    request: {
      query: notificationQuerySchema,
    },
    responses: {
      200: {
        description: "Notifications fetched successfully.",
        content: {
          "application/json": { schema: paginatedNotificationResponseSchema },
        },
      },
      400: { description: "Invalid query parameters." },
      401: { description: "Unauthorized." },
    },
  });

  registry.registerPath({
    method: "get",
    path: "/notifications/{id}",
    tags: ["Notifications"],
    summary: "Fetch a notification by id",
    request: {
      params: idParamSchema,
    },
    responses: {
      200: {
        description: "Notification found.",
        content: {
          "application/json": { schema: notificationResponseSchema },
        },
      },
      400: { description: "Invalid identifier." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient permissions." },
      404: { description: "Notification not found." },
    },
  });

  registry.registerPath({
    method: "post",
    path: "/notifications",
    tags: ["Notifications"],
    summary: "Create a notification",
    description: "Restricted to admins.",
    request: {
      body: {
        required: true,
        content: {
          "application/json": { schema: createNotificationSchema },
        },
      },
    },
    responses: {
      201: {
        description: "Notification created.",
        content: {
          "application/json": { schema: notificationResponseSchema },
        },
      },
      400: { description: "Validation failed." },
      401: { description: "Unauthorized." },
      403: { description: "Only admins may create notifications." },
      404: { description: "Recipient not found." },
    },
  });

  registry.registerPath({
    method: "patch",
    path: "/notifications/{id}",
    tags: ["Notifications"],
    summary: "Update a notification",
    description: "Restricted to admins.",
    request: {
      params: idParamSchema,
      body: {
        required: true,
        content: {
          "application/json": { schema: updateNotificationSchema },
        },
      },
    },
    responses: {
      200: {
        description: "Notification updated.",
        content: {
          "application/json": { schema: notificationResponseSchema },
        },
      },
      400: { description: "Validation failed." },
      401: { description: "Unauthorized." },
      403: { description: "Only admins may update notifications." },
      404: { description: "Notification or recipient not found." },
    },
  });

  registry.registerPath({
    method: "delete",
    path: "/notifications/{id}",
    tags: ["Notifications"],
    summary: "Delete a notification",
    description: "Restricted to admins.",
    request: {
      params: idParamSchema,
    },
    responses: {
      200: {
        description: "Notification deleted.",
        content: {
          "application/json": { schema: messageResponseSchema },
        },
      },
      400: { description: "Invalid identifier." },
      401: { description: "Unauthorized." },
      403: { description: "Only admins may delete notifications." },
      404: { description: "Notification not found." },
    },
  });

  registry.registerPath({
    method: "patch",
    path: "/notifications/{id}/state",
    tags: ["Notifications"],
    summary: "Mark a notification as read/unread",
    request: {
      params: idParamSchema,
      body: {
        required: true,
        content: {
          "application/json": { schema: updateNotificationStateSchema },
        },
      },
    },
    responses: {
      200: {
        description: "Notification state updated.",
        content: {
          "application/json": { schema: notificationResponseSchema },
        },
      },
      400: { description: "Validation failed." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient permissions." },
      404: { description: "Notification not found." },
    },
  });

  registry.registerPath({
    method: "post",
    path: "/notifications/{id}/resend",
    tags: ["Notifications"],
    summary: "Resend a failed notification email",
    description: "Restricted to admins and only allowed for failed emails.",
    request: {
      params: idParamSchema,
      body: {
        required: false,
        content: {
          "application/json": { schema: resendNotificationSchema },
        },
      },
    },
    responses: {
      202: {
        description: "Resend queued.",
        content: {
          "application/json": { schema: notificationResponseSchema },
        },
      },
      400: { description: "Validation failed or resend error." },
      401: { description: "Unauthorized." },
      403: { description: "Only admins may resend notifications." },
      404: { description: "Notification not found." },
      409: { description: "Notification not in FAILED status." },
    },
  });
}

export { registerNotificationPaths };
