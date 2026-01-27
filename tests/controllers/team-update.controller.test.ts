import { describe, expect, it, vi } from "vitest";
import { RoleType } from "@prisma/client";
import { createMockRequest, createMockResponse } from "../helpers/express";

vi.mock("../../src/services/team-update.service", () => ({
  findTeamUpdates: vi.fn(),
  findTeamUpdate: vi.fn(),
  createTeamUpdate: vi.fn(),
  editTeamUpdate: vi.fn(),
  deleteTeamUpdate: vi.fn(),
}));

vi.mock("../../src/utils/permissions", () => ({
  requireViewer: vi.fn(() => ({ id: 1, role: RoleType.DEVELOPER })),
  isAdmin: vi.fn(() => false),
}));

import { updateTeamUpdate } from "../../src/controllers/team-update.controller";

describe("team-update.controller", () => {
  it("rejects invalid team update id", async () => {
    const req = createMockRequest({ params: { id: "0" }, body: {} });
    const res = createMockResponse();

    await updateTeamUpdate(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
  });
});
