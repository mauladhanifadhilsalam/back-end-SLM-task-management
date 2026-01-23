import { describe, expect, it, vi, beforeEach } from "vitest";
import { RoleType } from "@prisma/client";
import type { Request } from "express";
import env from "../../src/config/env";
import { createMockRequest, createMockResponse } from "../helpers/express";

vi.mock("../../src/services/auth.service", () => ({
  findUserByEmail: vi.fn(),
  findUserById: vi.fn(),
  upsertRefreshToken: vi.fn(),
  findRefreshTokenWithUser: vi.fn(),
  deleteRefreshTokenByUserId: vi.fn(),
}));

vi.mock("../../src/utils/auth", () => ({
  verifyPassword: vi.fn(),
  signJwt: vi.fn(),
  generateRefreshToken: vi.fn(),
  getRefreshTokenExpiryDate: vi.fn(),
  getRefreshTokenCookieOptions: vi.fn(() => ({ httpOnly: true, path: "/" })),
  accessTokenExpiresInSeconds: 3600,
}));

vi.mock("../../src/services/activity-log.service", () => ({
  recordActivity: vi.fn(),
  toActivityDetails: vi.fn((input) => input),
}));

import {
  findUserByEmail,
  findUserById,
  upsertRefreshToken,
  findRefreshTokenWithUser,
  deleteRefreshTokenByUserId,
} from "../../src/services/auth.service";
import {
  verifyPassword,
  signJwt,
  generateRefreshToken,
  getRefreshTokenExpiryDate,
} from "../../src/utils/auth";
import { login, getUser, refreshAccessToken, logout } from "../../src/controllers/auth.controller";

const mockedFindUserByEmail = vi.mocked(findUserByEmail);
const mockedFindUserById = vi.mocked(findUserById);
const mockedVerifyPassword = vi.mocked(verifyPassword);
const mockedSignJwt = vi.mocked(signJwt);
const mockedGenerateRefreshToken = vi.mocked(generateRefreshToken);
const mockedGetRefreshTokenExpiryDate = vi.mocked(getRefreshTokenExpiryDate);
const mockedFindRefreshTokenWithUser = vi.mocked(findRefreshTokenWithUser);
const mockedUpsertRefreshToken = vi.mocked(upsertRefreshToken);
const mockedDeleteRefreshTokenByUserId = vi.mocked(deleteRefreshTokenByUserId);

describe("auth.controller", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns 400 when login payload is invalid", async () => {
    const req = createMockRequest({ body: {} });
    const res = createMockResponse();

    await login(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
  });

  it("returns 401 when credentials are invalid", async () => {
    mockedFindUserByEmail.mockResolvedValue(null as never);

    const req = createMockRequest({ body: { email: "user@example.com", password: "bad" } });
    const res = createMockResponse();

    await login(req, res);

    expect(res.status).toHaveBeenCalledWith(401);
  });

  it("logs in and sets refresh token cookie", async () => {
    mockedFindUserByEmail.mockResolvedValue({
      id: 1,
      email: "user@example.com",
      passwordHash: "hash",
      role: RoleType.ADMIN,
    } as never);
    mockedVerifyPassword.mockResolvedValue(true);
    mockedSignJwt.mockReturnValue("token");
    mockedGenerateRefreshToken.mockReturnValue("refresh");
    mockedGetRefreshTokenExpiryDate.mockReturnValue(new Date("2026-01-01T00:00:00.000Z"));

    const req = createMockRequest({ body: { email: "user@example.com", password: "pass" } });
    const res = createMockResponse();

    await login(req, res);

    expect(mockedUpsertRefreshToken).toHaveBeenCalled();
    expect(res.cookie).toHaveBeenCalledWith(
      env.refreshTokenCookieName,
      "refresh",
      expect.any(Object),
    );
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({ token: "token", token_type: "Bearer", role: RoleType.ADMIN }),
    );
  });

  it("returns current user profile", async () => {
    mockedFindUserById.mockResolvedValue({
      id: 2,
      fullName: "User",
      email: "user@example.com",
      role: RoleType.DEVELOPER,
      projectRole: null,
      isActive: true,
    } as never);

    const req = createMockRequest({ user: { sub: "2", role: RoleType.DEVELOPER } });
    const res = createMockResponse();

    await getUser(req, res);

    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({ id: 2, email: "user@example.com", role: RoleType.DEVELOPER }),
    );
  });

  it("returns 401 when refresh token missing", async () => {
    const req = createMockRequest({ body: {}, header: () => null, cookies: {} }) as Request;
    const res = createMockResponse();

    await refreshAccessToken(req, res);

    expect(res.status).toHaveBeenCalledWith(401);
  });

  it("returns 401 when refresh token is invalid", async () => {
    mockedFindRefreshTokenWithUser.mockResolvedValue(null as never);

    const req = createMockRequest({
      body: {},
      header: () => null,
      cookies: { [env.refreshTokenCookieName]: "bad" },
    }) as Request;
    const res = createMockResponse();

    await refreshAccessToken(req, res);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.clearCookie).toHaveBeenCalled();
  });

  it("issues new access token with valid refresh token", async () => {
    mockedFindRefreshTokenWithUser.mockResolvedValue({
      revokedAt: null,
      expiresAt: new Date(Date.now() + 10000),
      user: { id: 3, role: RoleType.PROJECT_MANAGER, isActive: true },
      userId: 3,
    } as never);
    mockedSignJwt.mockReturnValue("new-token");
    mockedGenerateRefreshToken.mockReturnValue("new-refresh");
    mockedGetRefreshTokenExpiryDate.mockReturnValue(new Date(Date.now() + 10000));

    const req = createMockRequest({
      body: {},
      header: () => null,
      cookies: { [env.refreshTokenCookieName]: "good" },
    }) as Request;
    const res = createMockResponse();

    await refreshAccessToken(req, res);

    expect(mockedUpsertRefreshToken).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({ token: "new-token", role: RoleType.PROJECT_MANAGER }),
    );
  });

  it("logs out and clears refresh token", async () => {
    mockedFindRefreshTokenWithUser.mockResolvedValue({ userId: 5 } as never);

    const req = createMockRequest({
      body: {},
      header: () => null,
      cookies: { [env.refreshTokenCookieName]: "refresh" },
    }) as Request;
    const res = createMockResponse();

    await logout(req, res);

    expect(mockedDeleteRefreshTokenByUserId).toHaveBeenCalledWith(5);
    expect(res.clearCookie).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(204);
  });
});
