import { describe, expect, it, vi } from "vitest";

const prismaMock = vi.hoisted(() => ({
  attachment: {
    findMany: vi.fn(),
    count: vi.fn(),
    findUnique: vi.fn(),
    create: vi.fn(),
    delete: vi.fn(),
  },
  $transaction: vi.fn(),
}));

vi.mock("../../src/db/prisma", () => ({
  default: prismaMock,
}));

import { findAttachments, createAttachment } from "../../src/services/attachment.service";

describe("attachment.service", () => {
  it("finds attachments with pagination", async () => {
    prismaMock.$transaction.mockResolvedValue([[{ id: 1 }], 1]);

    const result = await findAttachments({ ticketId: 2, page: 1, pageSize: 10 });

    expect(prismaMock.$transaction).toHaveBeenCalled();
    expect(result.data).toEqual([{ id: 1 }]);
    expect(result.pagination.total).toBe(1);
  });

  it("creates attachment", async () => {
    prismaMock.attachment.create.mockResolvedValue({ id: 1 });

    const created = await createAttachment({
      ticketId: 1,
      userId: 2,
      fileName: "file.txt",
      filePath: "uploads/file.txt",
      fileSize: 10,
      mimeType: "text/plain",
    });

    expect(prismaMock.attachment.create).toHaveBeenCalled();
    expect(created).toEqual({ id: 1 });
  });
});
