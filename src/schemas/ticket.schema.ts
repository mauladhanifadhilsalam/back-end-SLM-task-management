import { z } from "zod";
import { TicketPriority, TicketStatus, TicketType } from "@prisma/client";
import { baseQuerySchema } from "./base.schema";

const nullableDateSchema = z.union([z.literal(null), z.coerce.date()]).optional();

const ticketSortFields = [
  "id",
  "projectId",
  "type",
  "title",
  "description",
  "actionPlan",
  "priority",
  "status",
  "requesterId",
  "startDate",
  "dueDate",
  "createdAt",
  "updatedAt",
] as const;

const ticketQuerySchema = z
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
  });

const ticketBaseSchema = z
  .object({
    projectId: z.number().int().positive(),
    requesterId: z.number().int().positive().optional(),
    type: z.enum(TicketType),
    title: z.string().min(1),
    description: z.string().optional().nullable(),
    actionPlan: z.string().optional().nullable(),
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

const createTicketSchema = ticketBaseSchema;

const updateTicketSchema = ticketBaseSchema.partial().superRefine((data, ctx) => {
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

export { ticketQuerySchema, nullableDateSchema, createTicketSchema, updateTicketSchema };
