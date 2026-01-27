import { describe, expect, it, vi } from "vitest";
import { RoleType } from "@prisma/client";
import { createMockRequest, createMockResponse } from "../helpers/express";

vi.mock("../../src/services/project.service", () => ({
  findProjects: vi.fn(),
  findProjectsForReport: vi.fn(),
  findProject: vi.fn(),
  createProject: vi.fn(),
  editProject: vi.fn(),
  deleteProject: vi.fn(),
  verifyUsersExist: vi.fn(),
}));

vi.mock("../../src/services/project-owner.service", () => ({
  findProjectOwner: vi.fn(),
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

vi.mock("../../src/reports/projectReport", () => ({
  generateProjectReport: vi.fn(),
}));

vi.mock("../../src/utils/permissions", () => ({
  requireViewer: vi.fn(() => ({ id: 1, role: RoleType.ADMIN })),
  isAdmin: vi.fn(() => true),
  isProjectManager: vi.fn(() => false),
}));

import { downloadProjectReport } from "../../src/controllers/project.controller";

describe("project.controller", () => {
  it("rejects invalid year", async () => {
    const req = createMockRequest({ query: { year: "abcd" } });
    const res = createMockResponse();

    await downloadProjectReport(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
  });
});
