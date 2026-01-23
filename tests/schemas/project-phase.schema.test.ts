import { describe, expect, it } from "vitest";
import {
  createProjectPhaseSchema,
  projectPhaseQuerySchema,
} from "../../src/schemas/project-phase.schema";

describe("project phase schema", () => {
  it("rejects endDate before startDate", () => {
    const parsed = createProjectPhaseSchema.safeParse({
      name: "Phase 1",
      projectId: 1,
      startDate: "2025-02-10",
      endDate: "2025-02-01",
    });
    expect(parsed.success).toBe(false);
  });

  it("rejects endBefore before startAfter", () => {
    const parsed = projectPhaseQuerySchema.safeParse({
      startAfter: "2025-02-10",
      endBefore: "2025-02-01",
    });
    expect(parsed.success).toBe(false);
  });
});
