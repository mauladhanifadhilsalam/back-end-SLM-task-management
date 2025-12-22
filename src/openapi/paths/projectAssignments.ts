import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";
import {
  projectAssignmentQuerySchema,
  createProjectAssignmentSchema,
  projectAssignmentResponseSchema,
} from "../../schemas/project-assignment.schema";
import { messageResponseSchema, buildPaginatedResponseSchema } from "../helpers";

function registerProjectAssignmentPaths(registry: OpenAPIRegistry) {
  const idParamSchema = z.object({
    id: z.coerce.number().int().positive(),
  });

  const paginatedProjectAssignmentResponseSchema = buildPaginatedResponseSchema(
    projectAssignmentResponseSchema,
  );

  registry.registerPath({
    method: "get",
    path: "/project-assignments",
    tags: ["Project Assignments"],
    summary: "List project assignments",
    request: {
      query: projectAssignmentQuerySchema,
    },
    responses: {
      200: {
        description: "Assignments fetched successfully.",
        content: {
          "application/json": {
            schema: paginatedProjectAssignmentResponseSchema,
          },
        },
      },
      400: { description: "Invalid query parameters." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient permissions." },
      404: { description: "Project not found." },
    },
  });

  registry.registerPath({
    method: "post",
    path: "/project-assignments",
    tags: ["Project Assignments"],
    summary: "Assign a user to a project",
    request: {
      body: {
        required: true,
        content: {
          "application/json": { schema: createProjectAssignmentSchema },
        },
      },
    },
    responses: {
      201: {
        description: "Assignment created.",
        content: {
          "application/json": { schema: projectAssignmentResponseSchema },
        },
      },
      400: { description: "Validation failed." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient permissions." },
      404: { description: "Project or user not found." },
      409: { description: "Assignment already exists." },
    },
  });

  registry.registerPath({
    method: "delete",
    path: "/project-assignments/{id}",
    tags: ["Project Assignments"],
    summary: "Remove a project assignment",
    request: {
      params: idParamSchema,
    },
    responses: {
      200: {
        description: "Assignment removed.",
        content: {
          "application/json": { schema: messageResponseSchema },
        },
      },
      400: { description: "Invalid identifier." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient permissions." },
      404: { description: "Assignment not found." },
    },
  });
}

export { registerProjectAssignmentPaths };
