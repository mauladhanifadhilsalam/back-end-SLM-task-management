import prisma from "../db/prisma";
import { Prisma } from "../generated/prisma";

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

export { findProjects, findProject, createProject, editProject, deleteProject };
