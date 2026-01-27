import { describe, expect, it, vi } from "vitest";
import { createMockRequest, createMockResponse } from "../helpers/express";

vi.mock("../../src/services/activity-log.service", () => ({
  findActivityLogs: vi.fn(),
  findActivityLog: vi.fn(),
  deleteActivityLog: vi.fn(),
  deleteActivityLogs: vi.fn(),
}));

import { getActivityLogById } from "../../src/controllers/activity-log.controller";

describe("activity-log.controller", () => {
  it("rejects invalid id", async () => {
    const req = createMockRequest({ params: { id: "abc" } });
    const res = createMockResponse();

    await getActivityLogById(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
  });
});
