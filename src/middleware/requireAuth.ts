import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import env from "../config/env";
import { RoleType } from "@prisma/client";

declare module "express-serve-static-core" {
  interface Request {
    user?: { sub: string; role: RoleType };
  }
}

function requireAuth(req: Request, res: Response, next: NextFunction) {
  const header = req.header("Authorization") || "";
  const [scheme, token] = header.split(" ");
  if (scheme !== "Bearer" || !token) {
    return res.status(401).json({ message: "Missing or invalid Authorization header" });
  }
  try {
    const decoded = jwt.verify(token, env.jwtSecret);
    if (typeof decoded === "string") {
      return res.status(401).json({ message: "Invalid or expired token" });
    }
    const { role, sub } = decoded as JwtPayload;
    if (typeof sub !== "string") {
      return res.status(401).json({ message: "Invalid or expired token" });
    }
    const roleValue = role as RoleType | undefined;
    const isValidRole = roleValue
      ? (Object.values(RoleType) as string[]).includes(roleValue)
      : false;

    if (!isValidRole) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    req.user = { sub, role: roleValue };
    next();
  } catch {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}

export default requireAuth;
