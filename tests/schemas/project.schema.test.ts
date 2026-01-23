import { describe, expect, it } from "vitest";
import { ProjectStatus } from "@prisma/client";
import { createProjectSchema, projectQuerySchema } from "../../src/schemas/project.schema";

describe("project schema", () => {
  it("rejects endDate before startDate", () => {
    const parsed = createProjectSchema.safeParse({
      name: "Project",
      categories: ["web"],
      ownerId: 1,
      startDate: "2025-02-10",
      endDate: "2025-02-01",
      phases: [{ name: "Phase", startDate: "2025-02-10", endDate: "2025-02-11" }],
    });
    expect(parsed.success).toBe(false);
  });

  it("accepts query params", () => {
    const parsed = projectQuerySchema.safeParse({ status: ProjectStatus.ACTIVE, page: "1" });
    expect(parsed.success).toBe(true);
  });
});
