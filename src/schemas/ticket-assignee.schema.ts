import { TicketPriority, TicketStatus, TicketType, RoleType } from "@prisma/client";
import { z } from "zod";
import { baseQuerySchema } from "./base.schema";
import { registerSchema } from "../openapi/registry";

const ticketAssigneeQuerySchema = registerSchema(
  "TicketAssigneeQuery",
  z
    .object({
      ticketId: z.coerce.number().int().positive().optional(),
      userId: z.coerce.number().int().positive().optional(),
      assignedFrom: z.coerce.date().optional(),
      assignedTo: z.coerce.date().optional(),
      sortBy: z.enum(["id", "userId", "assignedAt", "ticketId"]).optional(),
    })
    .extend(baseQuerySchema.shape)
    .superRefine((data, ctx) => {
      if (data.assignedFrom && data.assignedTo && data.assignedTo < data.assignedFrom) {
        ctx.addIssue({
          code: "custom",
          path: ["assignedTo"],
          message: "assignedTo must be on or after assignedFrom",
        });
      }
    })
    .openapi({ description: "Filters accepted by GET /ticket-assignees." }),
);

const createTicketAssigneeSchema = registerSchema(
  "TicketAssigneeCreateInput",
  z
    .object({
      ticketId: z.number().int().positive(),
      userId: z.number().int().positive(),
    })
    .openapi({ description: "Payload for POST /ticket-assignees." }),
);

const ticketSummarySchema = z.object({
  id: z.number().int().positive(),
  title: z.string(),
  type: z.enum(TicketType),
  status: z.enum(TicketStatus),
  priority: z.enum(TicketPriority),
  projectId: z.number().int().positive(),
});

const ticketAssigneeResponseSchema = registerSchema(
  "TicketAssigneeResponse",
  z
    .object({
      id: z.number().int().positive(),
      ticketId: z.number().int().positive(),
      userId: z.number().int().positive(),
      assignedAt: z.string().datetime(),
      user: z.object({
        id: z.number().int().positive(),
        fullName: z.string(),
        email: z.email(),
        role: z.nativeEnum(RoleType),
      }),
      ticket: ticketSummarySchema,
    })
    .openapi({ description: "Ticket assignee record." }),
);

export { ticketAssigneeQuerySchema, createTicketAssigneeSchema, ticketAssigneeResponseSchema };
