import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";
import {
  commentQuerySchema,
  createCommentSchema,
  updateCommentSchema,
  commentResponseSchema,
} from "../../schemas/comment.schema";
import { messageResponseSchema, buildPaginatedResponseSchema } from "../helpers";

function registerCommentPaths(registry: OpenAPIRegistry) {
  const idParamSchema = z.object({
    id: z.coerce.number().int().positive(),
  });

  const paginatedCommentResponseSchema = buildPaginatedResponseSchema(commentResponseSchema);

  registry.registerPath({
    method: "get",
    path: "/comments",
    tags: ["Comments"],
    summary: "List comments",
    request: {
      query: commentQuerySchema,
    },
    responses: {
      200: {
        description: "Comments fetched successfully.",
        content: {
          "application/json": { schema: paginatedCommentResponseSchema },
        },
      },
      400: { description: "Invalid query parameters." },
      401: { description: "Unauthorized." },
    },
  });

  registry.registerPath({
    method: "get",
    path: "/comments/{id}",
    tags: ["Comments"],
    summary: "Fetch a comment by id",
    request: {
      params: idParamSchema,
    },
    responses: {
      200: {
        description: "Comment found.",
        content: {
          "application/json": { schema: commentResponseSchema },
        },
      },
      400: { description: "Invalid identifier." },
      401: { description: "Unauthorized." },
      404: { description: "Comment not found." },
    },
  });

  registry.registerPath({
    method: "post",
    path: "/comments",
    tags: ["Comments"],
    summary: "Create a comment",
    request: {
      body: {
        required: true,
        content: {
          "application/json": { schema: createCommentSchema },
        },
      },
    },
    responses: {
      201: {
        description: "Comment created.",
        content: {
          "application/json": { schema: commentResponseSchema },
        },
      },
      400: { description: "Validation failed." },
      401: { description: "Unauthorized." },
      404: { description: "Ticket not found." },
    },
  });

  registry.registerPath({
    method: "patch",
    path: "/comments/{id}",
    tags: ["Comments"],
    summary: "Update a comment",
    request: {
      params: idParamSchema,
      body: {
        required: true,
        content: {
          "application/json": { schema: updateCommentSchema },
        },
      },
    },
    responses: {
      200: {
        description: "Comment updated.",
        content: {
          "application/json": { schema: commentResponseSchema },
        },
      },
      400: { description: "Validation failed." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient permissions." },
      404: { description: "Comment not found." },
    },
  });

  registry.registerPath({
    method: "delete",
    path: "/comments/{id}",
    tags: ["Comments"],
    summary: "Delete a comment",
    request: {
      params: idParamSchema,
    },
    responses: {
      200: {
        description: "Comment deleted.",
        content: {
          "application/json": { schema: messageResponseSchema },
        },
      },
      400: { description: "Invalid identifier." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient permissions." },
      404: { description: "Comment not found." },
    },
  });
}

export { registerCommentPaths };
