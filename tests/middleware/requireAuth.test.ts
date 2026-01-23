import { describe, expect, it } from "vitest";
import jwt from "jsonwebtoken";
import { RoleType } from "@prisma/client";
import requireAuth from "../../src/middleware/requireAuth";
import env from "../../src/config/env";
import { createMockNext, createMockRequest, createMockResponse } from "../helpers/express";

describe("requireAuth", () => {
  it("rejects missing authorization header", () => {
    const req = createMockRequest({ header: () => "" });
    const res = createMockResponse();
    const next = createMockNext();

    requireAuth(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(next).not.toHaveBeenCalled();
  });

  it("rejects invalid scheme", () => {
    const req = createMockRequest({ header: () => "Token abc" });
    const res = createMockResponse();
    const next = createMockNext();

    requireAuth(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(next).not.toHaveBeenCalled();
  });

  it("rejects token with invalid role", () => {
    const token = jwt.sign({ sub: "1", role: "NOT_A_ROLE" }, env.jwtSecret);
    const req = createMockRequest({ header: () => `Bearer ${token}` });
    const res = createMockResponse();
    const next = createMockNext();

    requireAuth(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(next).not.toHaveBeenCalled();
  });

  it("attaches user and calls next", () => {
    const token = jwt.sign({ sub: "7", role: RoleType.ADMIN }, env.jwtSecret);
    const req = createMockRequest({ header: () => `Bearer ${token}` });
    const res = createMockResponse();
    const next = createMockNext();

    requireAuth(req, res, next);

    expect(req.user).toEqual({ sub: "7", role: RoleType.ADMIN });
    expect(next).toHaveBeenCalled();
  });
});
