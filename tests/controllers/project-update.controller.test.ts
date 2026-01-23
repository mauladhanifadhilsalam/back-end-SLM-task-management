import { describe, expect, it, vi } from "vitest";
import { RoleType } from "@prisma/client";
import { createMockRequest, createMockResponse } from "../helpers/express";

vi.mock("../../src/services/project-update.service", () => ({
  findProjectUpdates: vi.fn(),
  findProjectUpdate: vi.fn(),
  createProjectUpdate: vi.fn(),
  editProjectUpdate: vi.fn(),
  deleteProjectUpdate: vi.fn(),
}));

vi.mock("../../src/utils/permissions", () => ({
  requireViewer: vi.fn(() => ({ id: 1, role: RoleType.DEVELOPER })),
  isAdmin: vi.fn(() => false),
}));

import { updateProjectUpdate } from "../../src/controllers/project-update.controller";

describe("project-update.controller", () => {
  it("rejects invalid project update id", async () => {
    const req = createMockRequest({ params: { id: "-1" }, body: {} });
    const res = createMockResponse();

    await updateProjectUpdate(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
  });
});
