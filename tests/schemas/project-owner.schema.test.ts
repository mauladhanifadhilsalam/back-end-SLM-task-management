import { describe, expect, it } from "vitest";
import { projectOwnerSchema } from "../../src/schemas/project-owner.schema";

describe("project owner schema", () => {
  it("accepts valid owner payload", () => {
    const parsed = projectOwnerSchema.safeParse({
      name: "Owner",
      company: "Company",
      email: "owner@example.com",
      phone: "+12345678901",
      address: "123 Street",
    });
    expect(parsed.success).toBe(true);
  });
});
