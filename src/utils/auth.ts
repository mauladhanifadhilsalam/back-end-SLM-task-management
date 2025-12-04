import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import type { CookieOptions } from "express";
import type { StringValue } from "ms";
import env from "../config/env";

export async function hashPassword(plain: string) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(plain, salt);
}

export async function verifyPassword(plain: string, hash: string) {
  return bcrypt.compare(plain, hash);
}

const durationMultipliers: Record<string, number> = {
  s: 1,
  m: 60,
  h: 60 * 60,
  d: 60 * 60 * 24,
};

function normalizeDuration(
  value: string | number,
  label: string,
): { raw: number | StringValue; seconds: number } {
  if (typeof value === "number") {
    return { raw: value, seconds: value };
  }
  const trimmed = value.trim();
  const match = trimmed.toLowerCase().match(/^(\d+)([smhd])?$/);
  if (!match) {
    throw new Error(
      `Invalid ${label} value "${value}". Use seconds or suffix s/m/h/d.`,
    );
  }
  const amount = Number(match[1]);
  const unit = (match[2] ?? "s") as keyof typeof durationMultipliers;
  return {
    raw: trimmed as StringValue,
    seconds: amount * durationMultipliers[unit],
  };
}

const accessTokenExpiry = normalizeDuration(env.jwtExpiresIn, "JWT_EXPIRES_IN");
const refreshTokenExpiry = normalizeDuration(env.refreshTokenExpiresIn, "REFRESH_TOKEN_EXPIRES_IN");

export const accessTokenExpiresInSeconds = accessTokenExpiry.seconds;
export const refreshTokenExpiresInSeconds = refreshTokenExpiry.seconds;

export function signJwt(payload: object) {
  return jwt.sign(payload, env.jwtSecret, { expiresIn: accessTokenExpiry.raw });
}

export function generateRefreshToken() {
  return crypto.randomBytes(48).toString("hex");
}

export function hashToken(token: string) {
  return crypto.createHash("sha256").update(token).digest("hex");
}

export function getRefreshTokenExpiryDate() {
  return new Date(Date.now() + refreshTokenExpiresInSeconds * 1000);
}

export function getRefreshTokenCookieOptions(
  overrides?: Partial<CookieOptions>,
): CookieOptions {
  const base: CookieOptions = {
    httpOnly: true,
    secure: env.nodeEnv === "production",
    sameSite: "strict",
    path: "/",
    maxAge: refreshTokenExpiresInSeconds * 1000,
  };
  return { ...base, ...overrides };
}
