import { z } from "zod";
import { baseQuerySchema } from "./base.schema";
import { registerSchema } from "../openapi/registry";

const projectOwnerBaseSchema = z.object({
  name: z.string(),
  company: z.string(),
  email: z.email(),
  phone: z.e164(),
  address: z.string(),
});

const projectOwnerSchema = registerSchema(
  "ProjectOwnerCreateInput",
  projectOwnerBaseSchema.openapi({
    description: "Body payload required to create a project owner.",
  }),
);

const projectOwnerUpdateSchema = registerSchema(
  "ProjectOwnerUpdateInput",
  projectOwnerBaseSchema
    .partial()
    .openapi({ description: "Fields available when updating a project owner." }),
);

const projectOwnerSortFields = ["id", "name", "company", "createdAt"] as const;

const projectOwnerQuerySchema = registerSchema(
  "ProjectOwnerQuery",
  z
    .object({
      company: z.string().trim().min(1).optional(),
      search: z.string().trim().min(1).optional(),
      sortBy: z.enum(projectOwnerSortFields).optional(),
    })
    .extend(baseQuerySchema.shape)
    .openapi({ description: "Query params accepted by GET /project-owners." }),
);

const projectOwnerResponseSchema = registerSchema(
  "ProjectOwnerResponse",
  z
    .object({
      id: z.number().int().positive(),
      name: z.string(),
      company: z.string(),
      email: z.email(),
      phone: z.string(),
      address: z.string(),
      createdAt: z.string().datetime(),
      updatedAt: z.string().datetime().optional(),
    })
    .openapi({ description: "Project owner resource returned by the API." }),
);

export {
  projectOwnerSchema,
  projectOwnerUpdateSchema,
  projectOwnerQuerySchema,
  projectOwnerResponseSchema,
};
