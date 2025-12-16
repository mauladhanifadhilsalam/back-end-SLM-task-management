import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";
import {
  ticketAssigneeQuerySchema,
  createTicketAssigneeSchema,
  ticketAssigneeResponseSchema,
} from "../../schemas/ticket-assignee.schema";
import { messageResponseSchema, buildPaginatedResponseSchema } from "../helpers";

function registerTicketAssigneePaths(registry: OpenAPIRegistry) {
  const idParamSchema = z.object({
    id: z.coerce.number().int().positive(),
  });

  const paginatedTicketAssigneeResponseSchema = buildPaginatedResponseSchema(
    ticketAssigneeResponseSchema,
  );

  registry.registerPath({
    method: "get",
    path: "/ticket-assignees",
    tags: ["Ticket Assignees"],
    summary: "List ticket assignees",
    request: {
      query: ticketAssigneeQuerySchema,
    },
    responses: {
      200: {
        description: "Assignees fetched successfully.",
        content: {
          "application/json": { schema: paginatedTicketAssigneeResponseSchema },
        },
      },
      400: { description: "Invalid query parameters." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient permissions." },
      404: { description: "Ticket not found." },
    },
  });

  registry.registerPath({
    method: "post",
    path: "/ticket-assignees",
    tags: ["Ticket Assignees"],
    summary: "Assign a user to a ticket",
    request: {
      body: {
        required: true,
        content: {
          "application/json": { schema: createTicketAssigneeSchema },
        },
      },
    },
    responses: {
      201: {
        description: "Ticket assignee created.",
        content: {
          "application/json": { schema: ticketAssigneeResponseSchema },
        },
      },
      400: { description: "Validation failed." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient permissions." },
      404: { description: "Ticket or user not found." },
      409: { description: "User already assigned." },
    },
  });

  registry.registerPath({
    method: "delete",
    path: "/ticket-assignees/{id}",
    tags: ["Ticket Assignees"],
    summary: "Remove a ticket assignee",
    request: {
      params: idParamSchema,
    },
    responses: {
      200: {
        description: "Assignee removed.",
        content: {
          "application/json": { schema: messageResponseSchema },
        },
      },
      400: { description: "Invalid identifier." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient permissions." },
      404: { description: "Assignee or ticket not found." },
    },
  });
}

export { registerTicketAssigneePaths };
