import { z } from "zod";
import { ProjectStatus, RoleType, TicketPriority, TicketStatus, TicketType } from "@prisma/client";
import { baseQuerySchema } from "./base.schema";
import { registerSchema } from "../openapi/registry";

const nullableDateSchema = z.union([z.literal(null), z.coerce.date()]).optional();

const ticketSortFields = [
  "id",
  "projectId",
  "type",
  "title",
  "description",
  "priority",
  "status",
  "requesterId",
  "startDate",
  "dueDate",
  "createdAt",
  "updatedAt",
] as const;

const ticketQuerySchema = registerSchema(
  "TicketQuery",
  z
    .object({
      projectId: z.coerce.number().int().positive().optional(),
      requesterId: z.coerce.number().int().positive().optional(),
      status: z.enum(TicketStatus).optional(),
      priority: z.enum(TicketPriority).optional(),
      type: z.enum(TicketType).optional(),
      assigneeId: z.coerce.number().int().positive().optional(),
      search: z.string().trim().min(1).optional(),
      sortBy: z.enum(ticketSortFields).optional(),
      dueFrom: z.coerce.date().optional(),
      dueTo: z.coerce.date().optional(),
      updatedSince: z.coerce.date().optional(),
    })
    .extend(baseQuerySchema.shape)
    .superRefine((data, ctx) => {
      if (data.dueFrom && data.dueTo && data.dueTo < data.dueFrom) {
        ctx.addIssue({
          code: "custom",
          path: ["dueTo"],
          message: "dueTo must be on or after dueFrom",
        });
      }
    })
    .openapi({ description: "Filters available for listing tickets." }),
);

const ticketBaseSchema = z
  .object({
    projectId: z.number().int().positive(),
    requesterId: z.number().int().positive().optional(),
    type: z.enum(TicketType),
    title: z.string().min(1),
    description: z.string().optional().nullable(),
    priority: z.enum(TicketPriority),
    status: z.enum(TicketStatus).optional(),
    startDate: nullableDateSchema,
    dueDate: nullableDateSchema,
    assigneeIds: z.array(z.number().int().positive()).optional(),
  })
  .superRefine((data, ctx) => {
    const start = data.startDate instanceof Date ? data.startDate : null;
    const due = data.dueDate instanceof Date ? data.dueDate : null;

    if (start && due && due < start) {
      ctx.addIssue({
        code: "custom",
        path: ["dueDate"],
        message: "Due date must be on or after start date",
      });
    }
  });

const createTicketSchema = registerSchema(
  "TicketCreateInput",
  ticketBaseSchema.openapi({ description: "Payload for POST /tickets." }),
);

const updateTicketSchema = registerSchema(
  "TicketUpdateInput",
  ticketBaseSchema
    .partial()
    .superRefine((data, ctx) => {
      const start = data.startDate instanceof Date ? data.startDate : null;
      const due = data.dueDate instanceof Date ? data.dueDate : null;

      if (start && due && due < start) {
        ctx.addIssue({
          code: "custom",
          path: ["dueDate"],
          message: "Due date must be on or after start date",
        });
      }
    })
    .openapi({ description: "Payload for PATCH /tickets/{id}." }),
);

const ticketProjectSummarySchema = z.object({
  id: z.number().int().positive(),
  name: z.string(),
  status: z.enum(ProjectStatus),
  startDate: z.string().datetime(),
  endDate: z.string().datetime(),
});

const ticketRequesterSchema = z.object({
  id: z.number().int().positive(),
  fullName: z.string(),
  email: z.email(),
  role: z.nativeEnum(RoleType),
});

const ticketAssigneeSchema = z.object({
  id: z.number().int().positive(),
  assignedAt: z.string().datetime(),
  user: ticketRequesterSchema,
});

const ticketResponseSchema = registerSchema(
  "TicketResponse",
  z
    .object({
      id: z.number().int().positive(),
      projectId: z.number().int().positive(),
      project: ticketProjectSummarySchema.extend({
        assignments: z
          .array(
            z.object({
              userId: z.number().int().positive(),
            }),
          )
          .optional(),
      }),
      requester: ticketRequesterSchema,
      type: z.enum(TicketType),
      title: z.string(),
      description: z.string().nullable().optional(),
      priority: z.enum(TicketPriority),
      status: z.enum(TicketStatus),
      startDate: z.string().datetime().nullable(),
      dueDate: z.string().datetime().nullable(),
      createdAt: z.string().datetime(),
      updatedAt: z.string().datetime(),
      assignees: z.array(ticketAssigneeSchema),
    })
    .openapi({ description: "Ticket resource returned by the API." }),
);

export {
  ticketQuerySchema,
  nullableDateSchema,
  createTicketSchema,
  updateTicketSchema,
  ticketResponseSchema,
};
