import { describe, expect, it } from "vitest";
import { buildPaginatedResult, resolvePagination } from "../../src/utils/pagination";

describe("resolvePagination", () => {
  it("uses defaults when input is empty", () => {
    expect(resolvePagination()).toEqual({ page: 1, pageSize: 25 });
  });

  it("normalizes invalid page and pageSize", () => {
    expect(resolvePagination({ page: 0, pageSize: -5 })).toEqual({ page: 1, pageSize: 25 });
  });

  it("caps pageSize to max", () => {
    expect(resolvePagination({ page: 2, pageSize: 999 })).toEqual({ page: 2, pageSize: 100 });
  });

  it("respects custom defaults", () => {
    expect(resolvePagination({}, { defaultPageSize: 10, maxPageSize: 20 })).toEqual({
      page: 1,
      pageSize: 10,
    });
  });
});

describe("buildPaginatedResult", () => {
  it("builds pagination metadata", () => {
    const pagination = { page: 2, pageSize: 10 };
    const result = buildPaginatedResult(["a", "b"], 35, pagination);

    expect(result.pagination).toEqual({
      total: 35,
      page: 2,
      pageSize: 10,
      totalPages: 4,
      hasNextPage: true,
      hasPrevPage: true,
    });
  });

  it("handles empty totals", () => {
    const pagination = { page: 1, pageSize: 10 };
    const result = buildPaginatedResult([], 0, pagination);

    expect(result.pagination.totalPages).toBe(0);
    expect(result.pagination.hasNextPage).toBe(false);
    expect(result.pagination.hasPrevPage).toBe(false);
  });
});
