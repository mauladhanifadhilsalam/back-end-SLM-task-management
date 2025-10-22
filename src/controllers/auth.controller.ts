import { Request, Response } from "express";
import { z } from "zod";
import { verifyPassword, signJwt } from "../utils/auth";
import { findUser } from "../services/auth.service";
import env from "../utils/env";

const loginSchema = z.object({
  email: z.email(),
  password: z.string(),
});

async function login(req: Request, res: Response) {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error.format());
  const { email, password } = parsed.data;

  const user = await findUser({ email });
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const ok = await verifyPassword(password, user.passwordHash);
  if (!ok) return res.status(401).json({ message: "Invalid credentials" });

  const token = signJwt({ sub: user.id, role: user.role });
  res.json({
    token,
    token_type: "Bearer",
    expires_in: env.jwtExpiresIn,
    role: user.role,
  });
}

export { login };
