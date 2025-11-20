import { Request, Response } from "express";
import {
  findNotifications,
  findNotification,
  createNotification,
  editNotification,
  deleteNotification,
  setNotificationState,
} from "../services/notification.service";
import { resendNotificationEmail } from "../services/notification.dispatcher";
import { findUser } from "../services/user.service";
import {
  requireViewer,
  isAdmin,
  canManageNotifications,
  canViewNotification,
  canUpdateNotificationState,
} from "../utils/permissions";
import {
  notificationFilterSchema,
  createNotificationSchema,
  updateNotificationSchema,
  updateNotificationStateSchema,
  resendNotificationSchema,
} from "../schemas/notification.schema";
import { NotifyStatusType } from "../generated/prisma";

function parseIdParam(raw?: string) {
  const id = Number(raw);
  if (!Number.isInteger(id) || id <= 0) {
    return null;
  }

  return id;
}

async function ensureNotification(id: number, res: Response) {
  const notification = await findNotification({ id });
  if (!notification) {
    res.status(404).json({ message: "Notification not found" });
    return null;
  }

  return notification;
}

async function ensureRecipient(recipientId: number, res: Response) {
  const recipient = await findUser({ id: recipientId });
  if (!recipient) {
    res.status(404).json({ message: "Recipient not found" });
    return null;
  }

  return recipient;
}

async function getNotifications(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  const parsed = notificationFilterSchema.safeParse(req.query);
  if (!parsed.success) {
    return res.status(400).json(parsed.error.format());
  }

  const filters = parsed.data;
  const effectiveFilters = isAdmin(viewer)
    ? filters
    : { ...filters, recipientId: viewer.id };

  const notifications = await findNotifications(effectiveFilters);
  res.status(200).json(notifications);
}

async function getNotificationById(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  const notificationId = parseIdParam(req.params.id);
  if (!notificationId) {
    return res.status(400).json({ message: "Invalid notification id" });
  }

  const notification = await ensureNotification(notificationId, res);
  if (!notification) {
    return;
  }

  if (!canViewNotification(notification, viewer)) {
    return res.status(403).json({ message: "Insufficient permissions" });
  }

  res.status(200).json(notification);
}

async function insertNotification(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  if (!canManageNotifications(viewer)) {
    return res
      .status(403)
      .json({ message: "Only admins can create notifications" });
  }

  const parsed = createNotificationSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json(parsed.error.format());
  }

  const { recipientId } = parsed.data;
  const recipient = await ensureRecipient(recipientId, res);
  if (!recipient) {
    return;
  }

  const notification = await createNotification(parsed.data);
  res.status(201).json(notification);
}

async function updateNotification(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  if (!canManageNotifications(viewer)) {
    return res
      .status(403)
      .json({ message: "Only admins can update notifications" });
  }

  const notificationId = parseIdParam(req.params.id);
  if (!notificationId) {
    return res.status(400).json({ message: "Invalid notification id" });
  }

  const existing = await ensureNotification(notificationId, res);
  if (!existing) {
    return;
  }

  const parsed = updateNotificationSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json(parsed.error.format());
  }

  if (parsed.data.recipientId !== undefined) {
    const recipient = await ensureRecipient(parsed.data.recipientId, res);
    if (!recipient) {
      return;
    }
  }

  const updated = await editNotification(notificationId, parsed.data);
  res.status(200).json(updated);
}

async function deleteNotificationById(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  if (!canManageNotifications(viewer)) {
    return res
      .status(403)
      .json({ message: "Only admins can delete notifications" });
  }

  const notificationId = parseIdParam(req.params.id);
  if (!notificationId) {
    return res.status(400).json({ message: "Invalid notification id" });
  }

  const existing = await ensureNotification(notificationId, res);
  if (!existing) {
    return;
  }

  await deleteNotification(notificationId);
  res.status(200).json({ message: "Notification deleted successfully" });
}

async function updateNotificationState(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  const notificationId = parseIdParam(req.params.id);
  if (!notificationId) {
    return res.status(400).json({ message: "Invalid notification id" });
  }

  const existing = await ensureNotification(notificationId, res);
  if (!existing) {
    return;
  }

  const parsed = updateNotificationStateSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json(parsed.error.format());
  }

  if (
    !canUpdateNotificationState(existing, viewer, parsed.data.state)
  ) {
    return res.status(403).json({ message: "Insufficient permissions" });
  }

  const updated = await setNotificationState(
    notificationId,
    parsed.data.state,
  );
  res.status(200).json(updated);
}

async function resendNotification(req: Request, res: Response) {
  const viewer = requireViewer(req, res);
  if (!viewer) {
    return;
  }

  if (!canManageNotifications(viewer)) {
    return res
      .status(403)
      .json({ message: "Only admins can resend notifications" });
  }

  const notificationId = parseIdParam(req.params.id);
  if (!notificationId) {
    return res.status(400).json({ message: "Invalid notification id" });
  }

  const notification = await ensureNotification(notificationId, res);
  if (!notification) {
    return;
  }

  if (notification.status !== NotifyStatusType.FAILED) {
    return res
      .status(409)
      .json({ message: "Only failed email notifications can be resent" });
  }

  const parsed = resendNotificationSchema.safeParse(req.body ?? {});
  if (!parsed.success) {
    return res.status(400).json(parsed.error.format());
  }

  if (!parsed.data.subject && !notification.subject) {
    return res.status(422).json({
      message:
        "Subject is missing for this notification. Provide `subject` in the request body to resend.",
    });
  }

  try {
    const updated = await resendNotificationEmail(notification, parsed.data);
    return res.status(202).json(updated);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to resend notification";
    return res.status(400).json({ message });
  }
}

export {
  getNotifications,
  getNotificationById,
  insertNotification,
  updateNotification,
  deleteNotificationById,
  updateNotificationState,
  resendNotification,
};
