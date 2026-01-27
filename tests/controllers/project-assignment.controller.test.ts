import { describe, expect, it, vi } from "vitest";
import { RoleType } from "@prisma/client";
import { createMockRequest, createMockResponse } from "../helpers/express";

vi.mock("../../src/services/project-assignment.service", () => ({
  findProjectAssignments: vi.fn(),
  createProjectAssignment: vi.fn(),
  deleteProjectAssignment: vi.fn(),
  findProjectAssignment: vi.fn(),
}));

vi.mock("../../src/services/project.service", () => ({
  findProject: vi.fn(),
  verifyUsersExist: vi.fn(),
}));

vi.mock("../../src/services/notification.triggers", () => ({
  notifyProjectAssignments: vi.fn(),
}));

vi.mock("../../src/services/activity-log.service", () => ({
  recordActivity: vi.fn(),
  toActivityDetails: vi.fn((input) => input),
}));

vi.mock("../../src/services/user.service", () => ({
  findAnyUser: vi.fn(),
}));

vi.mock("../../src/utils/permissions", () => ({
  requireViewer: vi.fn(() => ({ id: 1, role: RoleType.DEVELOPER })),
  isAdmin: vi.fn(() => false),
}));

import { getProjectAssignments } from "../../src/controllers/project-assignment.controller";

describe("project-assignment.controller", () => {
  it("requires projectId for non-admin", async () => {
    const req = createMockRequest({ query: {} });
    const res = createMockResponse();

    await getProjectAssignments(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
  });
});
