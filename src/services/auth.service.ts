import prisma from "../db/prisma";
import { Prisma } from "../generated/prisma";

async function findUserByEmail(email: Prisma.UserWhereUniqueInput) {
  return await prisma.user.findUnique({ where: email });
}

async function findUserById(id: number) {
  return await prisma.user.findUnique({ where: { id } });
}

export { findUserByEmail, findUserById };
