import { z } from "zod";
import { baseQuerySchema } from "./base.schema";

const projectOwnerSchema = z.object({
  name: z.string(),
  company: z.string(),
  email: z.email(),
  phone: z.e164(),
  address: z.string(),
});

const projectOwnerQuerySchema = z.object({
  company: z.string().trim().min(1).optional(),
  search: z.string().trim().min(1).optional(),
}).extend(baseQuerySchema.shape);

export { projectOwnerSchema, projectOwnerQuerySchema };
