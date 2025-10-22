import bcrypt from "bcrypt";
import { createUser } from "../src/services/user.service";
import prisma from "../src/db/prisma";

async function main() {
  console.log("Starting database seed...");

  await prisma.user.deleteMany();
  console.log("Cleared existing users");

  const password = "password123";
  const passwordHash = await bcrypt.hash(password, 10);

  await createUser({
    fullName: "Sauron",
    email: "sauron@gmail.com",
    role: "ADMIN",
    passwordHash,
  });

  await createUser({
    fullName: "Anakin Skywalker",
    email: "skywalker@gmail.com",
    role: "PROJECT_MANAGER",
    passwordHash,
  });

  await createUser({
    fullName: "Gandalf the Gray",
    email: "gandalf@yahoo.com",
    role: "DEVELOPER",
    passwordHash,
  });

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
