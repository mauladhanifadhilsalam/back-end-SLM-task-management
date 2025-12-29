import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";
import {
  createTeamUpdateSchema,
  updateTeamUpdateSchema,
  teamUpdateQuerySchema,
  teamUpdateResponseSchema,
} from "../../schemas/team-update.schema";
import { messageResponseSchema, buildPaginatedResponseSchema } from "../helpers";

function registerTeamUpdatePaths(registry: OpenAPIRegistry) {
  const idParamSchema = z.object({
    id: z.coerce.number().int().positive(),
  });

  const paginatedTeamUpdateResponseSchema = buildPaginatedResponseSchema(teamUpdateResponseSchema);

  registry.registerPath({
    method: "get",
    path: "/team-updates",
    tags: ["Team Updates"],
    summary: "List team updates",
    request: {
      query: teamUpdateQuerySchema,
    },
    responses: {
      200: {
        description: "Team updates fetched successfully.",
        content: {
          "application/json": { schema: paginatedTeamUpdateResponseSchema },
        },
      },
      400: { description: "Invalid query parameters." },
      401: { description: "Unauthorized." },
    },
  });

  registry.registerPath({
    method: "get",
    path: "/team-updates/{id}",
    tags: ["Team Updates"],
    summary: "Fetch a team update by id",
    request: {
      params: idParamSchema,
    },
    responses: {
      200: {
        description: "Team update found.",
        content: {
          "application/json": { schema: teamUpdateResponseSchema },
        },
      },
      400: { description: "Invalid identifier." },
      401: { description: "Unauthorized." },
      404: { description: "Team update not found." },
    },
  });

  registry.registerPath({
    method: "post",
    path: "/team-updates",
    tags: ["Team Updates"],
    summary: "Create a team update",
    request: {
      body: {
        required: true,
        content: {
          "application/json": { schema: createTeamUpdateSchema },
        },
      },
    },
    responses: {
      201: {
        description: "Team update created.",
        content: {
          "application/json": { schema: teamUpdateResponseSchema },
        },
      },
      400: { description: "Validation failed." },
      401: { description: "Unauthorized." },
      404: { description: "Project not found." },
    },
  });

  registry.registerPath({
    method: "patch",
    path: "/team-updates/{id}",
    tags: ["Team Updates"],
    summary: "Update a team update",
    request: {
      params: idParamSchema,
      body: {
        required: true,
        content: {
          "application/json": { schema: updateTeamUpdateSchema },
        },
      },
    },
    responses: {
      200: {
        description: "Team update updated.",
        content: {
          "application/json": { schema: teamUpdateResponseSchema },
        },
      },
      400: { description: "Validation failed." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient permissions." },
      404: { description: "Team update not found." },
    },
  });

  registry.registerPath({
    method: "delete",
    path: "/team-updates/{id}",
    tags: ["Team Updates"],
    summary: "Delete a team update",
    request: {
      params: idParamSchema,
    },
    responses: {
      200: {
        description: "Team update deleted.",
        content: {
          "application/json": { schema: messageResponseSchema },
        },
      },
      400: { description: "Invalid identifier." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient permissions." },
      404: { description: "Team update not found." },
    },
  });
}

export { registerTeamUpdatePaths };
