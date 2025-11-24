import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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
