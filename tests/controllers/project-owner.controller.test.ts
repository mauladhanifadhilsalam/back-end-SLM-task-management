import { describe, expect, it, vi } from "vitest";
import { RoleType } from "@prisma/client";
import { createMockRequest, createMockResponse } from "../helpers/express";

vi.mock("../../src/services/project-owner.service", () => ({
  findProjectOwners: vi.fn(),
  findProjectOwner: vi.fn(),
  createProjectOwner: vi.fn(),
  editProjectOwner: vi.fn(),
  deleteProjectOwner: vi.fn(),
}));

vi.mock("../../src/services/activity-log.service", () => ({
  recordActivity: vi.fn(),
  toActivityDetails: vi.fn((input) => input),
}));

vi.mock("../../src/utils/permissions", () => ({
  requireViewer: vi.fn(() => ({ id: 1, role: RoleType.ADMIN })),
}));

import { insertProjectOwner } from "../../src/controllers/project-owner.controller";

describe("project-owner.controller", () => {
  it("rejects invalid payload", async () => {
    const req = createMockRequest({ body: {} });
    const res = createMockResponse();

    await insertProjectOwner(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
  });
});
