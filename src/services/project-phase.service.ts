import prisma from "../db/prisma";
import { Prisma } from "@prisma/client";
import {
  buildPaginatedResult,
  resolvePagination,
  PaginatedResult,
} from "../utils/pagination";

type NewProjectPhaseInput = Pick<
  Prisma.ProjectPhaseUncheckedCreateInput,
  "name" | "startDate" | "endDate" | "projectId"
>;

type ProjectPhaseFilters = {
  projectId?: number;
  startAfter?: Date;
  endBefore?: Date;
  activeOnly?: boolean;
  sortOrder?: "asc" | "desc";
  page?: number;
  pageSize?: number;
};

const projectPhaseInclude = {
  project: {
    select: {
      id: true,
      name: true,
      status: true,
      startDate: true,
      endDate: true,
    },
  },
} satisfies Prisma.ProjectPhaseInclude;

type ProjectPhaseListItem = Prisma.ProjectPhaseGetPayload<{
  include: typeof projectPhaseInclude;
}>;

async function findProjectPhases(
  filters: ProjectPhaseFilters = {},
): Promise<PaginatedResult<ProjectPhaseListItem>> {
  const where: Prisma.ProjectPhaseWhereInput = {
    ...(filters.projectId ? { projectId: filters.projectId } : {}),
  };

  const andConditions: Prisma.ProjectPhaseWhereInput[] = [];

  if (filters.startAfter) {
    andConditions.push({ startDate: { gte: filters.startAfter } });
  }

  if (filters.endBefore) {
    andConditions.push({ endDate: { lte: filters.endBefore } });
  }

  if (filters.activeOnly) {
    const now = new Date();
    andConditions.push({ startDate: { lte: now } }, { endDate: { gte: now } });
  }

  if (andConditions.length) {
    where.AND = andConditions;
  }

  const pagination = resolvePagination(filters);
  const skip = (pagination.page - 1) * pagination.pageSize;
  const orderBy: Prisma.ProjectPhaseOrderByWithRelationInput = {
    startDate: filters.sortOrder ?? "asc",
  };

  const [items, total] = await prisma.$transaction([
    prisma.projectPhase.findMany({
      where,
      include: projectPhaseInclude,
      orderBy,
      skip,
      take: pagination.pageSize,
    }),
    prisma.projectPhase.count({ where }),
  ]);

  return buildPaginatedResult(items, total, pagination);
}

async function findProjectPhase(
  where: Prisma.ProjectPhaseWhereUniqueInput,
) {
  return await prisma.projectPhase.findUnique({
    where,
    include: projectPhaseInclude,
  });
}

async function createProjectPhase(data: NewProjectPhaseInput) {
  return await prisma.projectPhase.create({
    data,
    include: projectPhaseInclude,
  });
}

async function editProjectPhase(
  id: number,
  data: Prisma.ProjectPhaseUncheckedUpdateInput,
) {
  return await prisma.projectPhase.update({
    where: { id },
    data,
    include: projectPhaseInclude,
  });
}

async function deleteProjectPhase(id: number) {
  return await prisma.projectPhase.delete({
    where: { id },
  });
}

export {
  findProjectPhases,
  findProjectPhase,
  createProjectPhase,
  editProjectPhase,
  deleteProjectPhase,
};
