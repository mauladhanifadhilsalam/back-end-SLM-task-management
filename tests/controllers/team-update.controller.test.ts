import { describe, expect, it, vi, beforeEach } from "vitest";
import { RoleType, TeamUpdateStatus } from "@prisma/client";
import { createMockRequest, createMockResponse } from "../helpers/express";

vi.mock("../../src/services/team-update.service", () => ({
  findTeamUpdates: vi.fn(),
  findTeamUpdate: vi.fn(),
  createTeamUpdate: vi.fn(),
  editTeamUpdate: vi.fn(),
  deleteTeamUpdate: vi.fn(),
}));

vi.mock("../../src/services/project.service", () => ({
  findProject: vi.fn(),
}));

vi.mock("../../src/utils/permissions", () => ({
  requireViewer: vi.fn(() => ({ id: 1, role: RoleType.DEVELOPER })),
  isAdmin: vi.fn(() => false),
  isProjectManager: vi.fn(() => false),
}));

import { findProject } from "../../src/services/project.service";
import { createTeamUpdate } from "../../src/services/team-update.service";
import { insertTeamUpdate, updateTeamUpdate } from "../../src/controllers/team-update.controller";

const mockedFindProject = vi.mocked(findProject);
const mockedCreateTeamUpdate = vi.mocked(createTeamUpdate);

describe("team-update.controller", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("rejects invalid team update id", async () => {
    const req = createMockRequest({ params: { id: "0" }, body: {} });
    const res = createMockResponse();

    await updateTeamUpdate(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
  });

  it("blocks developers not assigned to the project from creating team updates", async () => {
    mockedFindProject.mockResolvedValue({
      id: 10,
      assignments: [{ user: { id: 2 } }],
    } as never);

    const req = createMockRequest({
      body: {
        projectId: 10,
        yesterdayWork: null,
        todayWork: "Worked on tasks",
        blocker: null,
        nextAction: null,
        status: TeamUpdateStatus.IN_PROGRESS,
      },
    });
    const res = createMockResponse();

    await insertTeamUpdate(req, res);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(mockedCreateTeamUpdate).not.toHaveBeenCalled();
  });
});
