import { describe, expect, it, vi } from "vitest";

const prismaMock = vi.hoisted(() => ({
  projectAssignment: {
    findMany: vi.fn(),
    count: vi.fn(),
    findUnique: vi.fn(),
    create: vi.fn(),
    delete: vi.fn(),
  },
  $transaction: vi.fn(),
}));

vi.mock("../../src/db/prisma", () => ({
  default: prismaMock,
}));

import {
  findProjectAssignments,
  createProjectAssignment,
} from "../../src/services/project-assignment.service";

describe("project-assignment.service", () => {
  it("finds assignments with pagination", async () => {
    prismaMock.$transaction.mockResolvedValue([[{ id: 1 }], 1]);

    const result = await findProjectAssignments({});

    expect(result.pagination.total).toBe(1);
  });

  it("creates assignment", async () => {
    prismaMock.projectAssignment.create.mockResolvedValue({ id: 2 });

    const created = await createProjectAssignment({ projectId: 1, userId: 2 });

    expect(created).toEqual({ id: 2 });
  });
});
