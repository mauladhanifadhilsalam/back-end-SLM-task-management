import prisma from "../db/prisma";
import { User, Prisma } from "../generated/prisma";

async function findUser(email: Prisma.UserWhereUniqueInput) {
  return await prisma.user.findUnique({ where: email });
}

export { findUser };
