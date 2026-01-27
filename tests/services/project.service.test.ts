import { describe, expect, it, vi } from "vitest";
import { RoleType } from "@prisma/client";

const prismaMock = vi.hoisted(() => ({
  project: {
    findMany: vi.fn(),
    count: vi.fn(),
    findUnique: vi.fn(),
    create: vi.fn(),
    update: vi.fn(),
    delete: vi.fn(),
  },
  user: { findMany: vi.fn() },
  $transaction: vi.fn(),
}));

vi.mock("../../src/db/prisma", () => ({
  default: prismaMock,
}));

import { findProjects, verifyUsersExist } from "../../src/services/project.service";

describe("project.service", () => {
  it("finds projects with pagination", async () => {
    prismaMock.$transaction.mockResolvedValue([[{ id: 1 }], 1]);

    const result = await findProjects({}, { id: 1, role: RoleType.ADMIN });

    expect(result.pagination.total).toBe(1);
  });

  it("verifies users exist", async () => {
    prismaMock.user.findMany.mockResolvedValue([{ id: 2 }]);

    const result = await verifyUsersExist([2, 3]);

    expect(result.allExist).toBe(false);
    expect(result.missingUserIds).toEqual([3]);
  });
});
