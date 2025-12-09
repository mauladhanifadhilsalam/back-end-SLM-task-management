import { z } from "zod";
import { baseQuerySchema } from "./base.schema";

const createProjectPhaseSchema = z
  .object({
    name: z.string().min(1),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
    projectId: z.number().int().positive(),
  })
  .superRefine((data, ctx) => {
    if (data.endDate < data.startDate) {
      ctx.addIssue({
        code: "custom",
        message: "End date must be on or after start date",
        path: ["endDate"],
      });
    }
  });

const updateProjectPhaseSchema = createProjectPhaseSchema.partial().superRefine(
  (data, ctx) => {
    if (data.startDate && data.endDate && data.endDate < data.startDate) {
      ctx.addIssue({
        code: "custom",
        message: "End date must be on or after start date",
        path: ["endDate"],
      });
    }
  },
);

const phaseSortOrderSchema = z.enum(["asc", "desc"]);

const projectPhaseQuerySchema = z
  .object({
    projectId: z.coerce.number().int().positive().optional(),
    startAfter: z.coerce.date().optional(),
    endBefore: z.coerce.date().optional(),
    activeOnly: z.coerce.boolean().optional(),
    sortOrder: phaseSortOrderSchema.optional(),
  }).extend(baseQuerySchema.shape)
  .superRefine((data, ctx) => {
    if (data.startAfter && data.endBefore && data.endBefore < data.startAfter) {
      ctx.addIssue({
        code: "custom",
        path: ["endBefore"],
        message: "endBefore must be on or after startAfter",
      });
    }
  });

export {
  createProjectPhaseSchema,
  updateProjectPhaseSchema,
  projectPhaseQuerySchema,
};
