import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";
import {
  createProjectSchema,
  projectQuerySchema,
  projectResponseSchema,
  updateProjectSchema,
} from "../../schemas/project.schema";
import { messageResponseSchema, buildPaginatedResponseSchema } from "../helpers";

function registerProjectPaths(registry: OpenAPIRegistry) {
  const idParamSchema = z.object({
    id: z.coerce.number().int().positive(),
  });

  const paginatedProjectResponseSchema = buildPaginatedResponseSchema(projectResponseSchema);

  const projectReportQuerySchema = projectQuerySchema.extend({
    year: z.coerce.number().int().min(1900).max(2500).optional(),
  });

  registry.registerPath({
    method: "get",
    path: "/projects",
    tags: ["Projects"],
    summary: "List projects",
    request: {
      query: projectQuerySchema,
    },
    responses: {
      200: {
        description: "Projects fetched successfully.",
        content: {
          "application/json": { schema: paginatedProjectResponseSchema },
        },
      },
      400: { description: "Invalid query parameters." },
      401: { description: "Unauthorized." },
    },
  });

  registry.registerPath({
    method: "get",
    path: "/projects/{id}",
    tags: ["Projects"],
    summary: "Fetch a project by id",
    request: {
      params: idParamSchema,
    },
    responses: {
      200: {
        description: "Project found.",
        content: {
          "application/json": { schema: projectResponseSchema },
        },
      },
      400: { description: "Invalid identifier." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient permissions to view the project." },
      404: { description: "Project not found." },
    },
  });

  registry.registerPath({
    method: "post",
    path: "/projects",
    tags: ["Projects"],
    summary: "Create a project",
    request: {
      body: {
        required: true,
        content: {
          "application/json": { schema: createProjectSchema },
        },
      },
    },
    responses: {
      201: {
        description: "Project created.",
        content: {
          "application/json": { schema: projectResponseSchema },
        },
      },
      400: { description: "Validation failed." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient role permissions." },
      404: { description: "Project owner or assignment user missing." },
    },
  });

  registry.registerPath({
    method: "patch",
    path: "/projects/{id}",
    tags: ["Projects"],
    summary: "Update a project",
    request: {
      params: idParamSchema,
      body: {
        required: true,
        content: {
          "application/json": { schema: updateProjectSchema },
        },
      },
    },
    responses: {
      200: {
        description: "Project updated.",
        content: {
          "application/json": { schema: projectResponseSchema },
        },
      },
      400: { description: "Validation failed." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient role permissions." },
      404: { description: "Project or referenced owner not found." },
    },
  });

  registry.registerPath({
    method: "delete",
    path: "/projects/{id}",
    tags: ["Projects"],
    summary: "Delete a project",
    request: {
      params: idParamSchema,
    },
    responses: {
      200: {
        description: "Project deleted.",
        content: {
          "application/json": { schema: messageResponseSchema },
        },
      },
      400: { description: "Invalid identifier." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient role permissions." },
      404: { description: "Project not found." },
    },
  });

  registry.registerPath({
    method: "get",
    path: "/projects/report",
    tags: ["Projects"],
    summary: "Download an Excel project report",
    description:
      "Generates an `.xlsx` workbook using the provided filters. Only admins and project managers can access this endpoint.",
    request: {
      query: projectReportQuerySchema,
    },
    responses: {
      200: {
        description: "Workbook generated.",
        content: {
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
            schema: {
              type: "string",
              format: "binary",
            },
          },
        },
      },
      400: { description: "Invalid query parameters." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient role permissions." },
      500: { description: "Unable to generate the report." },
    },
  });
}

export { registerProjectPaths };
