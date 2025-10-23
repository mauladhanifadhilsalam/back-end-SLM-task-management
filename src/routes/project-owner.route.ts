import { Router } from "express";
import {
  getAllProjectOwners,
  getProjectOwnerById,
  insertProjectOwner,
  updateProjectOwner,
  deleteProjectOwnerById,
} from "../controllers/project-owner.controller";
import requireRole from "../middleware/requireRole";
import { RoleType } from "../generated/prisma";

const router = Router();

router.use(requireRole([RoleType.ADMIN, RoleType.PROJECT_MANAGER]));
router.get("/", getAllProjectOwners);
router.get("/:id", getProjectOwnerById);
router.post("/", insertProjectOwner);
router.patch("/:id", updateProjectOwner);
router.delete("/:id", deleteProjectOwnerById);

export default router;
