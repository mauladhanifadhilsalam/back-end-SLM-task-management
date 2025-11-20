import prisma from "../db/prisma";
import { Prisma } from "@prisma/client";

type NewProjectPhaseInput = Pick<
  Prisma.ProjectPhaseUncheckedCreateInput,
  "name" | "startDate" | "endDate" | "projectId"
>;

const projectPhaseInclude = {
  project: {
    select: {
      id: true,
      name: true,
      status: true,
      startDate: true,
      endDate: true,
    },
  },
} satisfies Prisma.ProjectPhaseInclude;

async function findProjectPhases(
  where?: Prisma.ProjectPhaseWhereInput,
  orderBy: Prisma.ProjectPhaseOrderByWithRelationInput = {
    startDate: "asc",
  },
) {
  return await prisma.projectPhase.findMany({
    where,
    include: projectPhaseInclude,
    orderBy,
  });
}

async function findProjectPhase(
  where: Prisma.ProjectPhaseWhereUniqueInput,
) {
  return await prisma.projectPhase.findUnique({
    where,
    include: projectPhaseInclude,
  });
}

async function createProjectPhase(data: NewProjectPhaseInput) {
  return await prisma.projectPhase.create({
    data,
    include: projectPhaseInclude,
  });
}

async function editProjectPhase(
  id: number,
  data: Prisma.ProjectPhaseUncheckedUpdateInput,
) {
  return await prisma.projectPhase.update({
    where: { id },
    data,
    include: projectPhaseInclude,
  });
}

async function deleteProjectPhase(id: number) {
  return await prisma.projectPhase.delete({
    where: { id },
  });
}

export {
  findProjectPhases,
  findProjectPhase,
  createProjectPhase,
  editProjectPhase,
  deleteProjectPhase,
};
