import { z } from "zod";
import { registerSchema } from "./registry";

const paginationMetaSchema = registerSchema(
  "PaginationMeta",
  z
    .object({
      total: z.number().int().nonnegative(),
      page: z.number().int().positive(),
      pageSize: z.number().int().positive(),
      totalPages: z.number().int().nonnegative(),
      hasNextPage: z.boolean(),
      hasPrevPage: z.boolean(),
    })
    .openapi({ description: "Pagination details for list endpoints." }),
);

const paginatedResponseBaseSchema = registerSchema(
  "PaginatedResponse",
  z
    .object({
      data: z.array(z.unknown()).openapi({ description: "Array of resource-specific entries." }),
      pagination: paginationMetaSchema,
    })
    .openapi({
      description:
        "Standard shape returned by list endpoints. The `data` array items depend on the API route.",
    }),
);

const messageResponseSchema = registerSchema(
  "MessageResponse",
  z
    .object({
      message: z.string(),
    })
    .openapi({ description: "Generic message wrapper used for success or error states." }),
);

function buildPaginatedResponseSchema(itemSchema: z.ZodTypeAny) {
  return paginatedResponseBaseSchema.extend({
    data: z.array(itemSchema),
  });
}

export {
  paginationMetaSchema,
  paginatedResponseBaseSchema,
  messageResponseSchema,
  buildPaginatedResponseSchema,
};
