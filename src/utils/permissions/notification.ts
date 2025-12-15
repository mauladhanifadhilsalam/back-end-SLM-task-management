import { NotificationState } from "@prisma/client";
import type { NotificationWithRelations } from "../../services/notification.service";
import { Viewer, isAdmin } from "./core";

function isRecipient(notification: NotificationWithRelations, viewer: Viewer) {
  return notification.recipientId === viewer.id;
}

function canManageNotifications(viewer: Viewer) {
  return isAdmin(viewer);
}

function canViewNotification(notification: NotificationWithRelations, viewer: Viewer) {
  return canManageNotifications(viewer) || isRecipient(notification, viewer);
}

function canUpdateNotificationState(
  notification: NotificationWithRelations,
  viewer: Viewer,
  nextState: NotificationState,
) {
  if (canManageNotifications(viewer)) {
    return true;
  }

  if (!isRecipient(notification, viewer)) {
    return false;
  }

  return notification.state === NotificationState.UNREAD && nextState === NotificationState.READ;
}

export { canManageNotifications, canViewNotification, canUpdateNotificationState };
