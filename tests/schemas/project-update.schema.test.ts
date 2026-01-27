import { describe, expect, it } from "vitest";
import {
  projectUpdateQuerySchema,
  createProjectUpdateSchema,
} from "../../src/schemas/project-update.schema";

describe("project update schema", () => {
  it("accepts create payload", () => {
    const parsed = createProjectUpdateSchema.safeParse({
      projectId: 1,
      phaseId: 2,
      participant: null,
      objective: null,
      progressHighlight: null,
      teamMood: null,
      reportDate: "2025-02-01",
    });
    expect(parsed.success).toBe(true);
  });

  it("rejects createdTo before createdFrom", () => {
    const parsed = projectUpdateQuerySchema.safeParse({
      createdFrom: "2025-03-10",
      createdTo: "2025-03-01",
    });
    expect(parsed.success).toBe(false);
  });
});
