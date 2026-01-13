import { z } from "zod";
import { baseQuerySchema } from "./base.schema";
import { registerSchema } from "../openapi/registry";

const projectRoleBaseSchema = z.object({
  code: z.string().trim().min(1),
  name: z.string().trim().min(1),
});

const projectRoleSchema = registerSchema(
  "ProjectRoleCreateInput",
  projectRoleBaseSchema.openapi({ description: "Payload for creating a project role." }),
);

const projectRoleUpdateSchema = registerSchema(
  "ProjectRoleUpdateInput",
  projectRoleBaseSchema
    .partial()
    .superRefine((data, ctx) => {
      if (!data.code && !data.name) {
        ctx.addIssue({
          code: "custom",
          path: ["code"],
          message: "Provide at least one field to update.",
        });
      }
    })
    .openapi({ description: "Payload for updating a project role." }),
);

const projectRoleSortFields = ["id", "code", "name"] as const;

const projectRoleQuerySchema = registerSchema(
  "ProjectRoleQuery",
  z
    .object({
      search: z.string().trim().min(1).optional(),
      sortBy: z.enum(projectRoleSortFields).optional(),
    })
    .extend(baseQuerySchema.shape)
    .openapi({ description: "Query params accepted by GET /project-roles." }),
);

const projectRoleResponseSchema = registerSchema(
  "ProjectRoleResponse",
  z
    .object({
      id: z.number().int().positive(),
      code: z.string(),
      name: z.string(),
    })
    .openapi({ description: "Project role label returned by the API." }),
);

export {
  projectRoleSchema,
  projectRoleUpdateSchema,
  projectRoleQuerySchema,
  projectRoleResponseSchema,
};
