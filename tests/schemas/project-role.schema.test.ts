import { describe, expect, it } from "vitest";
import { projectRoleSchema, projectRoleUpdateSchema } from "../../src/schemas/project-role.schema";

describe("project role schema", () => {
  it("accepts create payload", () => {
    expect(projectRoleSchema.safeParse({ code: "DEV", name: "Developer" }).success).toBe(true);
  });

  it("requires at least one field on update", () => {
    expect(projectRoleUpdateSchema.safeParse({}).success).toBe(false);
    expect(projectRoleUpdateSchema.safeParse({ name: "Lead" }).success).toBe(true);
  });
});
