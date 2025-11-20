import z from "zod";

const messageSchema = z.object({
  message: z.string().trim().min(1),
});

const createCommentSchema = z
  .object({
    ticketId: z.number().int().positive(),
  })
  .merge(messageSchema);

const updateCommentSchema = messageSchema;

const commentFilterSchema = z.object({
  ticketId: z.coerce.number().int().positive().optional(),
});

export { messageSchema, createCommentSchema, updateCommentSchema, commentFilterSchema };
