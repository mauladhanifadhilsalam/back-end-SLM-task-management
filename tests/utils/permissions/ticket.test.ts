import { describe, expect, it } from "vitest";
import { RoleType, TicketType } from "@prisma/client";
import type { TicketWithRelations } from "../../../src/utils/permissions";
import {
  canModifyTicket,
  canModifyTicketState,
  canViewTicket,
} from "../../../src/utils/permissions";

type Viewer = { id: number; role: RoleType };

function buildTicket(overrides: Partial<TicketWithRelations> = {}) {
  const base = {
    id: 10,
    type: TicketType.TASK,
    title: "Test ticket",
    requesterId: 1,
    requester: { id: 1, fullName: "Requester", email: "req@example.com", role: RoleType.DEVELOPER },
    assignees: [
      {
        id: 99,
        assignedAt: new Date(),
        user: { id: 2, fullName: "Assignee", email: "a@x.com", role: RoleType.DEVELOPER },
      },
    ],
    project: {
      id: 20,
      name: "Project",
      status: "ACTIVE",
      startDate: null,
      endDate: null,
      assignments: [{ userId: 3 }],
    },
  } as unknown as TicketWithRelations;

  return { ...base, ...overrides } as TicketWithRelations;
}

describe("ticket permissions", () => {
  it("allows admins to view/modify", () => {
    const ticket = buildTicket();
    const viewer: Viewer = { id: 99, role: RoleType.ADMIN };

    expect(canViewTicket(ticket, viewer)).toBe(true);
    expect(canModifyTicket(ticket, viewer)).toBe(true);
  });

  it("allows requester to view/modify", () => {
    const ticket = buildTicket({
      requesterId: 7,
      requester: { id: 7 } as TicketWithRelations["requester"],
    });
    const viewer: Viewer = { id: 7, role: RoleType.DEVELOPER };

    expect(canViewTicket(ticket, viewer)).toBe(true);
    expect(canModifyTicket(ticket, viewer)).toBe(true);
  });

  it("allows assignee to view/modify", () => {
    const ticket = buildTicket();
    const viewer: Viewer = { id: 2, role: RoleType.DEVELOPER };

    expect(canViewTicket(ticket, viewer)).toBe(true);
    expect(canModifyTicket(ticket, viewer)).toBe(true);
  });

  it("allows project members to view", () => {
    const ticket = buildTicket();
    const viewer: Viewer = { id: 3, role: RoleType.DEVELOPER };

    expect(canViewTicket(ticket, viewer)).toBe(true);
  });

  it("allows project managers to view/modify", () => {
    const ticket = buildTicket();
    const viewer: Viewer = { id: 5, role: RoleType.PROJECT_MANAGER };

    expect(canViewTicket(ticket, viewer)).toBe(true);
    expect(canModifyTicket(ticket, viewer)).toBe(true);
  });

  it("allows developers to modify tasks when in project", () => {
    const viewer: Viewer = { id: 3, role: RoleType.DEVELOPER };

    expect(canModifyTicketState(TicketType.TASK, 1, [2], [3], viewer)).toBe(true);
  });

  it("allows developers to modify issues only when involved", () => {
    const viewer: Viewer = { id: 4, role: RoleType.DEVELOPER };

    expect(canModifyTicketState(TicketType.ISSUE, 4, [2], [4], viewer)).toBe(true);

    expect(canModifyTicketState(TicketType.ISSUE, 1, [2], [4], viewer)).toBe(false);
  });
});
