import { Request, Response } from "express";
import { RoleType } from "../../generated/prisma";

type Viewer = { id: number; role: RoleType };

type PermissionRule<State> = (ctx: { viewer: Viewer; state: State }) => boolean;

function getViewer(req: Request): Viewer | null {
  if (!req.user) {
    return null;
  }

  const id = Number(req.user.sub);
  if (!Number.isInteger(id) || id <= 0) {
    return null;
  }

  return { id, role: req.user.role };
}

function requireViewer(req: Request, res: Response): Viewer | null {
  const viewer = getViewer(req);
  if (!viewer) {
    res.status(401).json({ message: "Authentication required" });
    return null;
  }

  return viewer;
}

function isAdmin(viewer: Viewer) {
  return viewer.role === RoleType.ADMIN;
}

function isDeveloper(viewer: Viewer) {
  return viewer.role === RoleType.DEVELOPER;
}

function isProjectManager(viewer: Viewer) {
  return viewer.role === RoleType.PROJECT_MANAGER;
}

function runRules<State>(
  rules: PermissionRule<State>[],
  viewer: Viewer,
  state: State,
) {
  if (!rules.length) {
    return false;
  }

  return rules.some((rule) => rule({ viewer, state }));
}

export {
  Viewer,
  PermissionRule,
  getViewer,
  requireViewer,
  isAdmin,
  isDeveloper,
  isProjectManager,
  runRules,
};
