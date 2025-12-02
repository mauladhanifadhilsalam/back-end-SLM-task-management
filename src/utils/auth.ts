import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import type { CookieOptions } from "express";
import env from "../config/env";

export async function hashPassword(plain: string) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(plain, salt);
}

export async function verifyPassword(plain: string, hash: string) {
  return bcrypt.compare(plain, hash);
}

const expiresInSeconds =
  typeof env.jwtExpiresIn === "string"
    ? Number(env.jwtExpiresIn.replace(/\D/g, "")) * 3600
    : env.jwtExpiresIn;

export function signJwt(payload: object) {
  return jwt.sign(payload, env.jwtSecret, { expiresIn: expiresInSeconds });
}

export function generateRefreshToken() {
  return crypto.randomBytes(48).toString("hex");
}

export function hashToken(token: string) {
  return crypto.createHash("sha256").update(token).digest("hex");
}

export function getRefreshTokenExpiryDate() {
  return new Date(Date.now() + env.refreshTokenExpiresIn * 1000);
}

export function getRefreshTokenCookieOptions(
  overrides?: Partial<CookieOptions>,
): CookieOptions {
  const base: CookieOptions = {
    httpOnly: true,
    secure: env.nodeEnv === "production",
    sameSite: "strict",
    path: "/",
    maxAge: env.refreshTokenExpiresIn * 1000,
  };
  return { ...base, ...overrides };
}
