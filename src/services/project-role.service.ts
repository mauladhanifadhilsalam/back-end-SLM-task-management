import prisma from "../db/prisma";
import { ProjectRole, Prisma } from "@prisma/client";
import { buildPaginatedResult, resolvePagination, PaginatedResult } from "../utils/pagination";
import { resolveSorting } from "../utils/sorting";
import z from "zod";
import { projectRoleQuerySchema } from "../schemas/project-role.schema";

type ProjectRoleFilters = z.infer<typeof projectRoleQuerySchema>;
type ProjectRoleSortBy = keyof ProjectRole;

async function findProjectRoleByCode(code: string) {
  return prisma.projectRole.findUnique({
    where: { code },
  });
}

async function findProjectRoles(
  filters: ProjectRoleFilters = {},
): Promise<PaginatedResult<ProjectRole>> {
  const where: Prisma.ProjectRoleWhereInput = {};

  if (filters.search) {
    where.OR = [
      {
        code: {
          contains: filters.search,
          mode: "insensitive",
        },
      },
      {
        name: {
          contains: filters.search,
          mode: "insensitive",
        },
      },
    ];
  }

  const pagination = resolvePagination(filters);
  const orderBy = resolveSorting<ProjectRoleSortBy>(filters, "name", "asc");
  const skip = (pagination.page - 1) * pagination.pageSize;

  const [items, total] = await prisma.$transaction([
    prisma.projectRole.findMany({
      where,
      orderBy,
      skip,
      take: pagination.pageSize,
    }),
    prisma.projectRole.count({ where }),
  ]);

  return buildPaginatedResult(items, total, pagination);
}

async function createProjectRole(data: { code: string; name: string }) {
  return prisma.projectRole.create({
    data,
  });
}

async function updateProjectRole(code: string, data: { code?: string; name?: string }) {
  return prisma.projectRole.update({
    where: { code },
    data,
  });
}

async function deleteProjectRole(code: string) {
  return prisma.projectRole.delete({
    where: { code },
  });
}

export {
  findProjectRoleByCode,
  findProjectRoles,
  createProjectRole,
  updateProjectRole,
  deleteProjectRole,
};
