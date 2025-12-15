import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import env from "../config/env";
import { RoleType } from "@prisma/client";

declare global {
  namespace Express {
    interface Request {
      user?: { sub: string; role: RoleType };
    }
  }
}

function requireAuth(req: Request, res: Response, next: NextFunction) {
  const header = req.header("Authorization") || "";
  const [scheme, token] = header.split(" ");
  if (scheme !== "Bearer" || !token) {
    return res.status(401).json({ message: "Missing or invalid Authorization header" });
  }
  try {
    const decoded = jwt.verify(token, env.jwtSecret) as any;
    const role = decoded.role as RoleType;
    const isValidRole = role ? (Object.values(RoleType) as string[]).includes(role) : false;

    if (!isValidRole) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    req.user = { sub: decoded.sub, role };
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}

export default requireAuth;
