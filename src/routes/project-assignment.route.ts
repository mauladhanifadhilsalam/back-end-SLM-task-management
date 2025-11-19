import { Router } from "express";
import {
  getProjectAssignments,
  addProjectAssignment,
  removeProjectAssignment,
} from "../controllers/project-assignment.controller";

const router = Router();

router.get("/", getProjectAssignments);
router.post("/", addProjectAssignment);
router.delete("/:id", removeProjectAssignment);

export default router;
