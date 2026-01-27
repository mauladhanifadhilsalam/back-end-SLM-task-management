import { describe, expect, it, vi } from "vitest";
import { ActivityTargetType } from "@prisma/client";

const prismaMock = vi.hoisted(() => ({
  activityLog: {
    create: vi.fn(),
    findMany: vi.fn(),
    count: vi.fn(),
    findUnique: vi.fn(),
    delete: vi.fn(),
    deleteMany: vi.fn(),
  },
  $transaction: vi.fn(),
}));

vi.mock("../../src/db/prisma", () => ({
  default: prismaMock,
}));

vi.mock("../../src/services/dashboard.service", () => ({
  refreshDashboard: vi.fn(),
}));

vi.mock("../../src/queues/activityLog", () => ({
  enqueueActivityLog: vi.fn(),
}));

import type { ActivityLogFilters } from "../../src/services/activity-log.service";
import {
  buildActivityLogWhere,
  logActivity,
  recordActivity,
  findActivityLogs,
  deleteActivityLogs,
} from "../../src/services/activity-log.service";
import { refreshDashboard } from "../../src/services/dashboard.service";
import { enqueueActivityLog } from "../../src/queues/activityLog";

describe("activity-log.service", () => {
  it("builds where clause from filters", () => {
    const where = buildActivityLogWhere({ targetType: ActivityTargetType.USER, userId: 2 });
    expect(where).toMatchObject({ targetType: ActivityTargetType.USER, userId: 2 });
  });

  it("logs activity and refreshes dashboard", async () => {
    prismaMock.activityLog.create.mockResolvedValue({ id: 1 });

    await logActivity({ action: "TEST", targetType: ActivityTargetType.USER, targetId: 1 });

    expect(refreshDashboard).toHaveBeenCalled();
  });

  it("records activity via queue", async () => {
    (
      enqueueActivityLog as unknown as { mockResolvedValue: (value: unknown) => void }
    ).mockResolvedValue({ id: 1 });

    const result = await recordActivity({
      action: "TEST",
      targetType: ActivityTargetType.USER,
      targetId: 1,
    });

    expect(result).toEqual({ id: 1 });
  });

  it("finds activity logs with pagination", async () => {
    prismaMock.$transaction.mockResolvedValue([[{ id: 1 }], 1]);

    const filters: ActivityLogFilters = {};
    const result = await findActivityLogs(filters);

    expect(result.pagination.total).toBe(1);
  });

  it("deletes activity logs", async () => {
    prismaMock.activityLog.deleteMany.mockResolvedValue({ count: 2 });

    const result = await deleteActivityLogs({ olderThan: new Date() });

    expect(result).toEqual({ count: 2 });
  });
});
