import { Request, Response, NextFunction } from "express";
import { RoleType } from "@prisma/client";

type RequireRole = (
  roles: RoleType | RoleType[],
) => (req: Request, res: Response, next: NextFunction) => void;

const requireRole: RequireRole = (roles) => {
  const allowedRoles = Array.isArray(roles) ? roles : [roles];

  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: "Authentication required" });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: "Insufficient permissions" });
    }

    next();
  };
};

export default requireRole;
