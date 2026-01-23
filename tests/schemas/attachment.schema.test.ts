import { describe, expect, it } from "vitest";
import { attachmentQuerySchema, createAttachmentSchema } from "../../src/schemas/attachment.schema";

describe("attachment schema", () => {
  it("accepts create payload", () => {
    const parsed = createAttachmentSchema.safeParse({ ticketId: "1" });
    expect(parsed.success).toBe(true);
  });

  it("rejects uploadedTo before uploadedFrom", () => {
    const parsed = attachmentQuerySchema.safeParse({
      uploadedFrom: "2025-02-10",
      uploadedTo: "2025-02-01",
    });
    expect(parsed.success).toBe(false);
  });
});
