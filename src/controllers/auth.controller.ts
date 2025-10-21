import { Request, Response } from "express";
import { z } from "zod";
import { hashPassword, verifyPassword, signJwt } from "../utils/auth";
import { createUser, findUser } from "../services/auth.service";
import env from "../utils/env";

const registerSchema = z.object({
  email: z.email(),
  fullName: z.string(),
  role: z.enum(["PROJECT_MANAGER", "DEVELOPER"]),
  password: z.string().min(8),
});

const loginSchema = z.object({
  email: z.email(),
  password: z.string(),
});

async function register(req: Request, res: Response) {
  const parsed = registerSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error.format());
  const { fullName, role, email, password } = parsed.data;

  const existing = await findUser({ email });
  if (existing) return res.status(409).json({ message: "Email already used" });

  const passwordHash = await hashPassword(password);
  const user = await createUser({ fullName, role, email, passwordHash });

  res.status(201).json(user);
}

async function login(req: Request, res: Response) {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error.format());
  const { email, password } = parsed.data;

  const user = await findUser({ email });
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const ok = await verifyPassword(password, user.passwordHash);
  if (!ok) return res.status(401).json({ message: "Invalid credentials" });

  const token = signJwt({ sub: user.id, role: user.role });
  res.json({ token, token_type: "Bearer", expires_in: env.jwtExpiresIn });
}

export { register, login };
