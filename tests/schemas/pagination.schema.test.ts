import { describe, expect, it } from "vitest";
import { paginationQuerySchema } from "../../src/schemas/pagination.schema";

describe("pagination schema", () => {
  it("accepts valid pagination", () => {
    expect(paginationQuerySchema.safeParse({ page: "2", pageSize: "50" }).success).toBe(true);
  });

  it("rejects pageSize above 100", () => {
    expect(paginationQuerySchema.safeParse({ pageSize: 200 }).success).toBe(false);
  });
});
