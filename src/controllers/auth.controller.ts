import { Request, Response } from "express";
import { verifyPassword, signJwt } from "../utils/auth";
import { findUserByEmail, findUserById } from "../services/auth.service";
import env from "../config/env";
import { loginSchema } from "../schemas/auth.schema";
import { ActivityTargetType } from "@prisma/client";
import {
  recordActivity,
  toActivityDetails,
} from "../services/activity-log.service";

async function login(req: Request, res: Response) {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error.format());
  const { email, password } = parsed.data;

  const user = await findUserByEmail({ email });
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const ok = await verifyPassword(password, user.passwordHash);
  if (!ok) return res.status(401).json({ message: "Invalid credentials" });

  const token = signJwt({ sub: user.id, role: user.role });
  await recordActivity({
    userId: user.id,
    action: "AUTH_LOGIN",
    targetType: ActivityTargetType.USER,
    targetId: user.id,
    details: toActivityDetails({ email }),
  });
  res.json({
    token,
    token_type: "Bearer",
    expires_in: env.jwtExpiresIn,
    role: user.role,
  });
}

async function getUser(req: Request, res: Response) {
  const user = await findUserById(Number(req.user!.sub));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json({
    id: user.id,
    fullName: user.fullName,
    email: user.email,
    role: user.role,
    isActive: user.isActive,
  });
}

export { login, getUser };
