import { describe, expect, it, vi } from "vitest";
import { RoleType } from "@prisma/client";
import { createMockRequest, createMockResponse } from "../helpers/express";

vi.mock("../../src/services/notification.service", () => ({
  findNotifications: vi.fn(),
  findNotification: vi.fn(),
  createNotification: vi.fn(),
  editNotification: vi.fn(),
  deleteNotification: vi.fn(),
  setNotificationState: vi.fn(),
}));

vi.mock("../../src/services/notification.dispatcher", () => ({
  resendNotificationEmail: vi.fn(),
}));

vi.mock("../../src/services/user.service", () => ({
  findUser: vi.fn(),
}));

vi.mock("../../src/utils/permissions", () => ({
  requireViewer: vi.fn(() => ({ id: 1, role: RoleType.ADMIN })),
  isAdmin: vi.fn(() => true),
  canManageNotifications: vi.fn(() => true),
  canViewNotification: vi.fn(() => true),
  canUpdateNotificationState: vi.fn(() => true),
}));

import { getNotificationById } from "../../src/controllers/notification.controller";

describe("notification.controller", () => {
  it("rejects invalid notification id", async () => {
    const req = createMockRequest({ params: { id: "0" } });
    const res = createMockResponse();

    await getNotificationById(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
  });
});
