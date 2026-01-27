import { describe, expect, it, vi } from "vitest";
import { NotificationState, NotificationTargetType } from "@prisma/client";

const prismaMock = vi.hoisted(() => ({
  notification: {
    findMany: vi.fn(),
    count: vi.fn(),
    findUnique: vi.fn(),
    create: vi.fn(),
    update: vi.fn(),
    delete: vi.fn(),
  },
  $transaction: vi.fn(),
}));

vi.mock("../../src/db/prisma", () => ({
  default: prismaMock,
}));

import { createNotification, setNotificationState } from "../../src/services/notification.service";

describe("notification.service", () => {
  it("creates notification with read state", async () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-01-01T00:00:00.000Z"));

    prismaMock.notification.create.mockResolvedValue({ id: 1 });

    await createNotification({
      recipientId: 1,
      targetType: NotificationTargetType.TICKET,
      message: "Hi",
      state: NotificationState.READ,
    });

    expect(prismaMock.notification.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          state: NotificationState.READ,
          readAt: new Date("2026-01-01T00:00:00.000Z"),
        }),
      }),
    );

    vi.useRealTimers();
  });

  it("sets notification state", async () => {
    prismaMock.notification.update.mockResolvedValue({ id: 2 });

    await setNotificationState(2, NotificationState.UNREAD);

    expect(prismaMock.notification.update).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { id: 2 },
        data: { state: NotificationState.UNREAD, readAt: null },
      }),
    );
  });
});
