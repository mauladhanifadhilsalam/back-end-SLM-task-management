import { describe, expect, it } from "vitest";
import capitalizeWord from "../../src/utils/capitalizeWord";

describe("capitalizeWord", () => {
  it("returns empty string for empty input", () => {
    expect(capitalizeWord("")).toBe("");
  });

  it("capitalizes and lowercases the rest", () => {
    expect(capitalizeWord("hELLo")).toBe("Hello");
  });

  it("handles single letters", () => {
    expect(capitalizeWord("a")).toBe("A");
  });
});
