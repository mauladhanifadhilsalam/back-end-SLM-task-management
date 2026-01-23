import { describe, expect, it, vi, beforeEach } from "vitest";
import { NotificationTargetType, TicketStatus, TicketType } from "@prisma/client";

vi.mock("../../src/services/notification.dispatcher", () => ({
  dispatchNotification: vi.fn(),
}));

import { dispatchNotification } from "../../src/services/notification.dispatcher";
import {
  notifyProjectAssignments,
  notifyTicketAssignees,
  notifyTicketCompletion,
  notifyTicketRequesterComment,
} from "../../src/services/notification.triggers";
import type { TicketWithRelations } from "../../src/utils/permissions";

type DispatchCall = Parameters<typeof dispatchNotification>[0];

function buildTicket(overrides: Partial<TicketWithRelations> = {}) {
  const base = {
    id: 5,
    type: TicketType.TASK,
    title: "Fix bug",
    status: TicketStatus.IN_PROGRESS,
    requesterId: 1,
    requester: { id: 1, fullName: "Requester", email: "req@example.com", role: "DEVELOPER" },
    assignees: [
      {
        id: 11,
        assignedAt: new Date(),
        user: { id: 2, fullName: "Dev A", email: "dev@example.com", role: "DEVELOPER" },
      },
    ],
    project: {
      id: 9,
      name: "Project Alpha",
      status: "ACTIVE",
      startDate: null,
      endDate: null,
      assignments: [{ userId: 2 }, { userId: 3 }],
    },
  } as unknown as TicketWithRelations;

  return { ...base, ...overrides } as TicketWithRelations;
}

describe("notification triggers", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("notifies project assignments", async () => {
    const project = {
      id: 1,
      name: "Project Alpha",
      assignments: [
        { user: { id: 2, fullName: "Dev A", email: "dev@example.com", projectRole: "DEV" } },
        { user: { id: 3, fullName: "PM", email: "pm@example.com", projectRole: "PM" } },
      ],
    };

    await notifyProjectAssignments(project, { id: 7, fullName: "Admin" });

    const calls = (dispatchNotification as unknown as { mock: { calls: DispatchCall[][] } }).mock
      .calls;

    expect(calls).toHaveLength(2);
    expect(calls[0][0]).toMatchObject({
      recipientId: 2,
      targetType: NotificationTargetType.PROJECT,
      targetId: 1,
    });
  });

  it("notifies ticket assignees with deduped ids", async () => {
    const ticket = buildTicket();

    await notifyTicketAssignees(ticket, [2, 2, 999, -1]);

    const calls = (dispatchNotification as unknown as { mock: { calls: DispatchCall[][] } }).mock
      .calls;

    expect(calls).toHaveLength(1);
    expect(calls[0][0].targetType).toBe(NotificationTargetType.TICKET);
  });

  it("notifies requester when ticket completes", async () => {
    const ticket = buildTicket({ status: TicketStatus.DONE });

    await notifyTicketCompletion(ticket, TicketStatus.IN_PROGRESS, { id: 7, fullName: "Admin" });

    expect(dispatchNotification).toHaveBeenCalledOnce();
  });

  it("does not notify when ticket already completed", async () => {
    const ticket = buildTicket({ status: TicketStatus.DONE });

    await notifyTicketCompletion(ticket, TicketStatus.DONE, { id: 7, fullName: "Admin" });

    expect(dispatchNotification).not.toHaveBeenCalled();
  });

  it("notifies requester on comments from others", async () => {
    const ticket = buildTicket();
    const comment = {
      id: 1,
      message: "Update",
      user: { id: 2, fullName: "Dev A", email: "dev@example.com" },
      ticket,
    };

    await notifyTicketRequesterComment(comment);

    expect(dispatchNotification).toHaveBeenCalledOnce();
  });
});
