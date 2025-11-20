import { z } from "zod";

const ticketAssigneeQuerySchema = z.object({
  ticketId: z.coerce.number().int().positive().optional(),
});

const createTicketAssigneeSchema = z.object({
  ticketId: z.number().int().positive(),
  userId: z.number().int().positive(),
});

export { ticketAssigneeQuerySchema, createTicketAssigneeSchema };
