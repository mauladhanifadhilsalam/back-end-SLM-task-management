import { describe, expect, it, vi } from "vitest";

const mailerMock = vi.hoisted(() => {
  const verify = vi.fn();
  const createTransport = vi.fn(() => ({ verify }));
  return { verify, createTransport };
});

vi.mock("nodemailer", () => ({
  default: { createTransport: mailerMock.createTransport },
}));

import env from "../../src/config/env";
import { transporter } from "../../src/utils/transporter";

describe("transporter", () => {
  it("creates a transporter with configured host and port", () => {
    expect(mailerMock.createTransport).toHaveBeenCalledWith(
      expect.objectContaining({
        host: env.emailHost,
        port: env.emailPort,
        auth: { user: env.emailUser, pass: env.emailPass },
      }),
    );
  });

  it("verifies the transporter on init", () => {
    expect(mailerMock.verify).toHaveBeenCalled();
    expect(transporter).toBeDefined();
  });
});
