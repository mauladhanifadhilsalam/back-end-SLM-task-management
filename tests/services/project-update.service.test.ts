import { describe, expect, it, vi } from "vitest";

const prismaMock = vi.hoisted(() => ({
  projectUpdate: {
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

import { findProjectUpdates, createProjectUpdate } from "../../src/services/project-update.service";

describe("project-update.service", () => {
  it("finds updates with pagination", async () => {
    prismaMock.$transaction.mockResolvedValue([[{ id: 1 }], 1]);

    const result = await findProjectUpdates({});

    expect(result.pagination.total).toBe(1);
  });

  it("creates update", async () => {
    prismaMock.projectUpdate.create.mockResolvedValue({ id: 2 });

    const created = await createProjectUpdate({
      projectId: 1,
      phaseId: 2,
      facilitatorId: 3,
      participant: null,
      objective: null,
      progressHighlight: null,
      teamMood: null,
      reportDate: new Date(),
    });

    expect(created).toEqual({ id: 2 });
  });
});
