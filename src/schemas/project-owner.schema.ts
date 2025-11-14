import { z } from "zod";

const projectOwnerSchema = z.object({
  name: z.string(),
  company: z.string(),
  email: z.email(),
  phone: z.e164(),
  address: z.string(),
});

export { projectOwnerSchema };
