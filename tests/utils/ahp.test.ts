import { describe, expect, it } from "vitest";
import { calculateAhpWeights } from "../../src/utils/ahp";

describe("calculateAhpWeights", () => {
  it("returns normalized weights for a square matrix", () => {
    const matrix = [
      [1, 1 / 3, 3],
      [3, 1, 5],
      [1 / 3, 1 / 5, 1],
    ];

    const weights = calculateAhpWeights(matrix);
    const total = weights.reduce((acc, value) => acc + value, 0);

    expect(weights).toHaveLength(3);
    expect(total).toBeCloseTo(1, 6);
  });

  it("throws when matrix is not square", () => {
    expect(() => calculateAhpWeights([[1, 2]])).toThrow("AHP matrix must be square");
  });
});
