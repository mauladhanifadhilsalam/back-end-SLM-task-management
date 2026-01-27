import { describe, expect, it } from "vitest";
import { RoleType } from "@prisma/client";
import { createMockRequest, createMockResponse } from "../../helpers/express";
import {
  getViewer,
  isAdmin,
  isDeveloper,
  isProjectManager,
  requireViewer,
  runRules,
} from "../../../src/utils/permissions/core";

describe("permissions core", () => {
  it("returns null viewer when unauthenticated", () => {
    const req = createMockRequest();
    expect(getViewer(req)).toBeNull();
  });

  it("returns null viewer when sub is invalid", () => {
    const req = createMockRequest({ user: { sub: "NaN", role: RoleType.ADMIN } });
    expect(getViewer(req)).toBeNull();
  });

  it("returns viewer when sub is valid", () => {
    const req = createMockRequest({ user: { sub: "2", role: RoleType.DEVELOPER } });
    expect(getViewer(req)).toEqual({ id: 2, role: RoleType.DEVELOPER });
  });

  it("requireViewer responds with 401 when missing", () => {
    const req = createMockRequest();
    const res = createMockResponse();

    expect(requireViewer(req, res)).toBeNull();
    expect(res.status).toHaveBeenCalledWith(401);
  });

  it("role helpers return expected flags", () => {
    const admin = { id: 1, role: RoleType.ADMIN };
    const dev = { id: 2, role: RoleType.DEVELOPER };
    const pm = { id: 3, role: RoleType.PROJECT_MANAGER };

    expect(isAdmin(admin)).toBe(true);
    expect(isDeveloper(dev)).toBe(true);
    expect(isProjectManager(pm)).toBe(true);
  });

  it("runRules evaluates any rule", () => {
    const viewer = { id: 1, role: RoleType.ADMIN };
    const rules = [() => false, () => true];

    expect(runRules(rules, viewer, {})).toBe(true);
    expect(runRules([], viewer, {})).toBe(false);
  });
});
