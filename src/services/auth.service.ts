import prisma from "../db/prisma";
import { User, Prisma } from "../generated/prisma";

type NewUserInput = Pick<
  Prisma.UserCreateInput,
  "fullName" | "role" | "email" | "passwordHash"
>;

async function createUser({
  fullName,
  role,
  email,
  passwordHash,
}: NewUserInput) {
  return await prisma.user.create({
    data: { fullName, role, email, passwordHash },
    select: { id: true, email: true, createdAt: true, role: true },
  });
}

async function findUser(email: Prisma.UserWhereUniqueInput) {
  return await prisma.user.findUnique({ where: email });
}

export { createUser, findUser };
