import { describe, expect, it, vi } from "vitest";
import jwt from "jsonwebtoken";
import {
  accessTokenExpiresInSeconds,
  refreshTokenExpiresInSeconds,
  generateRefreshToken,
  getRefreshTokenExpiryDate,
  getRefreshTokenCookieOptions,
  hashPassword,
  hashToken,
  signJwt,
  verifyPassword,
} from "../../src/utils/auth";
import env from "../../src/config/env";

describe("auth utils", () => {
  it("hashes and verifies passwords", async () => {
    const password = "S3cure!";
    const hash = await hashPassword(password);

    expect(hash).not.toBe(password);
    await expect(verifyPassword(password, hash)).resolves.toBe(true);
    await expect(verifyPassword("wrong", hash)).resolves.toBe(false);
  });

  it("signs JWTs with the configured secret", () => {
    const token = signJwt({ sub: "123", role: "ADMIN" });
    const payload = jwt.verify(token, env.jwtSecret) as jwt.JwtPayload;

    expect(payload.sub).toBe("123");
    expect(payload.role).toBe("ADMIN");
  });

  it("computes default expiry seconds", () => {
    const toSeconds = (value: string | number) => {
      if (typeof value === "number") return value;
      const match = value
        .trim()
        .toLowerCase()
        .match(/^(\d+)([smhd])?$/);
      if (!match) throw new Error("Invalid duration");
      const amount = Number(match[1]);
      const unit = match[2] ?? "s";
      const multipliers: Record<string, number> = {
        s: 1,
        m: 60,
        h: 60 * 60,
        d: 60 * 60 * 24,
      };
      return amount * multipliers[unit];
    };

    expect(accessTokenExpiresInSeconds).toBe(toSeconds(env.jwtExpiresIn));
    expect(refreshTokenExpiresInSeconds).toBe(toSeconds(env.refreshTokenExpiresIn));
  });

  it("generates refresh tokens with expected length", () => {
    const tokenA = generateRefreshToken();
    const tokenB = generateRefreshToken();

    expect(tokenA).toHaveLength(96);
    expect(tokenA).not.toBe(tokenB);
  });

  it("hashes tokens deterministically", () => {
    const hashA = hashToken("token");
    const hashB = hashToken("token");
    const hashC = hashToken("different");

    expect(hashA).toHaveLength(64);
    expect(hashA).toBe(hashB);
    expect(hashA).not.toBe(hashC);
  });

  it("computes refresh token expiry dates", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-01-01T00:00:00.000Z"));

    const expiry = getRefreshTokenExpiryDate();
    const expected = new Date(Date.now() + refreshTokenExpiresInSeconds * 1000);

    expect(expiry.getTime()).toBe(expected.getTime());
    vi.useRealTimers();
  });

  it("builds refresh token cookie options", () => {
    const options = getRefreshTokenCookieOptions();

    expect(options.httpOnly).toBe(true);
    expect(options.sameSite).toBe("strict");
    expect(options.maxAge).toBe(refreshTokenExpiresInSeconds * 1000);
  });
});

it("sets secure cookies when NODE_ENV is production", async () => {
  const previous = process.env.NODE_ENV;
  process.env.NODE_ENV = "production";
  vi.resetModules();

  const auth = await import("../../src/utils/auth");
  expect(auth.getRefreshTokenCookieOptions().secure).toBe(true);

  process.env.NODE_ENV = previous;
});
