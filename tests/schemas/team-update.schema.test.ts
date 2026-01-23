import { describe, expect, it } from "vitest";
import { TeamUpdateStatus } from "@prisma/client";
import {
  createTeamUpdateSchema,
  teamUpdateQuerySchema,
} from "../../src/schemas/team-update.schema";

describe("team update schema", () => {
  it("accepts create payload", () => {
    const parsed = createTeamUpdateSchema.safeParse({
      projectId: 1,
      yesterdayWork: null,
      todayWork: "Working",
      blocker: null,
      nextAction: null,
      status: TeamUpdateStatus.IN_PROGRESS,
    });
    expect(parsed.success).toBe(true);
  });

  it("rejects createdTo before createdFrom", () => {
    const parsed = teamUpdateQuerySchema.safeParse({
      createdFrom: "2025-01-10",
      createdTo: "2025-01-01",
    });
    expect(parsed.success).toBe(false);
  });
});
