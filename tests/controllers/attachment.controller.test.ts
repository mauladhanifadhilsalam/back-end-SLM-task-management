import { describe, expect, it, vi } from "vitest";
import { RoleType } from "@prisma/client";
import { createMockRequest, createMockResponse } from "../helpers/express";

vi.mock("../../src/services/attachment.service", () => ({
  findAttachments: vi.fn(),
  findAttachment: vi.fn(),
  createAttachment: vi.fn(),
  deleteAttachment: vi.fn(),
}));

vi.mock("../../src/services/ticket.service", () => ({
  findTicket: vi.fn(),
}));

vi.mock("../../src/utils/permissions", () => ({
  requireViewer: vi.fn(() => ({ id: 1, role: RoleType.ADMIN })),
  canModifyTicket: vi.fn(),
  isAdmin: vi.fn(() => true),
}));

vi.mock("fs/promises", () => ({
  unlink: vi.fn(),
  readFile: vi.fn(),
}));

import { addAttachment } from "../../src/controllers/attachment.controller";

describe("attachment.controller", () => {
  it("rejects when file is missing", async () => {
    const req = createMockRequest({ body: { ticketId: 1 } });
    const res = createMockResponse();

    await addAttachment(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
  });
});
