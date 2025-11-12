import { z } from "zod";

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

export { createProjectPhaseSchema, updateProjectPhaseSchema };
