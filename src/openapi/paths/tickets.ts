import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";
import {
  createTicketSchema,
  ticketQuerySchema,
  ticketResponseSchema,
  updateTicketSchema,
} from "../../schemas/ticket.schema";
import { messageResponseSchema, buildPaginatedResponseSchema } from "../helpers";

function registerTicketPaths(registry: OpenAPIRegistry) {
  const idParamSchema = z.object({
    id: z.coerce.number().int().positive(),
  });

  const paginatedTicketResponseSchema = buildPaginatedResponseSchema(ticketResponseSchema);

  registry.registerPath({
    method: "get",
    path: "/tickets",
    tags: ["Tickets"],
    summary: "List tickets",
    request: {
      query: ticketQuerySchema,
    },
    responses: {
      200: {
        description: "Tickets fetched successfully.",
        content: {
          "application/json": { schema: paginatedTicketResponseSchema },
        },
      },
      400: { description: "Invalid query parameters." },
      401: { description: "Unauthorized." },
    },
  });

  registry.registerPath({
    method: "get",
    path: "/tickets/{id}",
    tags: ["Tickets"],
    summary: "Fetch a ticket by id",
    request: {
      params: idParamSchema,
    },
    responses: {
      200: {
        description: "Ticket found.",
        content: {
          "application/json": { schema: ticketResponseSchema },
        },
      },
      400: { description: "Invalid identifier." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient permissions to view the ticket." },
      404: { description: "Ticket not found." },
    },
  });

  registry.registerPath({
    method: "post",
    path: "/tickets",
    tags: ["Tickets"],
    summary: "Create a ticket",
    request: {
      body: {
        required: true,
        content: {
          "application/json": { schema: createTicketSchema },
        },
      },
    },
    responses: {
      201: {
        description: "Ticket created.",
        content: {
          "application/json": { schema: ticketResponseSchema },
        },
      },
      400: { description: "Validation failed." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient permissions." },
      404: { description: "Project/requester/assignee not found." },
    },
  });

  registry.registerPath({
    method: "patch",
    path: "/tickets/{id}",
    tags: ["Tickets"],
    summary: "Update a ticket",
    request: {
      params: idParamSchema,
      body: {
        required: true,
        content: {
          "application/json": { schema: updateTicketSchema },
        },
      },
    },
    responses: {
      200: {
        description: "Ticket updated.",
        content: {
          "application/json": { schema: ticketResponseSchema },
        },
      },
      400: { description: "Validation failed." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient permissions." },
      404: { description: "Ticket or related entities not found." },
    },
  });

  registry.registerPath({
    method: "delete",
    path: "/tickets/{id}",
    tags: ["Tickets"],
    summary: "Delete a ticket",
    request: {
      params: idParamSchema,
    },
    responses: {
      200: {
        description: "Ticket deleted.",
        content: {
          "application/json": { schema: messageResponseSchema },
        },
      },
      400: { description: "Invalid identifier." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient permissions." },
      404: { description: "Ticket not found." },
    },
  });
}

export { registerTicketPaths };
