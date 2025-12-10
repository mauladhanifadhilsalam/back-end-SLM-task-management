import { z } from "zod";
import { baseQuerySchema } from "./base.schema";

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

const userSchema = z.object({
  email: z.email(),
  fullName: z.string(),
  role: z.enum(manageableRoles),
  password: passwordSchema,
  isActive: z.boolean().optional(),
});

const changePasswordSchema = z.object({
  password: z.string(),
  newPassword: passwordSchema,
});

const userQuerySchema = z
  .object({
    search: z.string().trim().min(1).optional(),
    role: z.enum(manageableRoles).optional(),
    isActive: z.coerce.boolean().optional(),
    sortBy: z.enum(userSortFields).optional(),
  })
  .extend(baseQuerySchema.shape);

export { passwordSchema, userSchema, changePasswordSchema, userQuerySchema };
