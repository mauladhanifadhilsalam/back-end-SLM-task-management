import { z } from "zod";

const manageableRoles = ["PROJECT_MANAGER", "DEVELOPER"] as const;

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
  email: z.email(),
  password: z.string(),
  newPassword: passwordSchema,
});

const userQuerySchema = z.object({
  page: z.coerce.number().int().positive().optional(),
  pageSize: z.coerce.number().int().positive().max(100).optional(),
  search: z.string().trim().min(1).optional(),
  role: z.enum(manageableRoles).optional(),
  isActive: z.coerce.boolean().optional(),
});

export { passwordSchema, userSchema, changePasswordSchema, userQuerySchema };
