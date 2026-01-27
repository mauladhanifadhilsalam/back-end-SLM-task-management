import { describe, expect, it, vi } from "vitest";
import { RoleType } from "@prisma/client";
import { createMockRequest, createMockResponse } from "../helpers/express";

vi.mock("../../src/services/comment.service", () => ({
  findComments: vi.fn(),
  findComment: vi.fn(),
  createComment: vi.fn(),
  editComment: vi.fn(),
  deleteComment: vi.fn(),
}));

vi.mock("../../src/services/ticket.service", () => ({
  findTicket: vi.fn(),
}));

vi.mock("../../src/services/notification.triggers", () => ({
  notifyTicketRequesterComment: vi.fn(),
}));

vi.mock("../../src/services/activity-log.service", () => ({
  recordActivity: vi.fn(),
  toActivityDetails: vi.fn((input) => input),
}));

vi.mock("../../src/utils/permissions", () => ({
  requireViewer: vi.fn(() => ({ id: 1, role: RoleType.DEVELOPER })),
  isAdmin: vi.fn(() => false),
}));

import { updateComment } from "../../src/controllers/comment.controller";

describe("comment.controller", () => {
  it("rejects invalid comment id", async () => {
    const req = createMockRequest({ params: { id: "0" }, body: { message: "hi" } });
    const res = createMockResponse();

    await updateComment(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
  });
});
