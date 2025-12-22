import { RoleType } from "@prisma/client";
import { z } from "zod";
import { baseQuerySchema } from "./base.schema";
import { registerSchema } from "../openapi/registry";

const manageableRoles = ["PROJECT_MANAGER", "DEVELOPER"] as const;

const userSortFields = [
  "id",
  "fullName",
  "email",
  "role",
  "isActive",
  "createdAt",
  "updatedAt",
] as const;

const passwordSchema = z
  .string()
  .min(8, { message: "Password must be at least 8 characters long." })
  .refine((val) => /[a-z]/.test(val), {
    message: "Password must contain at least one lowercase letter.",
  })
  .refine((val) => /[A-Z]/.test(val), {
    message: "Password must contain at least one uppercase letter.",
  })
  .refine((val) => /\d/.test(val), {
    message: "Password must contain at least one number.",
  })
  .refine((val) => /[^A-Za-z0-9]/.test(val), {
    message: "Password must contain at least one special character.",
  });

const userBaseSchema = z.object({
  email: z.email(),
  fullName: z.string(),
  role: z.enum(manageableRoles),
  password: passwordSchema,
  isActive: z.boolean().optional(),
});

const userSchema = registerSchema(
  "UserCreateInput",
  userBaseSchema.openapi({
    description: "Payload for creating a user with project access.",
  }),
);

const userUpdateSchema = registerSchema(
  "UserUpdateInput",
  userBaseSchema
    .partial()
    .openapi({ description: "Fields that can be updated on an existing user." }),
);

const changePasswordSchema = registerSchema(
  "UserChangePasswordInput",
  z
    .object({
      password: z.string(),
      newPassword: passwordSchema,
    })
    .openapi({ description: "Body required to rotate a user's password." }),
);

const userQuerySchema = registerSchema(
  "UserQuery",
  z
    .object({
      search: z.string().trim().min(1).optional(),
      role: z.enum(manageableRoles).optional(),
      isActive: z.coerce.boolean().optional(),
      sortBy: z.enum(userSortFields).optional(),
    })
    .extend(baseQuerySchema.shape)
    .openapi({
      description: "Query parameters accepted by GET /users.",
    }),
);

const userResponseSchema = registerSchema(
  "UserResponse",
  z
    .object({
      id: z.number().int().positive(),
      fullName: z.string(),
      email: z.email(),
      role: z.nativeEnum(RoleType),
      isActive: z.boolean(),
      createdAt: z.string().datetime(),
      updatedAt: z.string().datetime(),
    })
    .openapi({ description: "Normalized user record returned by the API." }),
);

export {
  passwordSchema,
  userSchema,
  userUpdateSchema,
  changePasswordSchema,
  userQuerySchema,
  userResponseSchema,
};
