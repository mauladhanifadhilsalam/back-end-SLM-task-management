import { Router } from "express";
import {
  getAllProjectOwners,
  getProjectOwnerById,
  insertProjectOwner,
  updateProjectOwner,
  deleteProjectOwnerById,
} from "../controllers/project-owner.controller";

const router = Router();

router.get("/", getAllProjectOwners);
router.get("/:id", getProjectOwnerById);
router.post("/", insertProjectOwner);
router.patch("/:id", updateProjectOwner);
router.delete("/:id", deleteProjectOwnerById);

export default router;
