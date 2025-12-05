type PaginationInput = {
  page?: number;
  pageSize?: number;
};

type PaginationConfig = {
  defaultPageSize?: number;
  maxPageSize?: number;
};

type Pagination = {
  page: number;
  pageSize: number;
};

type PaginationMeta = {
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

type PaginatedResult<T> = {
  data: T[];
  pagination: PaginationMeta;
};

const DEFAULT_PAGE = 1;
const DEFAULT_PAGE_SIZE = 25;
const MAX_PAGE_SIZE = 100;

function resolvePagination(
  input: PaginationInput = {},
  config?: PaginationConfig,
): Pagination {
  const defaultPageSize = config?.defaultPageSize ?? DEFAULT_PAGE_SIZE;
  const maxPageSize = config?.maxPageSize ?? MAX_PAGE_SIZE;

  const rawPage = Number.isInteger(input.page) ? input.page : undefined;
  const page = rawPage && rawPage > 0 ? rawPage : DEFAULT_PAGE;

  const rawPageSize = Number.isInteger(input.pageSize) ? input.pageSize : undefined;
  let pageSize =
    rawPageSize && rawPageSize > 0 ? rawPageSize : defaultPageSize;
  pageSize = Math.min(pageSize, maxPageSize);

  return { page, pageSize };
}

function buildPaginatedResult<T>(
  data: T[],
  total: number,
  pagination: Pagination,
): PaginatedResult<T> {
  const totalPages =
    pagination.pageSize > 0
      ? Math.ceil(total / pagination.pageSize)
      : 0;
  const hasNextPage = totalPages > 0 && pagination.page < totalPages;
  const hasPrevPage = pagination.page > 1 && totalPages > 0;

  return {
    data,
    pagination: {
      total,
      page: pagination.page,
      pageSize: pagination.pageSize,
      totalPages,
      hasNextPage,
      hasPrevPage,
    },
  };
}

export {
  PaginationInput,
  PaginationConfig,
  Pagination,
  PaginationMeta,
  PaginatedResult,
  resolvePagination,
  buildPaginatedResult,
};
