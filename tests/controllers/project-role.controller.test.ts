import { describe, expect, it, vi } from "vitest";
import { createMockRequest, createMockResponse } from "../helpers/express";

vi.mock("../../src/services/project-role.service", () => ({
  createProjectRole: vi.fn(),
  deleteProjectRole: vi.fn(),
  findProjectRoleByCode: vi.fn(),
  findProjectRoles: vi.fn(),
  updateProjectRole: vi.fn(),
}));

import { addProjectRole } from "../../src/controllers/project-role.controller";

describe("project-role.controller", () => {
  it("rejects invalid payload", async () => {
    const req = createMockRequest({ body: {} });
    const res = createMockResponse();

    await addProjectRole(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
  });
});
