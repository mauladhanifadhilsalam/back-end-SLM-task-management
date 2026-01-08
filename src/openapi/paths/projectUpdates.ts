import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";
import {
  createProjectUpdateSchema,
  updateProjectUpdateSchema,
  projectUpdateQuerySchema,
  projectUpdateResponseSchema,
} from "../../schemas/project-update.schema";
import { messageResponseSchema, buildPaginatedResponseSchema } from "../helpers";

function registerProjectUpdatePaths(registry: OpenAPIRegistry) {
  const idParamSchema = z.object({
    id: z.coerce.number().int().positive(),
  });

  const paginatedProjectUpdateResponseSchema = buildPaginatedResponseSchema(
    projectUpdateResponseSchema,
  );

  registry.registerPath({
    method: "get",
    path: "/project-updates",
    tags: ["Project Updates"],
    summary: "List project updates",
    request: {
      query: projectUpdateQuerySchema,
    },
    responses: {
      200: {
        description: "Project updates fetched successfully.",
        content: {
          "application/json": { schema: paginatedProjectUpdateResponseSchema },
        },
      },
      400: { description: "Invalid query parameters." },
      401: { description: "Unauthorized." },
    },
  });

  registry.registerPath({
    method: "get",
    path: "/project-updates/{id}",
    tags: ["Project Updates"],
    summary: "Fetch a project update by id",
    request: {
      params: idParamSchema,
    },
    responses: {
      200: {
        description: "Project update found.",
        content: {
          "application/json": { schema: projectUpdateResponseSchema },
        },
      },
      400: { description: "Invalid identifier." },
      401: { description: "Unauthorized." },
      404: { description: "Project update not found." },
    },
  });

  registry.registerPath({
    method: "post",
    path: "/project-updates",
    tags: ["Project Updates"],
    summary: "Create a project update",
    request: {
      body: {
        required: true,
        content: {
          "application/json": { schema: createProjectUpdateSchema },
        },
      },
    },
    responses: {
      201: {
        description: "Project update created.",
        content: {
          "application/json": { schema: projectUpdateResponseSchema },
        },
      },
      400: { description: "Validation failed." },
      401: { description: "Unauthorized." },
      404: { description: "Project or phase not found." },
    },
  });

  registry.registerPath({
    method: "patch",
    path: "/project-updates/{id}",
    tags: ["Project Updates"],
    summary: "Update a project update",
    request: {
      params: idParamSchema,
      body: {
        required: true,
        content: {
          "application/json": { schema: updateProjectUpdateSchema },
        },
      },
    },
    responses: {
      200: {
        description: "Project update updated.",
        content: {
          "application/json": { schema: projectUpdateResponseSchema },
        },
      },
      400: { description: "Validation failed." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient permissions." },
      404: { description: "Project update not found." },
    },
  });

  registry.registerPath({
    method: "delete",
    path: "/project-updates/{id}",
    tags: ["Project Updates"],
    summary: "Delete a project update",
    request: {
      params: idParamSchema,
    },
    responses: {
      200: {
        description: "Project update deleted.",
        content: {
          "application/json": { schema: messageResponseSchema },
        },
      },
      400: { description: "Invalid identifier." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient permissions." },
      404: { description: "Project update not found." },
    },
  });
}

export { registerProjectUpdatePaths };
