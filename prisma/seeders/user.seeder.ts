import { hashPassword } from "../../src/utils/auth";
import { createUser } from "../../src/services/user.service";

export default async function seedUser() {
  const passwordHash = await hashPassword("password123");

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
}
