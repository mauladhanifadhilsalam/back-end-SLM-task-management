import { describe, expect, it, vi } from "vitest";
import { TicketStatus, TicketType } from "@prisma/client";

const prismaMock = vi.hoisted(() => ({
  ticket: {
    findMany: vi.fn(),
    count: vi.fn(),
    findUnique: vi.fn(),
    create: vi.fn(),
    update: vi.fn(),
    delete: vi.fn(),
  },
  project: {
    update: vi.fn(),
  },
  user: {
    findMany: vi.fn(),
  },
  $transaction: vi.fn(),
}));

vi.mock("../../src/db/prisma", () => ({
  default: prismaMock,
}));

import { findTickets, recalculateCompletion } from "../../src/services/ticket.service";

describe("ticket.service", () => {
  it("finds tickets with pagination", async () => {
    prismaMock.$transaction.mockResolvedValue([[{ id: 1 }], 1]);

    const result = await findTickets({}, undefined);

    expect(result.pagination.total).toBe(1);
  });

  it("recalculates completion", async () => {
    prismaMock.$transaction.mockImplementation(async (fn: unknown) => {
      if (typeof fn === "function") {
        return (
          fn as (tx: {
            ticket: { count: () => Promise<number> };
            project: { update: () => Promise<{ id: number }> };
          }) => Promise<unknown>
        )({
          ticket: {
            count: vi.fn().mockResolvedValueOnce(4).mockResolvedValueOnce(2),
          },
          project: { update: vi.fn().mockResolvedValue({ id: 1 }) },
        });
      }
      return [];
    });

    const result = await recalculateCompletion(1);

    expect(result).toEqual({ id: 1 });
  });

  it("returns 0 when no tasks", async () => {
    prismaMock.$transaction.mockImplementation(async (fn: unknown) => {
      if (typeof fn === "function") {
        return (
          fn as (tx: {
            ticket: { count: () => Promise<number> };
            project: { update: () => Promise<unknown> };
          }) => Promise<unknown>
        )({
          ticket: { count: vi.fn().mockResolvedValue(0) },
          project: { update: vi.fn() },
        });
      }
      return [];
    });

    const result = await recalculateCompletion(1);

    expect(result).toBe(0);
  });
});
