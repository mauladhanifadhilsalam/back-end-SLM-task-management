import { describe, expect, it } from "vitest";
import {
  createTicketAssigneeSchema,
  ticketAssigneeQuerySchema,
} from "../../src/schemas/ticket-assignee.schema";

describe("ticket assignee schema", () => {
  it("accepts create payload", () => {
    const parsed = createTicketAssigneeSchema.safeParse({ ticketId: 1, userId: 2 });
    expect(parsed.success).toBe(true);
  });

  it("rejects assignedTo before assignedFrom", () => {
    const parsed = ticketAssigneeQuerySchema.safeParse({
      assignedFrom: "2025-01-10",
      assignedTo: "2025-01-01",
    });
    expect(parsed.success).toBe(false);
  });
});
