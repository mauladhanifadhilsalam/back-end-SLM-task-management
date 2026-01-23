import { describe, expect, it } from "vitest";
import { RoleType } from "@prisma/client";
import requireRole from "../../src/middleware/requireRole";
import { createMockNext, createMockRequest, createMockResponse } from "../helpers/express";

describe("requireRole", () => {
  it("rejects missing user", () => {
    const middleware = requireRole(RoleType.ADMIN);
    const req = createMockRequest();
    const res = createMockResponse();
    const next = createMockNext();

    middleware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(next).not.toHaveBeenCalled();
  });

  it("rejects insufficient role", () => {
    const middleware = requireRole([RoleType.ADMIN, RoleType.PROJECT_MANAGER]);
    const req = createMockRequest({ user: { sub: "1", role: RoleType.DEVELOPER } });
    const res = createMockResponse();
    const next = createMockNext();

    middleware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(next).not.toHaveBeenCalled();
  });

  it("allows matching role", () => {
    const middleware = requireRole(RoleType.DEVELOPER);
    const req = createMockRequest({ user: { sub: "2", role: RoleType.DEVELOPER } });
    const res = createMockResponse();
    const next = createMockNext();

    middleware(req, res, next);

    expect(next).toHaveBeenCalled();
  });
});
