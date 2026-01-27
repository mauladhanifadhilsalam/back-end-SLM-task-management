import { describe, expect, it, vi } from "vitest";
import { RoleType } from "@prisma/client";
import { createMockRequest, createMockResponse } from "../helpers/express";

vi.mock("../../src/services/project-phase.service", () => ({
  findProjectPhases: vi.fn(),
  findProjectPhase: vi.fn(),
  createProjectPhase: vi.fn(),
  editProjectPhase: vi.fn(),
  deleteProjectPhase: vi.fn(),
}));

vi.mock("../../src/services/project.service", () => ({
  findProject: vi.fn(),
}));

vi.mock("../../src/services/activity-log.service", () => ({
  recordActivity: vi.fn(),
  toActivityDetails: vi.fn((input) => input),
}));

vi.mock("../../src/utils/permissions", () => ({
  requireViewer: vi.fn(() => ({ id: 1, role: RoleType.ADMIN })),
}));

import { insertProjectPhase } from "../../src/controllers/project-phase.controller";

describe("project-phase.controller", () => {
  it("rejects invalid payload", async () => {
    const req = createMockRequest({ body: {} });
    const res = createMockResponse();

    await insertProjectPhase(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
  });
});
