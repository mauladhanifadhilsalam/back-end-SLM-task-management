import { describe, expect, it, vi } from "vitest";
import { createMockRequest, createMockResponse } from "../helpers/express";

vi.mock("../../src/services/dashboard.service", () => ({
  findAllDeveloperDashboards: vi.fn(),
  findDeveloperDashboard: vi.fn(),
  findDailyCadence: vi.fn(),
  findProjectManagerDashboard: vi.fn(),
}));

vi.mock("../../src/services/inbox-reward.service", () => ({
  findInboxSupportRewards: vi.fn(),
}));

import { getDailyCadence } from "../../src/controllers/dashboard.controller";

describe("dashboard.controller", () => {
  it("rejects invalid project id", async () => {
    const req = createMockRequest({ user: { sub: "1" }, params: { projectId: "abc" } });
    const res = createMockResponse();

    await getDailyCadence(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
  });
});
