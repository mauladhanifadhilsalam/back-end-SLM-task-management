import { describe, expect, it, vi } from "vitest";

const prismaMock = vi.hoisted(() => ({
  projectRole: {
    findUnique: vi.fn(),
    findMany: vi.fn(),
    count: vi.fn(),
    create: vi.fn(),
    update: vi.fn(),
    delete: vi.fn(),
  },
  $transaction: vi.fn(),
}));

vi.mock("../../src/db/prisma", () => ({
  default: prismaMock,
}));

import { findProjectRoleByCode, findProjectRoles } from "../../src/services/project-role.service";

describe("project-role.service", () => {
  it("finds role by code", async () => {
    prismaMock.projectRole.findUnique.mockResolvedValue({ code: "DEV" });

    const result = await findProjectRoleByCode("DEV");

    expect(prismaMock.projectRole.findUnique).toHaveBeenCalledWith({ where: { code: "DEV" } });
    expect(result).toEqual({ code: "DEV" });
  });

  it("finds roles with pagination", async () => {
    prismaMock.$transaction.mockResolvedValue([[{ id: 1 }], 1]);

    const result = await findProjectRoles({});

    expect(result.pagination.total).toBe(1);
  });
});
