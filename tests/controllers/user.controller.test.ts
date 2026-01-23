import { describe, expect, it, vi } from "vitest";
import { RoleType } from "@prisma/client";
import { createMockRequest, createMockResponse } from "../helpers/express";

vi.mock("../../src/services/user.service", () => ({
  findUsers: vi.fn(),
  findUser: vi.fn(),
  createUser: vi.fn(),
  editUser: vi.fn(),
  deleteUser: vi.fn(),
  editPassword: vi.fn(),
}));

vi.mock("../../src/services/activity-log.service", () => ({
  recordActivity: vi.fn(),
  toActivityDetails: vi.fn((input) => input),
}));

vi.mock("../../src/services/auth.service", () => ({
  findUserById: vi.fn(),
}));

vi.mock("../../src/services/project-role.service", () => ({
  findProjectRoleByCode: vi.fn(),
}));

vi.mock("../../src/utils/auth", () => ({
  hashPassword: vi.fn(),
  verifyPassword: vi.fn(),
}));

vi.mock("../../src/utils/permissions", () => ({
  requireViewer: vi.fn(() => ({ id: 1, role: RoleType.ADMIN })),
}));

import { changePassword } from "../../src/controllers/user.controller";

describe("user.controller", () => {
  it("rejects invalid change password payload", async () => {
    const req = createMockRequest({ body: { password: "short" } });
    const res = createMockResponse();

    await changePassword(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
  });
});
