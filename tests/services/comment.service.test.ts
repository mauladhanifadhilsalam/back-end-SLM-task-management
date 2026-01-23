import { describe, expect, it, vi } from "vitest";

const prismaMock = vi.hoisted(() => ({
  comment: {
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

import { findComments, createComment } from "../../src/services/comment.service";

describe("comment.service", () => {
  it("finds comments with pagination", async () => {
    prismaMock.$transaction.mockResolvedValue([[{ id: 1 }], 1]);

    const result = await findComments({ ticketId: 1 });

    expect(result.data).toEqual([{ id: 1 }]);
  });

  it("creates comment", async () => {
    prismaMock.comment.create.mockResolvedValue({ id: 2 });

    const created = await createComment({ ticketId: 1, userId: 2, message: "Hi" });

    expect(created).toEqual({ id: 2 });
  });
});
