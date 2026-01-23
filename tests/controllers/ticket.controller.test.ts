import { describe, expect, it, vi, beforeEach } from "vitest";
import { RoleType, TicketStatus, TicketType } from "@prisma/client";
import type { Request } from "express";
import { createMockRequest, createMockResponse } from "../helpers/express";
import type { TicketWithRelations } from "../../src/services/ticket.service";

vi.mock("../../src/services/ticket.service", () => ({
  findTickets: vi.fn(),
  findTicket: vi.fn(),
  createTicket: vi.fn(),
  editTicket: vi.fn(),
  deleteTicket: vi.fn(),
  findAssignableUsers: vi.fn(),
}));

vi.mock("../../src/services/project.service", () => ({
  findProject: vi.fn(),
}));

vi.mock("../../src/services/user.service", () => ({
  findUser: vi.fn(),
  findAnyUser: vi.fn(),
}));

vi.mock("../../src/services/notification.triggers", () => ({
  notifyTicketAssignees: vi.fn(),
  notifyTicketCompletion: vi.fn(),
}));

vi.mock("../../src/services/activity-log.service", () => ({
  recordActivity: vi.fn(),
  toActivityDetails: vi.fn((input) => input),
}));

vi.mock("../../src/websocket/ticket.events", () => ({
  emitTicketCreated: vi.fn(),
  emitTicketUpdated: vi.fn(),
  emitTicketDeleted: vi.fn(),
}));

vi.mock("../../src/utils/permissions", async () => {
  const actual = await vi.importActual<typeof import("../../src/utils/permissions")>(
    "../../src/utils/permissions",
  );
  return {
    ...actual,
    canViewTicket: vi.fn(),
    canModifyTicket: vi.fn(),
    canModifyTicketState: vi.fn(),
    isAdmin: vi.fn(),
    isProjectManager: vi.fn(),
  };
});

import { findTickets, findTicket } from "../../src/services/ticket.service";
import {
  canViewTicket,
  canModifyTicket,
  canModifyTicketState,
  isAdmin,
  isProjectManager,
} from "../../src/utils/permissions";
import {
  getAllTickets,
  getTicketById,
  insertTicket,
  updateTicket,
} from "../../src/controllers/ticket.controller";

const mockedFindTickets = vi.mocked(findTickets);
const mockedFindTicket = vi.mocked(findTicket);
const mockedCanViewTicket = vi.mocked(canViewTicket);
const mockedCanModifyTicket = vi.mocked(canModifyTicket);
const mockedCanModifyTicketState = vi.mocked(canModifyTicketState);
const mockedIsAdmin = vi.mocked(isAdmin);
const mockedIsProjectManager = vi.mocked(isProjectManager);

function buildTicket(overrides: Partial<TicketWithRelations> = {}) {
  return {
    id: 1,
    projectId: 10,
    type: TicketType.TASK,
    title: "Test",
    status: TicketStatus.OPEN,
    requesterId: 2,
    requester: { id: 2, fullName: "User", email: "user@example.com", role: RoleType.DEVELOPER },
    assignees: [
      {
        id: 1,
        assignedAt: new Date(),
        user: { id: 3, fullName: "Dev", email: "d@x.com", role: RoleType.DEVELOPER },
      },
    ],
    project: {
      id: 10,
      name: "Project",
      status: "ACTIVE",
      startDate: null,
      endDate: null,
      assignments: [{ userId: 2 }],
    },
    startDate: new Date("2025-01-01"),
    dueDate: new Date("2025-01-03"),
  } as TicketWithRelations;
}

describe("ticket.controller", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("rejects invalid query params", async () => {
    const req = createMockRequest({
      user: { sub: "1", role: RoleType.ADMIN },
      query: { dueFrom: "2025-01-10", dueTo: "2025-01-01" },
    }) as Request;
    const res = createMockResponse();

    await getAllTickets(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
  });

  it("returns 400 for invalid ticket id", async () => {
    const req = createMockRequest({
      user: { sub: "1", role: RoleType.ADMIN },
      params: { id: "abc" },
    }) as Request;
    const res = createMockResponse();

    await getTicketById(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
  });

  it("returns 404 when ticket is missing", async () => {
    mockedFindTicket.mockResolvedValue(null as never);

    const req = createMockRequest({
      user: { sub: "1", role: RoleType.ADMIN },
      params: { id: "99" },
    }) as Request;
    const res = createMockResponse();

    await getTicketById(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
  });

  it("returns 403 when viewer cannot see ticket", async () => {
    mockedFindTicket.mockResolvedValue(buildTicket());
    mockedCanViewTicket.mockReturnValue(false);

    const req = createMockRequest({
      user: { sub: "4", role: RoleType.DEVELOPER },
      params: { id: "1" },
    }) as Request;
    const res = createMockResponse();

    await getTicketById(req, res);

    expect(res.status).toHaveBeenCalledWith(403);
  });

  it("returns ticket with duration", async () => {
    mockedFindTicket.mockResolvedValue(buildTicket());
    mockedCanViewTicket.mockReturnValue(true);

    const req = createMockRequest({
      user: { sub: "2", role: RoleType.DEVELOPER },
      params: { id: "1" },
    }) as Request;
    const res = createMockResponse();

    await getTicketById(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    const calls = (res.json as unknown as { mock: { calls: Array<[unknown]> } }).mock.calls;
    const payload = calls[0][0] as { duration: number | null };
    expect(payload.duration).toBe(3);
  });

  it("rejects invalid ticket create payload", async () => {
    const req = createMockRequest({
      user: { sub: "1", role: RoleType.ADMIN },
      body: {},
    }) as Request;
    const res = createMockResponse();

    await insertTicket(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
  });

  it("rejects update with invalid dates", async () => {
    mockedFindTicket.mockResolvedValue(buildTicket());
    mockedCanModifyTicket.mockReturnValue(true);
    mockedIsAdmin.mockReturnValue(true);
    mockedIsProjectManager.mockReturnValue(true);
    mockedCanModifyTicketState.mockReturnValue(true);

    const req = createMockRequest({
      user: { sub: "1", role: RoleType.ADMIN },
      params: { id: "1" },
      body: { startDate: "2025-02-10", dueDate: "2025-02-01" },
    }) as Request;
    const res = createMockResponse();

    await updateTicket(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
  });
});
