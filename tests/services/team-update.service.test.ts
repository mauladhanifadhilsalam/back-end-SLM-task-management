import { describe, expect, it, vi } from "vitest";

const prismaMock = vi.hoisted(() => ({
  teamUpdate: {
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

import { TeamUpdateStatus } from "@prisma/client";
import { findTeamUpdates, createTeamUpdate } from "../../src/services/team-update.service";

describe("team-update.service", () => {
  it("finds updates with pagination", async () => {
    prismaMock.$transaction.mockResolvedValue([[{ id: 1 }], 1]);

    const result = await findTeamUpdates({});

    expect(result.pagination.total).toBe(1);
  });

  it("creates team update", async () => {
    prismaMock.teamUpdate.create.mockResolvedValue({ id: 2 });

    const created = await createTeamUpdate({
      userId: 1,
      projectId: 2,
      yesterdayWork: null,
      todayWork: "Work",
      blocker: null,
      nextAction: null,
      status: TeamUpdateStatus.IN_PROGRESS,
    });

    expect(created).toEqual({ id: 2 });
  });
});
