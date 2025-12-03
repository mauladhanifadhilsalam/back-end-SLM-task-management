import z from "zod";

const attachmentQuerySchema = z
  .object({
    ticketId: z.coerce.number().int().positive().optional(),
    userId: z.coerce.number().int().positive().optional(),
    page: z.coerce.number().int().positive().optional(),
    pageSize: z.coerce.number().int().positive().max(100).optional(),
    uploadedFrom: z.coerce.date().optional(),
    uploadedTo: z.coerce.date().optional(),
  })
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
