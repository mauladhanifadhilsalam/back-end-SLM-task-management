import { Router } from "express";
import {
  getTeamUpdates,
  getTeamUpdateById,
  insertTeamUpdate,
  updateTeamUpdate,
  deleteTeamUpdateById,
} from "../controllers/team-update.controller";

const router = Router();

router.get("/", getTeamUpdates);
router.get("/:id", getTeamUpdateById);
router.post("/", insertTeamUpdate);
router.patch("/:id", updateTeamUpdate);
router.delete("/:id", deleteTeamUpdateById);

export default router;
