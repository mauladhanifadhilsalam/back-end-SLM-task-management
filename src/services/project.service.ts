import prisma from "../db/prisma";
import { Prisma, RoleType, ProjectStatus } from "@prisma/client";
import {
  buildPaginatedResult,
  resolvePagination,
  PaginatedResult,
} from "../utils/pagination";

type NewProjectInput = Pick<
  Prisma.ProjectUncheckedCreateInput,
  | "name"
  | "categories"
  | "ownerId"
  | "startDate"
  | "endDate"
  | "status"
  | "completion"
  | "notes"
  | "phases"
  | "assignments"
>;

type ProjectFilters = {
  status?: ProjectStatus;
  ownerId?: number;
  assignedUserId?: number;
  category?: string;
  page?: number;
  pageSize?: number;
};

const projectInclude = {
  owner: {
    select: {
      id: true,
      name: true,
      company: true,
      email: true,
    },
  },
  phases: {
    select: {
      id: true,
      name: true,
      startDate: true,
      endDate: true,
    },
  },
  assignments: {
    select: {
      roleInProject: true,
      user: {
        select: {
          id: true,
          fullName: true,
          email: true,
        }
      }
    }
  }
} satisfies Prisma.ProjectInclude;

type ProjectListItem = Prisma.ProjectGetPayload<{
  include: typeof projectInclude;
}>;

type ViewerContext = { id: number; role: RoleType };

function buildProjectWhere(filters: ProjectFilters = {}) {
  const { status, ownerId, assignedUserId, category } = filters;
  const where: Prisma.ProjectWhereInput = {
    ...(status ? { status } : {}),
    ...(typeof ownerId === "number" ? { ownerId } : {}),
    ...(typeof assignedUserId === "number"
      ? {
          assignments: {
            some: { userId: assignedUserId },
          },
        }
      : {}),
  };

  if (category) {
    where.categories = {
      array_contains: category,
    } as Prisma.JsonFilter;
  }

  return where;
}

function buildViewerProjectWhere(viewer?: ViewerContext) {
  if (!viewer) {
    return null;
  }

  if (
    viewer.role === RoleType.ADMIN ||
    viewer.role === RoleType.PROJECT_MANAGER
  ) {
    return null;
  }

  return {
    assignments: {
      some: { userId: viewer.id },
    },
  } satisfies Prisma.ProjectWhereInput;
}

async function findProjects(
  filters: ProjectFilters = {},
  viewer?: ViewerContext,
): Promise<PaginatedResult<ProjectListItem>> {
  const pagination = resolvePagination(filters);
  const baseWhere = buildProjectWhere(filters);
  const viewerWhere = buildViewerProjectWhere(viewer);
  const where =
    viewerWhere && Object.keys(viewerWhere).length
      ? { AND: [baseWhere, viewerWhere] }
      : baseWhere;
  const skip = (pagination.page - 1) * pagination.pageSize;

  const [items, total] = await prisma.$transaction([
    prisma.project.findMany({
      where,
      include: projectInclude,
      orderBy: { createdAt: "desc" },
      skip,
      take: pagination.pageSize,
    }),
    prisma.project.count({ where }),
  ]);

  return buildPaginatedResult(items, total, pagination);
}

async function findProject(where: Prisma.ProjectWhereUniqueInput) {
  return await prisma.project.findUnique({
    where,
    include: projectInclude,
  });
}

async function createProject(data: NewProjectInput) {
  return await prisma.project.create({
    data,
    include: projectInclude,
  });
}

async function editProject(
  id: number,
  data: Prisma.ProjectUncheckedUpdateInput,
) {
  return await prisma.project.update({
    where: { id },
    data,
    include: projectInclude,
  });
}

async function deleteProject(id: number) {
  return await prisma.project.delete({
    where: { id },
  });
}

async function verifyUsersExist(userIds: number[]) {
  if (!userIds.length) return { allExist: true, missingUserIds: [] };

  const users = await prisma.user.findMany({
    where: {
      id: { in: userIds },
      role: {
        in: [RoleType.PROJECT_MANAGER, RoleType.DEVELOPER],
      },
    },
    select: { id: true },
  });

  const foundIds = new Set(users.map(u => u.id));
  const missingUserIds = userIds.filter(id => !foundIds.has(id));

  return {
    allExist: missingUserIds.length === 0,
    missingUserIds,
  };
}


export { findProjects, findProject, createProject, editProject, deleteProject, verifyUsersExist };
