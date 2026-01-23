import { describe, expect, it } from "vitest";
import { baseQuerySchema } from "../../src/schemas/base.schema";

describe("base schema", () => {
  it("accepts valid sort order", () => {
    expect(baseQuerySchema.safeParse({ sortOrder: "asc" }).success).toBe(true);
  });

  it("rejects invalid sort order", () => {
    expect(baseQuerySchema.safeParse({ sortOrder: "up" }).success).toBe(false);
  });
});
