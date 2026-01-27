import { describe, expect, it } from "vitest";
import { NotificationState, RoleType } from "@prisma/client";
import type { NotificationWithRelations } from "../../../src/services/notification.service";
import {
  canManageNotifications,
  canUpdateNotificationState,
  canViewNotification,
} from "../../../src/utils/permissions/notification";

type Viewer = { id: number; role: RoleType };

function buildNotification(overrides: Partial<NotificationWithRelations> = {}) {
  const base = {
    id: 1,
    recipientId: 2,
    state: NotificationState.UNREAD,
    recipient: { id: 2, email: "user@example.com" },
  } as unknown as NotificationWithRelations;

  return { ...base, ...overrides } as NotificationWithRelations;
}

describe("notification permissions", () => {
  it("allows admins to manage and view", () => {
    const viewer: Viewer = { id: 9, role: RoleType.ADMIN };
    const notification = buildNotification();

    expect(canManageNotifications(viewer)).toBe(true);
    expect(canViewNotification(notification, viewer)).toBe(true);
  });

  it("allows recipients to view", () => {
    const viewer: Viewer = { id: 2, role: RoleType.DEVELOPER };
    const notification = buildNotification();

    expect(canViewNotification(notification, viewer)).toBe(true);
  });

  it("allows recipients to mark unread -> read", () => {
    const viewer: Viewer = { id: 2, role: RoleType.DEVELOPER };
    const notification = buildNotification();

    expect(canUpdateNotificationState(notification, viewer, NotificationState.READ)).toBe(true);
  });

  it("blocks recipients from invalid transitions", () => {
    const viewer: Viewer = { id: 2, role: RoleType.DEVELOPER };
    const notification = buildNotification({ state: NotificationState.READ });

    expect(canUpdateNotificationState(notification, viewer, NotificationState.UNREAD)).toBe(false);
  });
});
