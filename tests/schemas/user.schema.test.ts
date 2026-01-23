import { describe, expect, it } from "vitest";
import { userSchema, passwordSchema, changePasswordSchema } from "../../src/schemas/user.schema";

describe("user schema", () => {
  it("accepts a valid user payload", () => {
    const parsed = userSchema.safeParse({
      email: "user@example.com",
      fullName: "User",
      role: "DEVELOPER",
      password: "Aa1!aaaa",
      isActive: true,
    });
    expect(parsed.success).toBe(true);
  });

  it("rejects weak passwords", () => {
    expect(passwordSchema.safeParse("short").success).toBe(false);
  });

  it("accepts change password payload", () => {
    const parsed = changePasswordSchema.safeParse({
      password: "OldPass1!",
      newPassword: "NewPass1!",
    });
    expect(parsed.success).toBe(true);
  });
});
