import { describe, expect, it, vi } from "vitest";

const fsMock = vi.hoisted(() => ({
  existsSync: vi.fn(() => false),
  mkdirSync: vi.fn(),
}));

vi.mock("fs", () => ({
  default: {
    existsSync: fsMock.existsSync,
    mkdirSync: fsMock.mkdirSync,
  },
  existsSync: fsMock.existsSync,
  mkdirSync: fsMock.mkdirSync,
}));

const multerMock = vi.hoisted(() => ({
  diskStorage: vi.fn((options) => options),
  multerFn: vi.fn((options) => ({ options })),
}));

vi.mock("multer", () => ({
  default: Object.assign(multerMock.multerFn, { diskStorage: multerMock.diskStorage }),
}));

import type { StorageEngine } from "multer";
import { upload } from "../../src/middleware/upload";
import env from "../../src/config/env";

describe("upload middleware", () => {
  it("creates upload dir when missing", () => {
    expect(fsMock.existsSync).toHaveBeenCalledWith(env.uploadDir);
    expect(fsMock.mkdirSync).toHaveBeenCalledWith(env.uploadDir, { recursive: true });
  });

  it("configures multer with disk storage and limits", () => {
    expect(multerMock.multerFn).toHaveBeenCalled();
    expect(upload.options.limits?.fileSize).toBe(5 * 1024 * 1024);
  });

  it("generates safe filename", () => {
    const storage = upload.options.storage as StorageEngine & {
      filename: (
        req: unknown,
        file: { originalname: string },
        cb: (err: Error | null, filename: string) => void,
      ) => void;
    };
    const cb = vi.fn();
    storage.filename({}, { originalname: "My File.txt" }, cb);

    expect(cb).toHaveBeenCalledWith(null, expect.stringMatching(/^\d+-My_File\.txt$/));
  });
});
