import { Router } from "express";
import {
  listActivityLogs,
  getActivityLogById,
  removeActivityLog,
  purgeActivityLogs,
} from "../controllers/activity-log.controller";

const router = Router();

router.get("/", listActivityLogs);
router.get("/:id", getActivityLogById);
router.delete("/", purgeActivityLogs);
router.delete("/:id", removeActivityLog);

export default router;
