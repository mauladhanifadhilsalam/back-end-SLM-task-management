import prisma from "../db/prisma";
import { Prisma, TeamUpdate } from "@prisma/client";
import { buildPaginatedResult, resolvePagination, PaginatedResult } from "../utils/pagination";
import { resolveSorting } from "../utils/sorting";
import { z } from "zod";
import { teamUpdateQuerySchema } from "../schemas/team-update.schema";

type TeamUpdateFilters = z.infer<typeof teamUpdateQuerySchema>;
type TeamUpdateSortBy = keyof TeamUpdate;

type NewTeamUpdateInput = Pick<
  Prisma.TeamUpdateCreateInput,
  "yesterdayWork" | "todayWork" | "blocker" | "nextAction" | "status"
> & {
  userId: number;
};

const teamUpdateInclude = {
  developer: {
    select: {
      id: true,
      fullName: true,
      email: true,
      role: true,
    },
  },
} satisfies Prisma.TeamUpdateInclude;

type TeamUpdateListItem = Prisma.TeamUpdateGetPayload<{
  include: typeof teamUpdateInclude;
}>;

function buildTeamUpdateWhere(filters: TeamUpdateFilters = {}): Prisma.TeamUpdateWhereInput {
  const { userId, createdFrom, createdTo, status } = filters;

  const where: Prisma.TeamUpdateWhereInput = {
    ...(typeof userId === "number" ? { userId } : {}),
    ...(status ? { status } : {}),
  };

  if (createdFrom || createdTo) {
    where.createdAt = {
      ...(createdFrom ? { gte: createdFrom } : {}),
      ...(createdTo ? { lte: createdTo } : {}),
    };
  }

  return where;
}

async function findTeamUpdates(
  filters: TeamUpdateFilters = {},
): Promise<PaginatedResult<TeamUpdateListItem>> {
  const where = buildTeamUpdateWhere(filters);

  const pagination = resolvePagination(filters);
  const orderBy = resolveSorting<TeamUpdateSortBy>(filters, "createdAt", "asc");
  const skip = (pagination.page - 1) * pagination.pageSize;

  const [items, total] = await prisma.$transaction([
    prisma.teamUpdate.findMany({
      where,
      include: teamUpdateInclude,
      orderBy,
      skip,
      take: pagination.pageSize,
    }),
    prisma.teamUpdate.count({ where }),
  ]);

  return buildPaginatedResult(items, total, pagination);
}

async function findTeamUpdate(where: Prisma.TeamUpdateWhereUniqueInput) {
  return prisma.teamUpdate.findUnique({
    where,
    include: teamUpdateInclude,
  });
}

async function createTeamUpdate(data: NewTeamUpdateInput) {
  return prisma.teamUpdate.create({
    data,
    include: teamUpdateInclude,
  });
}

async function editTeamUpdate(id: number, data: Prisma.TeamUpdateUpdateInput) {
  return prisma.teamUpdate.update({
    where: { id },
    data,
    include: teamUpdateInclude,
  });
}

async function deleteTeamUpdate(id: number) {
  return prisma.teamUpdate.delete({
    where: { id },
  });
}

export { findTeamUpdates, findTeamUpdate, createTeamUpdate, editTeamUpdate, deleteTeamUpdate };
