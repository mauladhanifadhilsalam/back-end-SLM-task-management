import prisma from "../db/prisma";
import { Prisma, RoleType, User } from "@prisma/client";
import { buildPaginatedResult, resolvePagination, PaginatedResult } from "../utils/pagination";
import z from "zod";
import { userQuerySchema } from "../schemas/user.schema";
import { resolveSorting } from "../utils/sorting";

type NewUserInput = Pick<Prisma.UserCreateInput, "fullName" | "role" | "email" | "passwordHash"> & {
  projectRole?: string | null;
};

type ManageableRole = Extract<RoleType, "PROJECT_MANAGER" | "DEVELOPER">;

const manageableRoles: ManageableRole[] = ["PROJECT_MANAGER", "DEVELOPER"];

type UserFilters = z.infer<typeof userQuerySchema>;

type UserSortBy = keyof Omit<User, "passwordHash">;

function buildUserWhere(filters: UserFilters = {}): Prisma.UserWhereInput {
  const where: Prisma.UserWhereInput = {
    ...(filters.role
      ? { role: filters.role }
      : {
          role: {
            in: manageableRoles,
          },
        }),
    ...(typeof filters.isActive === "boolean" ? { isActive: filters.isActive } : {}),
  };

  if (filters.search) {
    where.OR = [
      {
        fullName: {
          contains: filters.search,
          mode: "insensitive",
        },
      },
      {
        email: {
          contains: filters.search,
          mode: "insensitive",
        },
      },
    ];
  }

  return where;
}

async function findUsers(filters: UserFilters = {}): Promise<PaginatedResult<User>> {
  const pagination = resolvePagination(filters);
  const where = buildUserWhere(filters);
  const orderBy = resolveSorting<UserSortBy>(filters, "createdAt", "desc");
  const skip = (pagination.page - 1) * pagination.pageSize;

  const [items, total] = await prisma.$transaction([
    prisma.user.findMany({
      where,
      orderBy,
      skip,
      take: pagination.pageSize,
    }),
    prisma.user.count({ where }),
  ]);

  return buildPaginatedResult(items, total, pagination);
}

async function findUser(where: Prisma.UserWhereUniqueInput) {
  return await prisma.user.findUnique({
    where: {
      ...where,
      role: {
        in: manageableRoles,
      },
    },
  });
}

async function findAnyUser(id: number) {
  return await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      fullName: true,
      email: true,
      role: true,
      isActive: true,
    },
  });
}

async function findActiveUserByEmail(email: string) {
  return await prisma.user.findFirst({
    where: {
      email: {
        equals: email,
        mode: "insensitive",
      },
      isActive: true,
    },
    select: {
      id: true,
      fullName: true,
      email: true,
      role: true,
      isActive: true,
    },
  });
}

async function findActiveDevelopersByIds(ids: number[]) {
  if (!ids.length) return [];

  return await prisma.user.findMany({
    where: {
      id: { in: ids },
      role: RoleType.DEVELOPER,
      isActive: true,
    },
    select: {
      id: true,
      fullName: true,
      email: true,
      role: true,
      isActive: true,
    },
  });
}

async function createUser({ fullName, role, email, passwordHash, projectRole }: NewUserInput) {
  const projectRoleRef =
    projectRole === undefined || projectRole === null
      ? undefined
      : { connect: { code: projectRole } };

  return await prisma.user.create({
    data: {
      fullName,
      role,
      email,
      passwordHash,
      ...(projectRoleRef ? { projectRoleRef } : {}),
    },
    select: {
      id: true,
      fullName: true,
      email: true,
      createdAt: true,
      role: true,
      projectRole: true,
    },
  });
}

async function editUser(id: number, data: Prisma.UserUpdateInput) {
  return await prisma.user.update({
    where: { id },
    data,
  });
}

async function deleteUser(id: number) {
  return await prisma.user.delete({ where: { id } });
}

async function editPassword(id: number, passwordHash: string) {
  return await prisma.user.update({
    where: { id },
    data: { passwordHash },
  });
}

export {
  findUsers,
  findUser,
  createUser,
  editUser,
  deleteUser,
  editPassword,
  findAnyUser,
  findActiveUserByEmail,
  findActiveDevelopersByIds,
  UserSortBy,
};
