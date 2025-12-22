import { RoleType } from "@prisma/client";
import z from "zod";
import { baseQuerySchema } from "./base.schema";
import { registerSchema } from "../openapi/registry";
import { ticketResponseSchema } from "./ticket.schema";

const messageSchema = z.object({
  message: z.string().trim().min(1),
});

const createCommentSchema = registerSchema(
  "CommentCreateInput",
  z
    .object({
      ticketId: z.number().int().positive(),
    })
    .extend(messageSchema.shape)
    .openapi({ description: "Payload for POST /comments." }),
);

const updateCommentSchema = registerSchema(
  "CommentUpdateInput",
  messageSchema.openapi({ description: "Payload for PATCH /comments/{id}." }),
);

const commentSortFields = ["message", "ticketId", "id", "userId", "createdAt"] as const;

const commentQuerySchema = registerSchema(
  "CommentQuery",
  z
    .object({
      ticketId: z.coerce.number().int().positive().optional(),
      authorId: z.coerce.number().int().positive().optional(),
      createdFrom: z.coerce.date().optional(),
      createdTo: z.coerce.date().optional(),
      sortBy: z.enum(commentSortFields).optional(),
    })
    .extend(baseQuerySchema.shape)
    .superRefine((data, ctx) => {
      if (data.createdFrom && data.createdTo && data.createdTo < data.createdFrom) {
        ctx.addIssue({
          code: "custom",
          path: ["createdTo"],
          message: "createdTo must be on or after createdFrom",
        });
      }
    })
    .openapi({ description: "Filters accepted by GET /comments." }),
);

const commentUserSchema = z.object({
  id: z.number().int().positive(),
  fullName: z.string(),
  email: z.email(),
  role: z.nativeEnum(RoleType),
});

const commentResponseSchema = registerSchema(
  "CommentResponse",
  z
    .object({
      id: z.number().int().positive(),
      ticketId: z.number().int().positive(),
      userId: z.number().int().positive(),
      message: z.string(),
      createdAt: z.string().datetime(),
      user: commentUserSchema,
      ticket: ticketResponseSchema,
    })
    .openapi({ description: "Comment resource that includes ticket and author info." }),
);

export {
  messageSchema,
  createCommentSchema,
  updateCommentSchema,
  commentQuerySchema,
  commentResponseSchema,
};
