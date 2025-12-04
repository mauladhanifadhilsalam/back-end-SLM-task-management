import Router from "express";
import {
    getAllDeveloperDashboards,
  getDeveloperDashboard,
  getProjectManagerDashboard,
} from "../controllers/dashboard.controller";
import requireRole from "../middleware/requireRole";
import { RoleType } from "@prisma/client";

const router = Router();

router.get(
  "/developer",
  requireRole(RoleType.DEVELOPER),
  getDeveloperDashboard,
);
router.get(
  "/project-manager",
  requireRole(RoleType.PROJECT_MANAGER),
  getProjectManagerDashboard,
);
router.get(
  "/project-manager/dev-stat",
  requireRole(RoleType.PROJECT_MANAGER),
  getAllDeveloperDashboards,
);

export default router;
