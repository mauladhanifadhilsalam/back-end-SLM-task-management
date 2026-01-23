import { describe, expect, it } from "vitest";
import {
  createProjectAssignmentSchema,
  projectAssignmentQuerySchema,
} from "../../src/schemas/project-assignment.schema";

describe("project assignment schema", () => {
  it("accepts create payload", () => {
    const parsed = createProjectAssignmentSchema.safeParse({ projectId: 1, userId: 2 });
    expect(parsed.success).toBe(true);
  });

  it("rejects assignedTo before assignedFrom", () => {
    const parsed = projectAssignmentQuerySchema.safeParse({
      assignedFrom: "2025-01-10",
      assignedTo: "2025-01-01",
    });
    expect(parsed.success).toBe(false);
  });
});
