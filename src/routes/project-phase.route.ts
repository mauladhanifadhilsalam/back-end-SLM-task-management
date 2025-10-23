import { Router } from "express";
import {
  getAllProjectPhases,
  getProjectPhaseById,
  insertProjectPhase,
  updateProjectPhase,
  deleteProjectPhaseById,
} from "../controllers/project-phase.controller";
import requireRole from "../middleware/requireRole";
import { RoleType } from "../generated/prisma";

const router = Router();

router.use(requireRole([RoleType.ADMIN, RoleType.PROJECT_MANAGER]));
router.get("/", getAllProjectPhases);
router.get("/:id", getProjectPhaseById);
router.post("/", insertProjectPhase);
router.patch("/:id", updateProjectPhase);
router.delete("/:id", deleteProjectPhaseById);

export default router;
