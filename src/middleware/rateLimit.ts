import { Request } from "express";
import rateLimit from "express-rate-limit";
import env from "../config/env";

const ipKeyGenerator = (req: Request) => req.ip || req.socket.remoteAddress || "unknown";
const userKeyGenerator = (req: Request) =>
  req.user?.sub ? `user:${req.user.sub}` : `ip:${ipKeyGenerator(req)}`;

const baseRateLimitOptions = {
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many requests, please try again later." },
  skip: () => env.nodeEnv === "test",
};

export const publicRateLimiter = rateLimit({
  ...baseRateLimitOptions,
  windowMs: env.rateLimitPublicWindowMs,
  max: env.rateLimitPublicMax,
  keyGenerator: ipKeyGenerator,
});

export const loginRateLimiter = rateLimit({
  ...baseRateLimitOptions,
  windowMs: env.rateLimitLoginWindowMs,
  max: env.rateLimitLoginMax,
  keyGenerator: ipKeyGenerator,
});

export const authenticatedRateLimiter = rateLimit({
  ...baseRateLimitOptions,
  windowMs: env.rateLimitAuthWindowMs,
  max: env.rateLimitAuthMax,
  keyGenerator: userKeyGenerator,
});
