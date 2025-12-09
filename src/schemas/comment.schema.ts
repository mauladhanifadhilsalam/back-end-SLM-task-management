import z from "zod";
import { baseQuerySchema } from "./base.schema";

const messageSchema = z.object({
  message: z.string().trim().min(1),
});

const createCommentSchema = z
  .object({
    ticketId: z.number().int().positive(),
  })
  .extend(messageSchema.shape);

const updateCommentSchema = messageSchema;

const commentQuerySchema = z
  .object({
    ticketId: z.coerce.number().int().positive().optional(),
    authorId: z.coerce.number().int().positive().optional(),
    createdFrom: z.coerce.date().optional(),
    createdTo: z.coerce.date().optional(),
  }).extend(baseQuerySchema.shape)
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
