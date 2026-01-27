import type { Request, Response, NextFunction } from "express";
import { RoleType } from "@prisma/client";
import { vi } from "vitest";

type MockResponse = Response & {
  status: ReturnType<typeof vi.fn>;
  json: ReturnType<typeof vi.fn>;
  cookie: ReturnType<typeof vi.fn>;
  clearCookie: ReturnType<typeof vi.fn>;
  send: ReturnType<typeof vi.fn>;
};

function createMockResponse(): MockResponse {
  const res = {
    status: vi.fn().mockReturnThis(),
    json: vi.fn().mockReturnThis(),
    cookie: vi.fn().mockReturnThis(),
    clearCookie: vi.fn().mockReturnThis(),
    send: vi.fn().mockReturnThis(),
  } as unknown as MockResponse;

  return res;
}

type MockUser = {
  sub: string;
  role?: RoleType;
};

type RequestOverrides = Partial<Request> & {
  user?: MockUser;
};

function createMockRequest(overrides: RequestOverrides = {}): Request {
  return { ...overrides } as Request;
}

function createMockNext(): NextFunction {
  return vi.fn();
}

export { createMockRequest, createMockResponse, createMockNext };
