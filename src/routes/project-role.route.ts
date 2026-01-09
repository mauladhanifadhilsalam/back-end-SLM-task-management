import { Router } from "express";
import {
  addProjectRole,
  editProjectRole,
  getProjectRoleByCode,
  getProjectRoles,
  removeProjectRole,
} from "../controllers/project-role.controller";

const router = Router();

router.get("/", getProjectRoles);
router.get("/:code", getProjectRoleByCode);
router.post("/", addProjectRole);
router.patch("/:code", editProjectRole);
router.delete("/:code", removeProjectRole);

export default router;
