import { describe, expect, it } from "vitest";
import {
  commentQuerySchema,
  createCommentSchema,
  updateCommentSchema,
} from "../../src/schemas/comment.schema";

describe("comment schema", () => {
  it("accepts create payload", () => {
    const parsed = createCommentSchema.safeParse({ ticketId: 1, message: "Hi" });
    expect(parsed.success).toBe(true);
  });

  it("rejects createdTo before createdFrom", () => {
    const parsed = commentQuerySchema.safeParse({
      createdFrom: "2025-01-10",
      createdTo: "2025-01-01",
    });
    expect(parsed.success).toBe(false);
  });

  it("accepts update payload", () => {
    const parsed = updateCommentSchema.safeParse({ message: "Updated" });
    expect(parsed.success).toBe(true);
  });
});
