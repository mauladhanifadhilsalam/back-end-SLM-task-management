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

const commentQuerySchema = z
  .object({
    ticketId: z.coerce.number().int().positive().optional(),
    authorId: z.coerce.number().int().positive().optional(),
    page: z.coerce.number().int().positive().optional(),
    pageSize: z.coerce.number().int().positive().max(100).optional(),
    createdFrom: z.coerce.date().optional(),
    createdTo: z.coerce.date().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.createdFrom && data.createdTo && data.createdTo < data.createdFrom) {
      ctx.addIssue({
        code: "custom",
        path: ["createdTo"],
        message: "createdTo must be on or after createdFrom",
      });
    }
  });

export { messageSchema, createCommentSchema, updateCommentSchema, commentQuerySchema };
