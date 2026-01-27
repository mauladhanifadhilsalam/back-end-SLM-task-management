import { describe, expect, it, vi } from "vitest";

const prismaMock = vi.hoisted(() => ({
  projectOwner: {
    findMany: vi.fn(),
    count: vi.fn(),
    findUnique: vi.fn(),
    create: vi.fn(),
    update: vi.fn(),
    delete: vi.fn(),
  },
  $transaction: vi.fn(),
}));

vi.mock("../../src/db/prisma", () => ({
  default: prismaMock,
}));

import { findProjectOwners, createProjectOwner } from "../../src/services/project-owner.service";

describe("project-owner.service", () => {
  it("finds owners with pagination", async () => {
    prismaMock.$transaction.mockResolvedValue([[{ id: 1 }], 1]);

    const result = await findProjectOwners({});

    expect(result.pagination.total).toBe(1);
  });

  it("creates project owner", async () => {
    prismaMock.projectOwner.create.mockResolvedValue({ id: 2 });

    const created = await createProjectOwner({
      name: "Owner",
      company: "Company",
      email: "owner@example.com",
      phone: "+1234567890",
      address: "Addr",
    });

    expect(created).toEqual({ id: 2 });
  });
});
