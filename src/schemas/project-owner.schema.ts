import { z } from "zod";

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
  page: z.coerce.number().int().positive().optional(),
  pageSize: z.coerce.number().int().positive().max(100).optional(),
});

export { projectOwnerSchema, projectOwnerQuerySchema };
