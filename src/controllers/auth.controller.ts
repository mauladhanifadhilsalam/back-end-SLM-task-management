import { Request, Response } from "express";
import {
  verifyPassword,
  signJwt,
  generateRefreshToken,
  getRefreshTokenExpiryDate,
  getRefreshTokenCookieOptions,
  accessTokenExpiresInSeconds,
} from "../utils/auth";
import {
  findUserByEmail,
  findUserById,
  upsertRefreshToken,
  findRefreshTokenWithUser,
  deleteRefreshTokenByUserId,
} from "../services/auth.service";
import env from "../config/env";
import { loginSchema } from "../schemas/auth.schema";
import { ActivityTargetType } from "@prisma/client";
import { recordActivity, toActivityDetails } from "../services/activity-log.service";

async function login(req: Request, res: Response) {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error.format());
  const { email, password } = parsed.data;

  const user = await findUserByEmail({ email });
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const ok = await verifyPassword(password, user.passwordHash);
  if (!ok) return res.status(401).json({ message: "Invalid credentials" });

  const token = signJwt({ sub: user.id, role: user.role });
  const refreshToken = generateRefreshToken();
  await upsertRefreshToken(user.id, refreshToken, getRefreshTokenExpiryDate());
  setRefreshTokenCookie(res, refreshToken);
  await recordActivity({
    userId: user.id,
    action: "AUTH_LOGIN",
    targetType: ActivityTargetType.USER,
    targetId: user.id,
    details: toActivityDetails({ email }),
  });
  res.json(buildAuthResponse({ token, role: user.role }));
}

async function getUser(req: Request, res: Response) {
  const user = await findUserById(Number(req.user!.sub));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json({
    id: user.id,
    fullName: user.fullName,
    email: user.email,
    role: user.role,
    projectRole: user.projectRole ?? null,
    isActive: user.isActive,
  });
}

async function refreshAccessToken(req: Request, res: Response) {
  const tokenFromRequest = extractRefreshToken(req);
  if (!tokenFromRequest) {
    return res.status(401).json({ message: "Refresh token missing" });
  }

  const stored = await findRefreshTokenWithUser(tokenFromRequest);
  if (
    !stored ||
    stored.revokedAt ||
    stored.expiresAt.getTime() < Date.now() ||
    !stored.user ||
    !stored.user.isActive
  ) {
    clearRefreshTokenCookie(res);
    return res.status(401).json({ message: "Invalid or expired refresh token" });
  }

  const accessToken = signJwt({
    sub: stored.user.id,
    role: stored.user.role,
  });

  const rotatedRefresh = generateRefreshToken();
  await upsertRefreshToken(stored.user.id, rotatedRefresh, getRefreshTokenExpiryDate());
  setRefreshTokenCookie(res, rotatedRefresh);

  res.json(buildAuthResponse({ token: accessToken, role: stored.user.role }));
}

async function logout(req: Request, res: Response) {
  const tokenFromRequest = extractRefreshToken(req);

  if (tokenFromRequest) {
    const existing = await findRefreshTokenWithUser(tokenFromRequest);
    if (existing) {
      await deleteRefreshTokenByUserId(existing.userId);
    }
  }

  clearRefreshTokenCookie(res);
  return res.status(204).send();
}

function extractRefreshToken(req: Request) {
  const cookieToken = req.cookies?.[env.refreshTokenCookieName];
  if (typeof cookieToken === "string" && cookieToken.length > 0) {
    return cookieToken;
  }

  if (typeof req.body?.refreshToken === "string") {
    return req.body.refreshToken;
  }

  return req.header("x-refresh-token") || null;
}

function setRefreshTokenCookie(res: Response, token: string) {
  res.cookie(env.refreshTokenCookieName, token, getRefreshTokenCookieOptions());
}

function clearRefreshTokenCookie(res: Response) {
  res.clearCookie(env.refreshTokenCookieName, getRefreshTokenCookieOptions({ maxAge: 0 }));
}

function buildAuthResponse({ token, role }: { token: string; role: string }) {
  return {
    token,
    token_type: "Bearer",
    expires_in: accessTokenExpiresInSeconds,
    role,
  };
}

export { login, getUser, refreshAccessToken, logout };
