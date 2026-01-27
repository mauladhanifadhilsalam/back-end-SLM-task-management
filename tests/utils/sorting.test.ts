import { describe, expect, it } from "vitest";
import { resolveSorting } from "../../src/utils/sorting";

describe("resolveSorting", () => {
  it("uses defaults when filters are empty", () => {
    expect(resolveSorting({}, "createdAt")).toEqual({ createdAt: "desc" });
  });

  it("uses provided sortBy and sortOrder", () => {
    expect(resolveSorting({ sortBy: "title", sortOrder: "asc" }, "createdAt")).toEqual({
      title: "asc",
    });
  });

  it("falls back to default sort order when missing", () => {
    expect(resolveSorting({ sortBy: "id" }, "createdAt", "asc")).toEqual({ id: "asc" });
  });
});
