import z from "zod";
import { baseQuerySchema } from "./base.schema";
import { registerSchema } from "../openapi/registry";

const attachmentSortFields = [
  "id",
  "ticketId",
  "userId",
  "fileName",
  "fileSize",
  "createdAt",
] as const;

const attachmentQuerySchema = registerSchema(
  "AttachmentQuery",
  z
    .object({
      ticketId: z.coerce.number().int().positive().optional(),
      userId: z.coerce.number().int().positive().optional(),
      uploadedFrom: z.coerce.date().optional(),
      uploadedTo: z.coerce.date().optional(),
      sortBy: z.enum(attachmentSortFields).optional(),
    })
    .extend(baseQuerySchema.shape)
    .superRefine((data, ctx) => {
      if (data.uploadedFrom && data.uploadedTo && data.uploadedTo < data.uploadedFrom) {
        ctx.addIssue({
          code: "custom",
          path: ["uploadedTo"],
          message: "uploadedTo must be on or after uploadedFrom",
        });
      }
    })
    .openapi({ description: "Filters accepted by GET /attachments." }),
);

const createAttachmentSchema = registerSchema(
  "AttachmentCreateInput",
  z
    .object({
      ticketId: z.coerce.number().int().positive(),
    })
    .openapi({
      description: "Fields submitted alongside the uploaded file when creating an attachment.",
    }),
);

const attachmentUploadSchema = registerSchema(
  "AttachmentUploadForm",
  z
    .object({
      ticketId: z.coerce.number().int().positive(),
      file: z
        .any()
        .openapi({ type: "string", format: "binary", description: "Binary file contents." }),
    })
    .openapi({ description: "Multipart form used to upload an attachment." }),
);

const attachmentResponseSchema = registerSchema(
  "AttachmentResponse",
  z
    .object({
      id: z.number().int().positive(),
      ticketId: z.number().int().positive(),
      userId: z.number().int().positive(),
      fileName: z.string(),
      filePath: z.string(),
      fileSize: z.number().int().nonnegative(),
      mimeType: z.string(),
      createdAt: z.string().datetime(),
      base64: z.string().optional(),
    })
    .openapi({ description: "Attachment metadata returned by the API." }),
);

export {
  attachmentQuerySchema,
  createAttachmentSchema,
  attachmentUploadSchema,
  attachmentResponseSchema,
};
