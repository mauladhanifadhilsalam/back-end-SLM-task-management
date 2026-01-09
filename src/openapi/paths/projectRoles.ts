import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import {
  projectRoleQuerySchema,
  projectRoleResponseSchema,
  projectRoleSchema,
  projectRoleUpdateSchema,
} from "../../schemas/project-role.schema";
import { buildPaginatedResponseSchema, messageResponseSchema } from "../helpers";
import { z } from "zod";

function registerProjectRolePaths(registry: OpenAPIRegistry) {
  const codeParamSchema = z.object({
    code: z.string().min(1),
  });

  const paginatedProjectRoleResponseSchema =
    buildPaginatedResponseSchema(projectRoleResponseSchema);

  registry.registerPath({
    method: "get",
    path: "/project-roles",
    tags: ["Project Roles"],
    summary: "List project roles",
    request: {
      query: projectRoleQuerySchema,
    },
    responses: {
      200: {
        description: "Project roles fetched successfully.",
        content: {
          "application/json": { schema: paginatedProjectRoleResponseSchema },
        },
      },
      400: { description: "Invalid query parameters." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient role permissions." },
    },
  });

  registry.registerPath({
    method: "post",
    path: "/project-roles",
    tags: ["Project Roles"],
    summary: "Create a project role",
    request: {
      body: {
        required: true,
        content: {
          "application/json": { schema: projectRoleSchema },
        },
      },
    },
    responses: {
      201: {
        description: "Project role created.",
        content: {
          "application/json": { schema: projectRoleResponseSchema },
        },
      },
      400: { description: "Validation failed." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient role permissions." },
      409: { description: "Project role already exists." },
    },
  });

  registry.registerPath({
    method: "get",
    path: "/project-roles/{code}",
    tags: ["Project Roles"],
    summary: "Fetch a project role by code",
    request: {
      params: codeParamSchema,
    },
    responses: {
      200: {
        description: "Project role found.",
        content: {
          "application/json": { schema: projectRoleResponseSchema },
        },
      },
      400: { description: "Invalid identifier." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient role permissions." },
      404: { description: "Project role not found." },
    },
  });

  registry.registerPath({
    method: "patch",
    path: "/project-roles/{code}",
    tags: ["Project Roles"],
    summary: "Update a project role",
    request: {
      params: codeParamSchema,
      body: {
        required: true,
        content: {
          "application/json": { schema: projectRoleUpdateSchema },
        },
      },
    },
    responses: {
      200: {
        description: "Project role updated.",
        content: {
          "application/json": { schema: projectRoleResponseSchema },
        },
      },
      400: { description: "Validation failed." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient role permissions." },
      404: { description: "Project role not found." },
      409: { description: "Project role already exists." },
    },
  });

  registry.registerPath({
    method: "delete",
    path: "/project-roles/{code}",
    tags: ["Project Roles"],
    summary: "Delete a project role",
    request: {
      params: codeParamSchema,
    },
    responses: {
      200: {
        description: "Project role deleted.",
        content: {
          "application/json": {
            schema: messageResponseSchema,
          },
        },
      },
      400: { description: "Invalid identifier." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient role permissions." },
      404: { description: "Project role not found." },
    },
  });
}

export { registerProjectRolePaths };
