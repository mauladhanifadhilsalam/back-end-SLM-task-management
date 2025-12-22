import z from "zod";
import { paginationQuerySchema } from "./pagination.schema";

const baseQuerySchema = paginationQuerySchema.extend({
  sortOrder: z.enum(["asc", "desc"]).optional(),
});

export { baseQuerySchema };
