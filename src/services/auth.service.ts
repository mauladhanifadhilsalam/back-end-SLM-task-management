import prisma from "../db/prisma";
import { Prisma } from "@prisma/client";
import { hashToken } from "../utils/auth";

async function findUserByEmail(email: Prisma.UserWhereUniqueInput) {
  return await prisma.user.findUnique({ where: email });
}

async function findUserById(id: number) {
  return await prisma.user.findUnique({ where: { id } });
}

async function upsertRefreshToken(userId: number, token: string, expiresAt: Date) {
  const tokenHash = hashToken(token);
  return prisma.refreshToken.upsert({
    where: { userId },
    update: { tokenHash, expiresAt, revokedAt: null },
    create: { userId, tokenHash, expiresAt },
  });
}

async function findRefreshTokenWithUser(token: string) {
  const tokenHash = hashToken(token);
  return prisma.refreshToken.findUnique({
    where: { tokenHash },
    include: { user: true },
  });
}

async function deleteRefreshTokenByUserId(userId: number) {
  try {
    await prisma.refreshToken.delete({ where: { userId } });
  } catch (_error) {
    // ignore if token already removed
  }
}

export {
  findUserByEmail,
  findUserById,
  upsertRefreshToken,
  findRefreshTokenWithUser,
  deleteRefreshTokenByUserId,
};
