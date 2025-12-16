import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";
import {
  attachmentQuerySchema,
  attachmentUploadSchema,
  attachmentResponseSchema,
} from "../../schemas/attachment.schema";
import { messageResponseSchema, buildPaginatedResponseSchema } from "../helpers";

function registerAttachmentPaths(registry: OpenAPIRegistry) {
  const idParamSchema = z.object({
    id: z.coerce.number().int().positive(),
  });

  const paginatedAttachmentResponseSchema = buildPaginatedResponseSchema(attachmentResponseSchema);

  registry.registerPath({
    method: "get",
    path: "/attachments",
    tags: ["Attachments"],
    summary: "List attachments",
    description: "Admins can fetch all attachments; other users must filter by `ticketId`.",
    request: {
      query: attachmentQuerySchema,
    },
    responses: {
      200: {
        description: "Attachments fetched successfully.",
        content: {
          "application/json": { schema: paginatedAttachmentResponseSchema },
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
    path: "/attachments",
    tags: ["Attachments"],
    summary: "Upload an attachment to a ticket",
    request: {
      body: {
        required: true,
        content: {
          "multipart/form-data": { schema: attachmentUploadSchema },
        },
      },
    },
    responses: {
      201: {
        description: "Attachment uploaded.",
        content: {
          "application/json": { schema: attachmentResponseSchema },
        },
      },
      400: { description: "Validation failed or file missing." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient permissions." },
      404: { description: "Ticket not found." },
    },
  });

  registry.registerPath({
    method: "delete",
    path: "/attachments/{id}",
    tags: ["Attachments"],
    summary: "Delete an attachment",
    request: {
      params: idParamSchema,
    },
    responses: {
      200: {
        description: "Attachment deleted.",
        content: {
          "application/json": { schema: messageResponseSchema },
        },
      },
      400: { description: "Invalid identifier." },
      401: { description: "Unauthorized." },
      403: { description: "Insufficient permissions." },
      404: { description: "Attachment or ticket not found." },
    },
  });
}

export { registerAttachmentPaths };
