export type SortOrder = "asc" | "desc";

export type SortInput<TField extends string = string> = {
  sortBy?: TField;
  sortOrder?: SortOrder;
};

export function resolveSorting<TField extends string>(
  filters: SortInput<TField>,
  defaultSortBy: TField,
  defaultSortOrder: SortOrder = "desc",
) {
  const sortBy = filters.sortBy ?? defaultSortBy;
  const sortOrder = filters.sortOrder ?? defaultSortOrder;

  return { [sortBy]: sortOrder } as Record<string, SortOrder>;
}
