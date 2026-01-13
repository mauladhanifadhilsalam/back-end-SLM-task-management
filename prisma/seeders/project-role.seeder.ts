import prisma from "../../src/db/prisma";

const projectRoles = [
  { code: "TECH_LEAD", name: "Tech Lead" },
  { code: "FRONT_END", name: "Front End" },
  { code: "BACK_END", name: "Back End" },
  { code: "DEVOPS", name: "DevOps" },
  { code: "CLOUD_ENGINEER", name: "Cloud Engineer" },
];

export default async function seedProjectRole() {
  await prisma.projectRole.createMany({
    data: projectRoles,
    skipDuplicates: true,
  });
}
