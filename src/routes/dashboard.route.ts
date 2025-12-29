import Router from "express";
import {
  getAllDeveloperDashboards,
  getDailyCadence,
  getDeveloperDashboard,
  getProjectManagerDashboard,
} from "../controllers/dashboard.controller";
import requireRole from "../middleware/requireRole";
import { RoleType } from "@prisma/client";

const router = Router();

router.get("/developer", requireRole(RoleType.DEVELOPER), getDeveloperDashboard);

router.use(requireRole(RoleType.PROJECT_MANAGER));
router.get("/project-manager", getProjectManagerDashboard);
router.get("/project-manager/dev-stat", getAllDeveloperDashboards);
router.get("/project-manager/daily-cadence/:projectId", getDailyCadence);

export default router;
