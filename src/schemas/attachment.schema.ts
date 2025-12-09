import z from "zod";
import { baseQuerySchema } from "./base.schema";

const attachmentQuerySchema = z
  .object({
    ticketId: z.coerce.number().int().positive().optional(),
    userId: z.coerce.number().int().positive().optional(),
    uploadedFrom: z.coerce.date().optional(),
    uploadedTo: z.coerce.date().optional(),
  }).extend(baseQuerySchema.shape)
  .superRefine((data, ctx) => {
    if (data.uploadedFrom && data.uploadedTo && data.uploadedTo < data.uploadedFrom) {
      ctx.addIssue({
        code: "custom",
        path: ["uploadedTo"],
        message: "uploadedTo must be on or after uploadedFrom",
      });
    }
  });

const createAttachmentSchema = z.object({
  ticketId: z.coerce.number().int().positive(),
});

export { attachmentQuerySchema, createAttachmentSchema };
