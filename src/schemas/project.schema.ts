import { z } from "zod";
import { ProjectStatus, ProjectRoleType } from "@prisma/client";

const phaseInputSchema = z.object({
  name: z.string(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
});

const projectAssignmentSchema = z.object({
  userId: z.number().int().positive(),
  roleInProject: z.enum(ProjectRoleType),
});

const createProjectSchema = z
  .object({
    name: z.string(),
    categories: z.array(z.string()).min(1),
    ownerId: z.number().int().positive(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
    phases: z.array(phaseInputSchema).min(1),
    assignments: z.array(projectAssignmentSchema).optional(),
    status: z.enum(ProjectStatus).optional(),
    notes: z.string().optional(),
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

const updateProjectSchema = z
  .object({
    name: z.string().optional(),
    categories: z.array(z.string()).min(1).optional(),
    ownerId: z.number().int().positive().optional(),
    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional(),
    status: z.enum(ProjectStatus).optional(),
    notes: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.endDate && data.startDate && data.endDate < data.startDate) {
      ctx.addIssue({
        code: "custom",
        message: "End date must be on or after start date",
        path: ["endDate"],
      });
    }
  });

const projectQuerySchema = z.object({
  status: z.enum(ProjectStatus).optional(),
  ownerId: z.coerce.number().int().positive().optional(),
  assignedUserId: z.coerce.number().int().positive().optional(),
  category: z.string().trim().min(1).optional(),
  page: z.coerce.number().int().positive().optional(),
  pageSize: z.coerce.number().int().positive().max(100).optional(),
});

export {
  phaseInputSchema,
  projectAssignmentSchema,
  createProjectSchema,
  updateProjectSchema,
  projectQuerySchema,
};
