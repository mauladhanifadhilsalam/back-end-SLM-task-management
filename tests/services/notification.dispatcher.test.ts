import { describe, expect, it, vi, beforeEach } from "vitest";
import { NotificationState, NotificationTargetType, NotifyStatusType } from "@prisma/client";

vi.mock("../../src/services/notification.service", () => ({
  createNotification: vi.fn(),
  editNotification: vi.fn(),
}));

vi.mock("../../src/queues/email", () => ({
  enqueueEmailNotification: vi.fn(),
}));

import { createNotification, editNotification } from "../../src/services/notification.service";
import { enqueueEmailNotification } from "../../src/queues/email";
import {
  dispatchNotification,
  resendNotificationEmail,
} from "../../src/services/notification.dispatcher";

const mockedCreateNotification = vi.mocked(createNotification);
const mockedEditNotification = vi.mocked(editNotification);
const mockedEnqueue = vi.mocked(enqueueEmailNotification);

describe("notification.dispatcher", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("marks notification failed when recipient email missing", async () => {
    mockedCreateNotification.mockResolvedValue({
      id: 1,
      recipient: { email: null },
    } as never);

    const result = await dispatchNotification({
      recipientId: 1,
      targetType: NotificationTargetType.TICKET,
      message: "Hello",
      subject: "Hi",
    });

    expect(mockedEditNotification).toHaveBeenCalledWith(1, {
      status: NotifyStatusType.FAILED,
      emailError: "Recipient email missing",
    });
    expect(mockedEnqueue).not.toHaveBeenCalled();
    expect(result.id).toBe(1);
  });

  it("enqueues email when recipient email present", async () => {
    mockedCreateNotification.mockResolvedValue({
      id: 2,
      recipient: { email: "user@example.com" },
    } as never);

    await dispatchNotification({
      recipientId: 2,
      targetType: NotificationTargetType.TICKET,
      message: "Hello",
      subject: "Hi",
      state: NotificationState.UNREAD,
    });

    expect(mockedEnqueue).toHaveBeenCalledWith(2);
  });

  it("rejects resend when notification is not failed", async () => {
    await expect(
      resendNotificationEmail({ status: NotifyStatusType.SENT } as never),
    ).rejects.toThrow("Only failed notifications can be resent");
  });

  it("rejects resend when subject missing", async () => {
    await expect(
      resendNotificationEmail({
        status: NotifyStatusType.FAILED,
        subject: null,
        message: "Hi",
        emailText: null,
        recipient: { email: "user@example.com" },
      } as never),
    ).rejects.toThrow("Subject is required to resend the email");
  });

  it("throws and marks failed when recipient email missing", async () => {
    mockedEditNotification.mockResolvedValue({ id: 3 } as never);

    await expect(
      resendNotificationEmail({
        id: 3,
        status: NotifyStatusType.FAILED,
        subject: "Hello",
        message: "Hi",
        emailText: "Hi",
        recipient: { email: null },
      } as never),
    ).rejects.toThrow("Recipient email missing");

    expect(mockedEditNotification).toHaveBeenCalledWith(3, {
      status: NotifyStatusType.FAILED,
      emailError: "Recipient email missing",
    });
  });

  it("resends failed email", async () => {
    mockedEditNotification.mockResolvedValue({ id: 4 } as never);

    await resendNotificationEmail({
      id: 4,
      status: NotifyStatusType.FAILED,
      subject: "Hello",
      message: "Hi",
      emailText: null,
      emailFrom: null,
      emailReplyTo: null,
      recipient: { email: "user@example.com" },
    } as never);

    expect(mockedEditNotification).toHaveBeenCalled();
    expect(mockedEnqueue).toHaveBeenCalledWith(4);
  });
});
