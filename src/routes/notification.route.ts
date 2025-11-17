import { Router } from "express";
import {
  getNotifications,
  getNotificationById,
  insertNotification,
  updateNotification,
  deleteNotificationById,
  updateNotificationState,
} from "../controllers/notification.controller";
import requireRole from "../middleware/requireRole";
import { RoleType } from "../generated/prisma";

const router = Router();

router.get("/", getNotifications);
router.get("/:id", getNotificationById);
router.patch("/:id/state", updateNotificationState);

router.use(requireRole(RoleType.ADMIN));
router.post("/", insertNotification);
router.patch("/:id", updateNotification);
router.delete("/:id", deleteNotificationById);

export default router;
