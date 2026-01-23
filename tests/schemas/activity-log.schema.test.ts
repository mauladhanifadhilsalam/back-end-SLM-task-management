import { describe, expect, it } from "vitest";
import { ActivityTargetType } from "@prisma/client";
import {
  activityLogBulkDeleteSchema,
  activityLogQuerySchema,
} from "../../src/schemas/activity-log.schema";

describe("activity log schema", () => {
  it("requires olderThan or targetType for bulk delete", () => {
    expect(activityLogBulkDeleteSchema.safeParse({}).success).toBe(false);
    expect(
      activityLogBulkDeleteSchema.safeParse({ targetType: ActivityTargetType.USER }).success,
    ).toBe(true);
  });

  it("rejects to before from", () => {
    const parsed = activityLogQuerySchema.safeParse({ from: "2025-01-10", to: "2025-01-01" });
    expect(parsed.success).toBe(false);
  });
});
