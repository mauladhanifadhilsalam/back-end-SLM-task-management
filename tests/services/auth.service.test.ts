import { describe, expect, it, vi } from "vitest";

const prismaMock = vi.hoisted(() => ({
  user: { findUnique: vi.fn() },
  refreshToken: {
    upsert: vi.fn(),
    findUnique: vi.fn(),
    delete: vi.fn(),
  },
}));

vi.mock("../../src/db/prisma", () => ({
  default: prismaMock,
}));

vi.mock("../../src/utils/auth", () => ({
  hashToken: vi.fn((token: string) => `hash:${token}`),
}));

import {
  findUserByEmail,
  findUserById,
  upsertRefreshToken,
  findRefreshTokenWithUser,
  deleteRefreshTokenByUserId,
} from "../../src/services/auth.service";

const { hashToken } = await import("../../src/utils/auth");

describe("auth.service", () => {
  it("finds user by email", async () => {
    prismaMock.user.findUnique.mockResolvedValue({ id: 1 });

    const result = await findUserByEmail({ email: "user@example.com" });

    expect(prismaMock.user.findUnique).toHaveBeenCalledWith({
      where: { email: "user@example.com" },
    });
    expect(result).toEqual({ id: 1 });
  });

  it("upserts refresh token with hash", async () => {
    prismaMock.refreshToken.upsert.mockResolvedValue({ id: 1 });

    const expires = new Date("2026-01-01T00:00:00.000Z");
    await upsertRefreshToken(5, "token", expires);

    expect(hashToken).toHaveBeenCalledWith("token");
    expect(prismaMock.refreshToken.upsert).toHaveBeenCalledWith({
      where: { userId: 5 },
      update: { tokenHash: "hash:token", expiresAt: expires, revokedAt: null },
      create: { userId: 5, tokenHash: "hash:token", expiresAt: expires },
    });
  });

  it("finds refresh token with user", async () => {
    prismaMock.refreshToken.findUnique.mockResolvedValue({ id: 2 });

    await findRefreshTokenWithUser("abc");

    expect(prismaMock.refreshToken.findUnique).toHaveBeenCalledWith({
      where: { tokenHash: "hash:abc" },
      include: { user: true },
    });
  });

  it("ignores delete errors", async () => {
    prismaMock.refreshToken.delete.mockRejectedValue(new Error("missing"));

    await expect(deleteRefreshTokenByUserId(3)).resolves.toBeUndefined();
  });

  it("finds user by id", async () => {
    prismaMock.user.findUnique.mockResolvedValue({ id: 7 });

    const result = await findUserById(7);

    expect(prismaMock.user.findUnique).toHaveBeenCalledWith({ where: { id: 7 } });
    expect(result).toEqual({ id: 7 });
  });
});
