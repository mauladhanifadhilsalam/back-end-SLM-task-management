import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import env from "../config/env";
import { RoleType } from "@prisma/client";

/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace Express {
    interface Request {
      user?: { sub: string; role: RoleType };
    }
  }
}
/* eslint-enable @typescript-eslint/no-namespace */

function requireAuth(req: Request, res: Response, next: NextFunction) {
  const header = req.header("Authorization") || "";
  const [scheme, token] = header.split(" ");
  if (scheme !== "Bearer" || !token) {
    return res.status(401).json({ message: "Missing or invalid Authorization header" });
  }
  try {
    const decoded = jwt.verify(token, env.jwtSecret) as JwtPayload & {
      sub: string;
      role: RoleType;
    };
    const role = decoded.role as RoleType;
    const isValidRole = role ? (Object.values(RoleType) as string[]).includes(role) : false;

    if (!isValidRole) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    req.user = { sub: decoded.sub, role };
    next();
  } catch {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}

export default requireAuth;
