import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";
import {
  createProjectPhaseSchema,
  projectPhaseQuerySchema,
  projectPhaseResponseSchema,
  updateProjectPhaseSchema,
} from "../../schemas/project-phase.schema";
import { messageResponseSchema, buildPaginatedResponseSchema } from "../helpers";

function registerProjectPhasePaths(registry: OpenAPIRegistry) {
  const idParamSchema = z.object({
    id: z.coerce.number().int().positive(),
  });

  const paginatedProjectPhaseResponseSchema = buildPaginatedResponseSchema(
    projectPhaseResponseSchema,
  );

  registry.registerPath({
    method: "get",
    path: "/project-phases",
    tags: ["Project Phases"],
    summary: "List project phases",
    request: {
      query: projectPhaseQuerySchema,
    },
    responses: {
      200: {
        description: "Project phases fetched successfully.",
        content: {
          "application/json": { schema: paginatedProjectPhaseResponseSchema },
        },
      },
      400: { description: "Invalid query parameters." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient role permissions." },
    },
  });

  registry.registerPath({
    method: "get",
    path: "/project-phases/{id}",
    tags: ["Project Phases"],
    summary: "Fetch a project phase by id",
    request: {
      params: idParamSchema,
    },
    responses: {
      200: {
        description: "Project phase found.",
        content: {
          "application/json": { schema: projectPhaseResponseSchema },
        },
      },
      400: { description: "Invalid identifier." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient role permissions." },
      404: { description: "Project phase not found." },
    },
  });

  registry.registerPath({
    method: "post",
    path: "/project-phases",
    tags: ["Project Phases"],
    summary: "Create a project phase",
    request: {
      body: {
        required: true,
        content: {
          "application/json": { schema: createProjectPhaseSchema },
        },
      },
    },
    responses: {
      201: {
        description: "Project phase created.",
        content: {
          "application/json": { schema: projectPhaseResponseSchema },
        },
      },
      400: { description: "Validation failed." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient role permissions." },
      404: { description: "Project not found." },
    },
  });

  registry.registerPath({
    method: "patch",
    path: "/project-phases/{id}",
    tags: ["Project Phases"],
    summary: "Update a project phase",
    request: {
      params: idParamSchema,
      body: {
        required: true,
        content: {
          "application/json": { schema: updateProjectPhaseSchema },
        },
      },
    },
    responses: {
      200: {
        description: "Project phase updated.",
        content: {
          "application/json": { schema: projectPhaseResponseSchema },
        },
      },
      400: { description: "Validation failed." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient role permissions." },
      404: { description: "Project phase or project not found." },
    },
  });

  registry.registerPath({
    method: "delete",
    path: "/project-phases/{id}",
    tags: ["Project Phases"],
    summary: "Delete a project phase",
    request: {
      params: idParamSchema,
    },
    responses: {
      200: {
        description: "Project phase deleted.",
        content: {
          "application/json": { schema: messageResponseSchema },
        },
      },
      400: { description: "Invalid identifier." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient role permissions." },
      404: { description: "Project phase not found." },
    },
  });
}

export { registerProjectPhasePaths };
