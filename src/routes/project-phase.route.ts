import { Router } from "express";
import {
  getAllProjectPhases,
  getProjectPhaseById,
  insertProjectPhase,
  updateProjectPhase,
  deleteProjectPhaseById,
} from "../controllers/project-phase.controller";

const router = Router();

router.get("/", getAllProjectPhases);
router.get("/:id", getProjectPhaseById);
router.post("/", insertProjectPhase);
router.patch("/:id", updateProjectPhase);
router.delete("/:id", deleteProjectPhaseById);

export default router;
