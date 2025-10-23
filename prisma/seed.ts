import prisma from "../src/db/prisma";
import seedProjectOwner from "./seeders/project-owner.seeder";
import seedProject from "./seeders/project.seeder";
import seedUser from "./seeders/user.seeder";

async function main() {
  console.log("Starting database seed...");

  await prisma.project.deleteMany();
  await prisma.projectOwner.deleteMany();
  await prisma.user.deleteMany();
  await prisma.project.deleteMany();
  console.log("Cleared existing data");

  await seedUser();
  await seedProjectOwner();
  await seedProject();

  console.log("✅ Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
