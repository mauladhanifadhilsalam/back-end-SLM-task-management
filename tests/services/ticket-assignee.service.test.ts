import { describe, expect, it, vi } from "vitest";
import { TicketStatus } from "@prisma/client";

const prismaMock = vi.hoisted(() => ({
  ticketAssignee: {
    findMany: vi.fn(),
    count: vi.fn(),
    findUnique: vi.fn(),
    create: vi.fn(),
    delete: vi.fn(),
    findFirst: vi.fn(),
    groupBy: vi.fn(),
  },
  $transaction: vi.fn(),
}));

vi.mock("../../src/db/prisma", () => ({
  default: prismaMock,
}));

import {
  findLeastLoadedAssignees,
  findLatestAssigneeForProject,
} from "../../src/services/ticket-assignee.service";

describe("ticket-assignee.service", () => {
  it("finds latest assignee for project", async () => {
    prismaMock.ticketAssignee.findFirst.mockResolvedValue({ userId: 2 });

    const result = await findLatestAssigneeForProject(1, [2, 3]);

    expect(result).toBe(2);
  });

  it("finds least loaded assignees", async () => {
    prismaMock.ticketAssignee.groupBy.mockResolvedValue([
      { userId: 2, _count: { _all: 1 } },
      { userId: 3, _count: { _all: 2 } },
    ]);

    const result = await findLeastLoadedAssignees(1, [2, 3]);

    expect(prismaMock.ticketAssignee.groupBy).toHaveBeenCalledWith(
      expect.objectContaining({
        by: ["userId"],
        where: {
          userId: { in: [2, 3] },
          ticket: {
            projectId: 1,
            status: { notIn: [TicketStatus.DONE, TicketStatus.CLOSED, TicketStatus.RESOLVED] },
          },
        },
        _count: { _all: true },
      }),
    );
    expect(result).toEqual([2]);
  });
});
