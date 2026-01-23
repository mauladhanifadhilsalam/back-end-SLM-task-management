import { describe, expect, it } from "vitest";
import { TicketPriority, TicketStatus, TicketType } from "@prisma/client";
import {
  createTicketSchema,
  ticketQuerySchema,
  updateTicketSchema,
} from "../../src/schemas/ticket.schema";

describe("ticket schemas", () => {
  it("rejects dueTo before dueFrom in query", () => {
    const parsed = ticketQuerySchema.safeParse({
      dueFrom: "2025-01-10",
      dueTo: "2025-01-01",
    });
    expect(parsed.success).toBe(false);
  });

  it("accepts valid create payload", () => {
    const parsed = createTicketSchema.safeParse({
      projectId: 1,
      requesterId: 2,
      type: TicketType.TASK,
      title: "Fix",
      description: null,
      actionPlan: null,
      priority: TicketPriority.HIGH,
      status: TicketStatus.OPEN,
      startDate: "2025-01-01",
      dueDate: "2025-01-10",
      assigneeIds: [3],
    });

    expect(parsed.success).toBe(true);
  });

  it("rejects update payload with due date before start", () => {
    const parsed = updateTicketSchema.safeParse({
      startDate: "2025-02-10",
      dueDate: "2025-02-01",
    });
    expect(parsed.success).toBe(false);
  });
});
