import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";
import {
  activityLogQuerySchema,
  activityLogBulkDeleteSchema,
  activityLogResponseSchema,
  activityLogBulkDeleteResponseSchema,
} from "../../schemas/activity-log.schema";
import { messageResponseSchema, buildPaginatedResponseSchema } from "../helpers";

function registerActivityLogPaths(registry: OpenAPIRegistry) {
  const idParamSchema = z.object({
    id: z.coerce.number().int().positive(),
  });

  const paginatedActivityLogResponseSchema =
    buildPaginatedResponseSchema(activityLogResponseSchema);

  registry.registerPath({
    method: "get",
    path: "/activity-logs",
    tags: ["Activity Logs"],
    summary: "List activity logs",
    request: {
      query: activityLogQuerySchema,
    },
    responses: {
      200: {
        description: "Activity logs fetched successfully.",
        content: {
          "application/json": { schema: paginatedActivityLogResponseSchema },
        },
      },
      400: { description: "Invalid query parameters." },
      401: { description: "Unauthorized." },
      403: { description: "Admins only." },
    },
  });

  registry.registerPath({
    method: "get",
    path: "/activity-logs/{id}",
    tags: ["Activity Logs"],
    summary: "Fetch an activity log by id",
    request: {
      params: idParamSchema,
    },
    responses: {
      200: {
        description: "Activity log found.",
        content: {
          "application/json": { schema: activityLogResponseSchema },
        },
      },
      400: { description: "Invalid identifier." },
      401: { description: "Unauthorized." },
      403: { description: "Admins only." },
      404: { description: "Activity log not found." },
    },
  });

  registry.registerPath({
    method: "delete",
    path: "/activity-logs/{id}",
    tags: ["Activity Logs"],
    summary: "Delete a single activity log entry",
    request: {
      params: idParamSchema,
    },
    responses: {
      200: {
        description: "Activity log deleted.",
        content: {
          "application/json": { schema: messageResponseSchema },
        },
      },
      400: { description: "Invalid identifier." },
      401: { description: "Unauthorized." },
      403: { description: "Admins only." },
      404: { description: "Activity log not found." },
    },
  });

  registry.registerPath({
    method: "delete",
    path: "/activity-logs",
    tags: ["Activity Logs"],
    summary: "Bulk delete activity logs",
    description: "Requires at least one filter (either `olderThan` or `targetType`).",
    request: {
      query: activityLogBulkDeleteSchema,
    },
    responses: {
      200: {
        description: "Activity logs deleted.",
        content: {
          "application/json": {
            schema: activityLogBulkDeleteResponseSchema,
          },
        },
      },
      400: { description: "Invalid query parameters." },
      401: { description: "Unauthorized." },
      403: { description: "Admins only." },
    },
  });
}

export { registerActivityLogPaths };
