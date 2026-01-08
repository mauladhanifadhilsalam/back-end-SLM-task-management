import { Request } from "express";
import rateLimit, { ipKeyGenerator as rateLimitIpKeyGenerator } from "express-rate-limit";
import env from "../config/env";

const getRequestIp = (req: Request) => req.ip || req.socket.remoteAddress || "0.0.0.0";
const ipKeyGenerator = (req: Request) => rateLimitIpKeyGenerator(getRequestIp(req));
const userKeyGenerator = (req: Request) =>
  req.user?.sub ? `user:${req.user.sub}` : `ip:${rateLimitIpKeyGenerator(getRequestIp(req))}`;

const allowlist = new Set(env.rateLimitAllowlist);
const allowlistNormalized = new Set(
  env.rateLimitAllowlist.flatMap((ip) => {
    try {
      return [rateLimitIpKeyGenerator(ip)];
    } catch {
      return [];
    }
  }),
);

const isAllowlisted = (req: Request) => {
  const requestIp = getRequestIp(req);
  if (allowlist.has(requestIp)) {
    return true;
  }
  try {
    return allowlistNormalized.has(rateLimitIpKeyGenerator(requestIp));
  } catch {
    return false;
  }
};

const baseRateLimitOptions = {
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many requests, please try again later." },
  skip: (req: Request) => env.nodeEnv === "test" || isAllowlisted(req),
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
