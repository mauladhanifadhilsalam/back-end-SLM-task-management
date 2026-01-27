import { describe, expect, it, vi } from "vitest";
import { RoleType } from "@prisma/client";

const prismaMock = vi.hoisted(() => ({
  user: {
    findMany: vi.fn(),
    count: vi.fn(),
    findUnique: vi.fn(),
    findFirst: vi.fn(),
    create: vi.fn(),
    update: vi.fn(),
    delete: vi.fn(),
  },
  $transaction: vi.fn(),
}));

vi.mock("../../src/db/prisma", () => ({
  default: prismaMock,
}));

import { findUsers, findActiveDevelopersByIds, createUser } from "../../src/services/user.service";

describe("user.service", () => {
  it("finds users with pagination", async () => {
    prismaMock.$transaction.mockResolvedValue([[{ id: 1 }], 1]);

    const result = await findUsers({});

    expect(result.pagination.total).toBe(1);
  });

  it("finds active developers by ids", async () => {
    prismaMock.user.findMany.mockResolvedValue([{ id: 2 }]);

    const result = await findActiveDevelopersByIds([2]);

    expect(prismaMock.user.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { id: { in: [2] }, role: RoleType.DEVELOPER, isActive: true },
      }),
    );
    expect(result).toEqual([{ id: 2 }]);
  });

  it("creates user with project role ref", async () => {
    prismaMock.user.create.mockResolvedValue({ id: 3 });

    const created = await createUser({
      fullName: "User",
      role: RoleType.DEVELOPER,
      email: "user@example.com",
      passwordHash: "hash",
      projectRole: "DEV",
    });

    expect(prismaMock.user.create).toHaveBeenCalled();
    expect(created).toEqual({ id: 3 });
  });
});
