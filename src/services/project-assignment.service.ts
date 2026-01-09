import prisma from "../db/prisma";
import { ProjectAssignment, Prisma } from "@prisma/client";
import { buildPaginatedResult, resolvePagination, PaginatedResult } from "../utils/pagination";
import { resolveSorting } from "../utils/sorting";
import z from "zod";
import { projectAssignmentQuerySchema } from "../schemas/project-assignment.schema";

type ProjectAssignmentFilters = z.infer<typeof projectAssignmentQuerySchema>;
type ProjectAssignmentSortBy = keyof ProjectAssignment;

type NewProjectAssignmentInput = {
  projectId: number;
  userId: number;
};

const projectAssignmentInclude = {
  user: {
    select: {
      id: true,
      fullName: true,
      email: true,
      role: true,
      projectRole: true,
    },
  },
  project: {
    select: {
      id: true,
      name: true,
      status: true,
      startDate: true,
      endDate: true,
    },
  },
} satisfies Prisma.ProjectAssignmentInclude;

type ProjectAssignmentListItem = Prisma.ProjectAssignmentGetPayload<{
  include: typeof projectAssignmentInclude;
}>;

function buildProjectAssignmentWhere(
  filters: ProjectAssignmentFilters = {},
): Prisma.ProjectAssignmentWhereInput {
  const { projectId, userId, assignedFrom, assignedTo } = filters;

  const where: Prisma.ProjectAssignmentWhereInput = {
    ...(typeof projectId === "number" ? { projectId } : {}),
    ...(typeof userId === "number" ? { userId } : {}),
  };

  if (assignedFrom || assignedTo) {
    where.assignedAt = {
      ...(assignedFrom ? { gte: assignedFrom } : {}),
      ...(assignedTo ? { lte: assignedTo } : {}),
    };
  }

  return where;
}

async function findProjectAssignments(
  filters: ProjectAssignmentFilters = {},
): Promise<PaginatedResult<ProjectAssignmentListItem>> {
  const where = buildProjectAssignmentWhere(filters);

  const pagination = resolvePagination(filters);
  const orderBy = resolveSorting<ProjectAssignmentSortBy>(filters, "assignedAt", "desc");
  const skip = (pagination.page - 1) * pagination.pageSize;

  const [items, total] = await prisma.$transaction([
    prisma.projectAssignment.findMany({
      where,
      include: projectAssignmentInclude,
      orderBy,
      skip,
      take: pagination.pageSize,
    }),
    prisma.projectAssignment.count({ where }),
  ]);

  return buildPaginatedResult(items, total, pagination);
}

async function findProjectAssignment(where: Prisma.ProjectAssignmentWhereUniqueInput) {
  return prisma.projectAssignment.findUnique({
    where,
    include: projectAssignmentInclude,
  });
}

async function createProjectAssignment(data: NewProjectAssignmentInput) {
  return prisma.projectAssignment.create({
    data,
    include: projectAssignmentInclude,
  });
}

async function deleteProjectAssignment(id: number) {
  return prisma.projectAssignment.delete({
    where: { id },
  });
}

export {
  findProjectAssignments,
  findProjectAssignment,
  createProjectAssignment,
  deleteProjectAssignment,
};
export type { ProjectAssignmentFilters, NewProjectAssignmentInput };
