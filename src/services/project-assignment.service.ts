import prisma from "../db/prisma";
import { Prisma, ProjectRoleType } from "@prisma/client";

type ProjectAssignmentFilters = {
  projectId?: number;
  userId?: number;
};

type NewProjectAssignmentInput = {
  projectId: number;
  userId: number;
  roleInProject: ProjectRoleType;
};

const projectAssignmentInclude = {
  user: {
    select: {
      id: true,
      fullName: true,
      email: true,
      role: true,
    },
  },
  project: {
    select: {
      id: true,
      name: true,
      status: true,
      startDate: true,
      endDate: true,
    },
  },
} satisfies Prisma.ProjectAssignmentInclude;

async function findProjectAssignments(
  filters: ProjectAssignmentFilters = {},
) {
  const { projectId, userId } = filters;

  return prisma.projectAssignment.findMany({
    where: {
      ...(typeof projectId === "number" ? { projectId } : {}),
      ...(typeof userId === "number" ? { userId } : {}),
    },
    include: projectAssignmentInclude,
    orderBy: { assignedAt: "desc" },
  });
}

async function findProjectAssignment(
  where: Prisma.ProjectAssignmentWhereUniqueInput,
) {
  return prisma.projectAssignment.findUnique({
    where,
    include: projectAssignmentInclude,
  });
}

async function createProjectAssignment(data: NewProjectAssignmentInput) {
  return prisma.projectAssignment.create({
    data,
    include: projectAssignmentInclude,
  });
}

async function deleteProjectAssignment(id: number) {
  return prisma.projectAssignment.delete({
    where: { id },
  });
}

export {
  findProjectAssignments,
  findProjectAssignment,
  createProjectAssignment,
  deleteProjectAssignment,
};
export type { ProjectAssignmentFilters, NewProjectAssignmentInput };
