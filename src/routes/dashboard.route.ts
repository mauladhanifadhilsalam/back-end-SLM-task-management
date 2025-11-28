import Router from "express";
import { getDeveloperDashboard } from "../controllers/dashboard.controller";
import requireRole from "../middleware/requireRole";
import { RoleType } from "@prisma/client";

const router = Router();

router.get("/developer", requireRole(RoleType.DEVELOPER), getDeveloperDashboard);

export default router;
