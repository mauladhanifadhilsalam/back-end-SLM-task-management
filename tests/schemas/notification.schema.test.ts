import { describe, expect, it } from "vitest";
import { NotificationState, NotificationTargetType, NotifyStatusType } from "@prisma/client";
import {
  createNotificationSchema,
  notificationQuerySchema,
  updateNotificationSchema,
} from "../../src/schemas/notification.schema";

describe("notification schema", () => {
  it("rejects sentTo before sentFrom", () => {
    const parsed = notificationQuerySchema.safeParse({
      sentFrom: "2025-01-10",
      sentTo: "2025-01-01",
    });
    expect(parsed.success).toBe(false);
  });

  it("requires READ state when readAt provided", () => {
    const parsed = createNotificationSchema.safeParse({
      recipientId: 1,
      targetType: NotificationTargetType.TICKET,
      message: "Hi",
      readAt: "2025-01-01",
      state: NotificationState.UNREAD,
    });
    expect(parsed.success).toBe(false);
  });

  it("accepts valid create payload", () => {
    const parsed = createNotificationSchema.safeParse({
      recipientId: 1,
      targetType: NotificationTargetType.TICKET,
      targetId: 2,
      message: "Hello",
      subject: "Subject",
      state: NotificationState.UNREAD,
      status: NotifyStatusType.PENDING,
    });
    expect(parsed.success).toBe(true);
  });

  it("requires at least one field on update", () => {
    const parsed = updateNotificationSchema.safeParse({});
    expect(parsed.success).toBe(false);
  });
});
