import { Router } from "express";
import {
  getNotifications,
  getNotificationById,
  insertNotification,
  updateNotification,
  deleteNotificationById,
  updateNotificationState,
  resendNotification,
} from "../controllers/notification.controller";
import requireRole from "../middleware/requireRole";
import { RoleType } from "@prisma/client";

const router = Router();

router.get("/", getNotifications);
router.get("/:id", getNotificationById);
router.patch("/:id/state", updateNotificationState);

router.use(requireRole(RoleType.ADMIN));
router.post("/", insertNotification);
router.patch("/:id", updateNotification);
router.post("/:id/resend", resendNotification);
router.delete("/:id", deleteNotificationById);

export default router;
