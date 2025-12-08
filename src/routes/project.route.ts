import { Router } from "express";
import {
  getAllProjects,
  getProjectById,
  insertProject,
  updateProject,
  deleteProjectById,
  downloadProjectReport,
} from "../controllers/project.controller";
import requireRole from "../middleware/requireRole";
import { RoleType } from "@prisma/client";

const router = Router();

router.get("/", getAllProjects);
router.get("/report", downloadProjectReport);
router.get("/:id", getProjectById);
router.use(requireRole([RoleType.ADMIN, RoleType.PROJECT_MANAGER]));
router.post("/", insertProject);
router.patch("/:id", updateProject);
router.delete("/:id", deleteProjectById);

export default router;
