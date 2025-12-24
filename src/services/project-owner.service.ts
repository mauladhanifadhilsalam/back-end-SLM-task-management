import prisma from "../db/prisma";
import { ProjectOwner, Prisma } from "@prisma/client";
import { buildPaginatedResult, resolvePagination, PaginatedResult } from "../utils/pagination";
import { resolveSorting } from "../utils/sorting";
import z from "zod";
import { projectOwnerQuerySchema } from "../schemas/project-owner.schema";

type NewProjectOwnerInput = Pick<
  Prisma.ProjectOwnerCreateInput,
  "name" | "company" | "email" | "phone" | "address"
>;

type ProjectOwnerFilters = z.infer<typeof projectOwnerQuerySchema>;
type ProjectOwnerSortBy = keyof ProjectOwner;

type ProjectOwnerListItem = ProjectOwner;

async function findProjectOwners(
  filters: ProjectOwnerFilters = {},
): Promise<PaginatedResult<ProjectOwnerListItem>> {
  const where: Prisma.ProjectOwnerWhereInput = {
    ...(filters.company
      ? {
          company: {
            contains: filters.company,
            mode: "insensitive",
          },
        }
      : {}),
  };

  if (filters.search) {
    const query = filters.search;
    where.OR = [
      { name: { contains: query, mode: "insensitive" } },
      { email: { contains: query, mode: "insensitive" } },
      { company: { contains: query, mode: "insensitive" } },
      { phone: { contains: query, mode: "insensitive" } },
    ];
  }

  const pagination = resolvePagination(filters);
  const orderBy = resolveSorting<ProjectOwnerSortBy>(filters, "name", "asc");
  const skip = (pagination.page - 1) * pagination.pageSize;

  const [items, total] = await prisma.$transaction([
    prisma.projectOwner.findMany({
      where,
      orderBy,
      skip,
      take: pagination.pageSize,
    }),
    prisma.projectOwner.count({ where }),
  ]);

  return buildPaginatedResult(items, total, pagination);
}

async function findProjectOwner(where: Prisma.ProjectOwnerWhereUniqueInput) {
  return await prisma.projectOwner.findUnique({ where });
}

async function createProjectOwner({ name, company, email, phone, address }: NewProjectOwnerInput) {
  return await prisma.projectOwner.create({
    data: {
      name,
      company,
      email,
      phone,
      address,
    },
    select: {
      id: true,
      name: true,
      company: true,
      createdAt: true,
    },
  });
}

async function editProjectOwner(id: number, data: Prisma.ProjectOwnerUpdateInput) {
  return await prisma.projectOwner.update({
    where: { id },
    data,
  });
}

async function deleteProjectOwner(id: number) {
  return await prisma.projectOwner.delete({ where: { id } });
}

export {
  findProjectOwners,
  findProjectOwner,
  createProjectOwner,
  editProjectOwner,
  deleteProjectOwner,
};
