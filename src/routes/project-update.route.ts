import { Router } from "express";
import {
  getProjectUpdates,
  getProjectUpdateById,
  insertProjectUpdate,
  updateProjectUpdate,
  deleteProjectUpdateById,
} from "../controllers/project-update.controller";

const router = Router();

router.get("/", getProjectUpdates);
router.get("/:id", getProjectUpdateById);
router.post("/", insertProjectUpdate);
router.patch("/:id", updateProjectUpdate);
router.delete("/:id", deleteProjectUpdateById);

export default router;
