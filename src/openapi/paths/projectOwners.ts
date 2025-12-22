import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";
import {
  projectOwnerQuerySchema,
  projectOwnerResponseSchema,
  projectOwnerSchema,
  projectOwnerUpdateSchema,
} from "../../schemas/project-owner.schema";
import { messageResponseSchema, buildPaginatedResponseSchema } from "../helpers";

function registerProjectOwnerPaths(registry: OpenAPIRegistry) {
  const idParamSchema = z.object({
    id: z.coerce.number().int().positive(),
  });

  const paginatedProjectOwnerResponseSchema = buildPaginatedResponseSchema(
    projectOwnerResponseSchema,
  );

  registry.registerPath({
    method: "get",
    path: "/project-owners",
    tags: ["Project Owners"],
    summary: "List project owners",
    request: {
      query: projectOwnerQuerySchema,
    },
    responses: {
      200: {
        description: "Project owners fetched successfully.",
        content: {
          "application/json": { schema: paginatedProjectOwnerResponseSchema },
        },
      },
      400: { description: "Invalid query parameters." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient role permissions." },
    },
  });

  registry.registerPath({
    method: "get",
    path: "/project-owners/{id}",
    tags: ["Project Owners"],
    summary: "Fetch a project owner by id",
    request: {
      params: idParamSchema,
    },
    responses: {
      200: {
        description: "Project owner found.",
        content: {
          "application/json": { schema: projectOwnerResponseSchema },
        },
      },
      400: { description: "Invalid identifier." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient role permissions." },
      404: { description: "Project owner not found." },
    },
  });

  registry.registerPath({
    method: "post",
    path: "/project-owners",
    tags: ["Project Owners"],
    summary: "Create a project owner",
    request: {
      body: {
        required: true,
        content: {
          "application/json": { schema: projectOwnerSchema },
        },
      },
    },
    responses: {
      201: {
        description: "Project owner created.",
        content: {
          "application/json": { schema: projectOwnerResponseSchema },
        },
      },
      400: { description: "Validation failed." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient role permissions." },
      409: { description: "Email already exists." },
    },
  });

  registry.registerPath({
    method: "patch",
    path: "/project-owners/{id}",
    tags: ["Project Owners"],
    summary: "Update a project owner",
    request: {
      params: idParamSchema,
      body: {
        required: true,
        content: {
          "application/json": { schema: projectOwnerUpdateSchema },
        },
      },
    },
    responses: {
      200: {
        description: "Project owner updated.",
        content: {
          "application/json": { schema: projectOwnerResponseSchema },
        },
      },
      400: { description: "Validation failed." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient role permissions." },
      404: { description: "Project owner not found." },
      409: { description: "Email already exists." },
    },
  });

  registry.registerPath({
    method: "delete",
    path: "/project-owners/{id}",
    tags: ["Project Owners"],
    summary: "Delete a project owner",
    request: {
      params: idParamSchema,
    },
    responses: {
      200: {
        description: "Project owner deleted.",
        content: {
          "application/json": { schema: messageResponseSchema },
        },
      },
      400: { description: "Invalid identifier." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient role permissions." },
      404: { description: "Project owner not found." },
    },
  });
}

export { registerProjectOwnerPaths };
