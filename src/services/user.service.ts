import prisma from "../db/prisma";
import { Prisma, RoleType } from "../generated/prisma";

type NewUserInput = Pick<
  Prisma.UserCreateInput,
  "fullName" | "role" | "email" | "passwordHash"
>;

async function findUsers() {
  return await prisma.user.findMany({
    where: {
      role: {
        in: [RoleType.PROJECT_MANAGER, RoleType.DEVELOPER],
      },
    },
  });
}

async function findUser(where: Prisma.UserWhereUniqueInput) {
  return await prisma.user.findUnique({
    where: {
      ...where,
      role: {
        in: [RoleType.PROJECT_MANAGER, RoleType.DEVELOPER],
      },
    },
  });
}

async function createUser({
  fullName,
  role,
  email,
  passwordHash,
}: NewUserInput) {
  return await prisma.user.create({
    data: { fullName, role, email, passwordHash },
    select: {
      id: true,
      fullName: true,
      email: true,
      createdAt: true,
      role: true,
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

export { findUsers, findUser, createUser, editUser, deleteUser, editPassword };
