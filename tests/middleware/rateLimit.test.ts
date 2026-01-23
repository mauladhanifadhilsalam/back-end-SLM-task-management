import { describe, expect, it, vi } from "vitest";

vi.mock("express-rate-limit", () => {
  const rateLimit = vi.fn((options) => ({ options }));
  return {
    default: rateLimit,
    ipKeyGenerator: (ip: string) => `ip:${ip}`,
  };
});

import type { Request } from "express";
import env from "../../src/config/env";
import {
  publicRateLimiter,
  loginRateLimiter,
  authenticatedRateLimiter,
} from "../../src/middleware/rateLimit";

describe("rateLimit middleware", () => {
  it("configures public limiter from env", () => {
    expect(publicRateLimiter.options.windowMs).toBe(env.rateLimitPublicWindowMs);
    expect(publicRateLimiter.options.max).toBe(env.rateLimitPublicMax);
  });

  it("configures login limiter from env", () => {
    expect(loginRateLimiter.options.windowMs).toBe(env.rateLimitLoginWindowMs);
    expect(loginRateLimiter.options.max).toBe(env.rateLimitLoginMax);
  });

  it("configures authenticated limiter from env", () => {
    expect(authenticatedRateLimiter.options.windowMs).toBe(env.rateLimitAuthWindowMs);
    expect(authenticatedRateLimiter.options.max).toBe(env.rateLimitAuthMax);
  });

  it("skips when IP is allowlisted", () => {
    const allowlisted = env.rateLimitAllowlist[0] ?? "127.0.0.1";
    const req = { ip: allowlisted, socket: { remoteAddress: allowlisted } } as Request;
    expect(publicRateLimiter.options.skip(req)).toBe(true);
  });
});
