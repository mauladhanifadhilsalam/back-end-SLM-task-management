import { describe, expect, it, vi } from "vitest";

const prismaMock = vi.hoisted(() => ({
  $queryRaw: vi.fn(),
  $executeRaw: vi.fn(),
  $transaction: vi.fn(),
}));

vi.mock("../../src/db/prisma", () => ({
  default: prismaMock,
}));

import {
  findDeveloperDashboard,
  findAllDeveloperDashboards,
  findProjectManagerDashboard,
  findDailyCadence,
  refreshDashboard,
} from "../../src/services/dashboard.service";

describe("dashboard.service", () => {
  it("queries developer dashboard by user", async () => {
    prismaMock.$queryRaw.mockResolvedValue([{ userId: 1 }]);

    const result = await findDeveloperDashboard(1);

    expect(prismaMock.$queryRaw).toHaveBeenCalled();
    expect(result[0].userId).toBe(1);
  });

  it("queries all developer dashboards", async () => {
    prismaMock.$queryRaw.mockResolvedValue([{ userId: 2 }]);

    const result = await findAllDeveloperDashboards();

    expect(prismaMock.$queryRaw).toHaveBeenCalled();
    expect(result[0].userId).toBe(2);
  });

  it("queries project manager dashboard", async () => {
    prismaMock.$queryRaw.mockResolvedValue([{ userId: 3 }]);

    const result = await findProjectManagerDashboard(3);

    expect(prismaMock.$queryRaw).toHaveBeenCalled();
    expect(result[0].userId).toBe(3);
  });

  it("queries daily cadence", async () => {
    prismaMock.$queryRaw.mockResolvedValue([{ projectId: 4 }]);

    const result = await findDailyCadence(4);

    expect(result[0].projectId).toBe(4);
  });

  it("refreshes dashboards", async () => {
    prismaMock.$transaction.mockResolvedValue([]);

    await refreshDashboard();

    expect(prismaMock.$transaction).toHaveBeenCalled();
  });
});
