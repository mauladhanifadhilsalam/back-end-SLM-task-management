import prisma from "../db/prisma";
import { Prisma } from "@prisma/client";

async function findUserByEmail(email: Prisma.UserWhereUniqueInput) {
  return await prisma.user.findUnique({ where: email });
}

async function findUserById(id: number) {
  return await prisma.user.findUnique({ where: { id } });
}

export { findUserByEmail, findUserById };
