import prisma from "../db/prisma";
import { Prisma, ProjectUpdate } from "@prisma/client";
import { buildPaginatedResult, resolvePagination, PaginatedResult } from "../utils/pagination";
import { resolveSorting } from "../utils/sorting";
import { z } from "zod";
import { projectUpdateQuerySchema } from "../schemas/project-update.schema";

type ProjectUpdateFilters = z.infer<typeof projectUpdateQuerySchema>;
type ProjectUpdateSortBy = keyof ProjectUpdate;

type NewProjectUpdateInput = Pick<
  Prisma.ProjectUpdateCreateInput,
  "participant" | "objective" | "progressHighlight" | "teamMood" | "reportDate"
> & {
  projectId: number;
  phaseId: number;
  facilitatorId: number;
};

const projectUpdateInclude = {
  facilitator: {
    select: {
      id: true,
      fullName: true,
      email: true,
      role: true,
    },
  },
  phase: {
    select: {
      id: true,
      name: true,
      startDate: true,
      endDate: true,
    },
  },
} satisfies Prisma.ProjectUpdateInclude;

type ProjectUpdateListItem = Prisma.ProjectUpdateGetPayload<{
  include: typeof projectUpdateInclude;
}>;

function buildProjectUpdateWhere(
  filters: ProjectUpdateFilters = {},
): Prisma.ProjectUpdateWhereInput {
  const { projectId, phaseId, facilitatorId, createdFrom, createdTo } = filters;

  const where: Prisma.ProjectUpdateWhereInput = {
    ...(typeof projectId === "number" ? { projectId } : {}),
    ...(typeof phaseId === "number" ? { phaseId } : {}),
    ...(typeof facilitatorId === "number" ? { facilitatorId } : {}),
  };

  if (createdFrom || createdTo) {
    where.createdAt = {
      ...(createdFrom ? { gte: createdFrom } : {}),
      ...(createdTo ? { lte: createdTo } : {}),
    };
  }

  return where;
}

async function findProjectUpdates(
  filters: ProjectUpdateFilters = {},
): Promise<PaginatedResult<ProjectUpdateListItem>> {
  const where = buildProjectUpdateWhere(filters);

  const pagination = resolvePagination(filters);
  const orderBy = resolveSorting<ProjectUpdateSortBy>(filters, "createdAt", "asc");
  const skip = (pagination.page - 1) * pagination.pageSize;

  const [items, total] = await prisma.$transaction([
    prisma.projectUpdate.findMany({
      where,
      include: projectUpdateInclude,
      orderBy,
      skip,
      take: pagination.pageSize,
    }),
    prisma.projectUpdate.count({ where }),
  ]);

  return buildPaginatedResult(items, total, pagination);
}

async function findProjectUpdate(where: Prisma.ProjectUpdateWhereUniqueInput) {
  return prisma.projectUpdate.findUnique({
    where,
    include: projectUpdateInclude,
  });
}

async function createProjectUpdate(data: NewProjectUpdateInput) {
  return prisma.projectUpdate.create({
    data,
    include: projectUpdateInclude,
  });
}

async function editProjectUpdate(id: number, data: Prisma.ProjectUpdateUncheckedUpdateInput) {
  return prisma.projectUpdate.update({
    where: { id },
    data,
    include: projectUpdateInclude,
  });
}

async function deleteProjectUpdate(id: number) {
  return prisma.projectUpdate.delete({
    where: { id },
  });
}

export {
  findProjectUpdates,
  findProjectUpdate,
  createProjectUpdate,
  editProjectUpdate,
  deleteProjectUpdate,
};
