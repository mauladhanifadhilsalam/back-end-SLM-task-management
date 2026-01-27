import { describe, expect, it, vi } from "vitest";
import { RoleType } from "@prisma/client";
import { createMockRequest, createMockResponse } from "../helpers/express";

vi.mock("../../src/services/ticket-assignee.service", () => ({
  findTicketAssignees: vi.fn(),
  createTicketAssignee: vi.fn(),
  deleteTicketAssignee: vi.fn(),
  findTicketAssignee: vi.fn(),
}));

vi.mock("../../src/services/ticket.service", () => ({
  findTicket: vi.fn(),
}));

vi.mock("../../src/services/user.service", () => ({
  findUser: vi.fn(),
  findAnyUser: vi.fn(),
}));

vi.mock("../../src/services/notification.triggers", () => ({
  notifyTicketAssignees: vi.fn(),
}));

vi.mock("../../src/services/activity-log.service", () => ({
  recordActivity: vi.fn(),
  toActivityDetails: vi.fn((input) => input),
}));

vi.mock("../../src/utils/permissions", () => ({
  requireViewer: vi.fn(() => ({ id: 1, role: RoleType.DEVELOPER })),
  canViewTicket: vi.fn(),
  canModifyTicket: vi.fn(),
  isAdmin: vi.fn(() => false),
}));

import { getTicketAssignees } from "../../src/controllers/ticket-assignee.controller";

describe("ticket-assignee.controller", () => {
  it("requires ticketId for non-admin", async () => {
    const req = createMockRequest({ query: {} });
    const res = createMockResponse();

    await getTicketAssignees(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
  });
});
