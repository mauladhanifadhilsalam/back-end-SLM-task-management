import prisma from "../db/prisma";
import { Prisma } from "@prisma/client";

type NewProjectOwnerInput = Pick<
  Prisma.ProjectOwnerCreateInput,
  "name" | "company" | "email" | "phone" | "address"
>;

async function findProjectOwners() {
  return await prisma.projectOwner.findMany();
}

async function findProjectOwner(where: Prisma.ProjectOwnerWhereUniqueInput) {
  return await prisma.projectOwner.findUnique({ where });
}

async function createProjectOwner({
  name,
  company,
  email,
  phone,
  address,
}: NewProjectOwnerInput) {
  return await prisma.projectOwner.create({
    data: {
      name,
      company,
      email,
      phone,
      address,
    },
    select: {
      id: true,
      name: true,
      company: true,
      createdAt: true,
    },
  });
}

async function editProjectOwner(
  id: number,
  data: Prisma.ProjectOwnerUpdateInput,
) {
  return await prisma.projectOwner.update({
    where: { id },
    data,
  });
}

async function deleteProjectOwner(id: number) {
  return await prisma.projectOwner.delete({ where: { id } });
}

export {
  findProjectOwners,
  findProjectOwner,
  createProjectOwner,
  editProjectOwner,
  deleteProjectOwner,
};
