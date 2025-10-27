import { Router } from "express";
import {
  getAllProjects,
  getProjectById,
  insertProject,
  updateProject,
  deleteProjectById,
} from "../controllers/project.controller";
import requireRole from "../middleware/requireRole";
import { RoleType } from "../generated/prisma";

const router = Router();

router.use(requireRole([RoleType.ADMIN, RoleType.PROJECT_MANAGER]));
router.get("/", getAllProjects);
router.get("/:id", getProjectById);
router.post("/", insertProject);
router.patch("/:id", updateProject);
router.delete("/:id", deleteProjectById);

export default router;
