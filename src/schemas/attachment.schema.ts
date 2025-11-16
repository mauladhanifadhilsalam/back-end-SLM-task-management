import z from "zod";

const attachmentQuerySchema = z.object({
  ticketId: z.coerce.number().int().positive().optional(),
});

const createAttachmentSchema = z.object({
  ticketId: z.coerce.number().int().positive(),
});

export { attachmentQuerySchema, createAttachmentSchema };
