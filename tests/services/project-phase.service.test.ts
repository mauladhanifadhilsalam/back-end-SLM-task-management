import { describe, expect, it, vi } from "vitest";

const prismaMock = vi.hoisted(() => ({
  projectPhase: {
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

import { findProjectPhases, createProjectPhase } from "../../src/services/project-phase.service";

describe("project-phase.service", () => {
  it("finds phases with pagination", async () => {
    prismaMock.$transaction.mockResolvedValue([[{ id: 1 }], 1]);

    const result = await findProjectPhases({});

    expect(result.pagination.total).toBe(1);
  });

  it("creates a phase", async () => {
    prismaMock.projectPhase.create.mockResolvedValue({ id: 2 });

    const created = await createProjectPhase({
      name: "Phase",
      startDate: new Date(),
      endDate: new Date(),
      projectId: 1,
    });

    expect(created).toEqual({ id: 2 });
  });
});
