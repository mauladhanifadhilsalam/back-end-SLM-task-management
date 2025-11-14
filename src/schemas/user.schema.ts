import { z } from "zod";

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
  role: z.enum(["PROJECT_MANAGER", "DEVELOPER"]),
  password: passwordSchema,
  isActive: z.boolean().optional(),
});

const changePasswordSchema = z.object({
  email: z.email(),
  password: z.string(),
  newPassword: passwordSchema,
});

export { passwordSchema, userSchema, changePasswordSchema };
