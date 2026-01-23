import { describe, expect, it, vi } from "vitest";
import { RoleType } from "@prisma/client";

vi.mock("../../src/services/project.service", () => ({
  findProject: vi.fn(),
}));

vi.mock("../../src/services/ticket.service", () => ({
  createTicket: vi.fn(),
}));

vi.mock("../../src/services/ticket-assignee.service", () => ({
  findLatestAssigneeForProject: vi.fn(),
  findLeastLoadedAssignees: vi.fn(),
}));

vi.mock("../../src/services/user.service", () => ({
  findAnyUser: vi.fn(),
  findActiveDevelopersByIds: vi.fn(),
  findActiveUserByEmail: vi.fn(),
}));

vi.mock("../../src/utils/permissions", () => ({
  isAdmin: vi.fn(() => true),
  isProjectManager: vi.fn(() => false),
}));

import { createTicketFromEmail } from "../../src/services/email-ticket.service";
import { findProject } from "../../src/services/project.service";
import { createTicket } from "../../src/services/ticket.service";
import {
  findLatestAssigneeForProject,
  findLeastLoadedAssignees,
} from "../../src/services/ticket-assignee.service";
import { findActiveDevelopersByIds, findActiveUserByEmail } from "../../src/services/user.service";

describe("email-ticket.service", () => {
  it("creates ticket from email when possible", async () => {
    vi.mocked(findProject).mockResolvedValue({
      id: 1,
      assignments: [{ user: { id: 2 } }],
    } as { id: number; assignments: { user?: { id: number } }[] });

    vi.mocked(findActiveUserByEmail).mockResolvedValue({
      id: 9,
      role: RoleType.ADMIN,
      isActive: true,
    } as { id: number; role: RoleType; isActive: boolean });
    vi.mocked(findActiveDevelopersByIds).mockResolvedValue([{ id: 2 } as { id: number }]);
    vi.mocked(findLeastLoadedAssignees).mockResolvedValue([2]);
    vi.mocked(findLatestAssigneeForProject).mockResolvedValue(null);
    vi.mocked(createTicket).mockResolvedValue({ id: 123 } as { id: number });

    const result = await createTicketFromEmail({
      subject: "Help",
      body: "Body",
      fromEmail: "admin@example.com",
      messageId: "msg-1",
    });

    expect(createTicket).toHaveBeenCalled();
    expect(result).toEqual({ id: 123 });
  });
});
