import prisma from "../db/prisma";
import { Prisma, RoleType } from "@prisma/client";

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

async function findProjects() {
  return await prisma.project.findMany({
    include: projectInclude,
    orderBy: { createdAt: "desc" },
  });
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
