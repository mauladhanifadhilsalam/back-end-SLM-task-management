import { describe, expect, it } from "vitest";
import { loginSchema, refreshTokenRequestSchema } from "../../src/schemas/auth.schema";

describe("auth schemas", () => {
  it("accepts valid login payload", () => {
    const parsed = loginSchema.safeParse({ email: "user@example.com", password: "secret" });
    expect(parsed.success).toBe(true);
  });

  it("rejects invalid login payload", () => {
    const parsed = loginSchema.safeParse({ email: "not-an-email" });
    expect(parsed.success).toBe(false);
  });

  it("allows optional refresh token", () => {
    expect(refreshTokenRequestSchema.safeParse({}).success).toBe(true);
    expect(refreshTokenRequestSchema.safeParse({ refreshToken: "token" }).success).toBe(true);
  });
});
