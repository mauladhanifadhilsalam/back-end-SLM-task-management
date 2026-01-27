import { describe, expect, it, vi } from "vitest";

const prismaMock = vi.hoisted(() => ({
  project: {
    findUnique: vi.fn(),
    findFirst: vi.fn(),
  },
  projectAssignment: {
    findMany: vi.fn(),
  },
  ticketAssignee: {
    findMany: vi.fn(),
  },
}));

vi.mock("../../src/db/prisma", () => ({
  default: prismaMock,
}));

import { findInboxSupportRewards } from "../../src/services/inbox-reward.service";

describe("inbox-reward.service", () => {
  it("returns null when no inbox project", async () => {
    prismaMock.project.findUnique.mockResolvedValue(null);
    prismaMock.project.findFirst.mockResolvedValue(null);

    const result = await findInboxSupportRewards();

    expect(result).toBeNull();
  });

  it("returns empty developer list when none assigned", async () => {
    prismaMock.project.findUnique.mockResolvedValue({ id: 1, name: "Support Inbox" });
    prismaMock.projectAssignment.findMany.mockResolvedValue([]);

    const result = await findInboxSupportRewards();

    expect(result?.developers).toEqual([]);
  });
});
