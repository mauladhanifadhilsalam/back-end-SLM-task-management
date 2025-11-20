import { hashPassword } from "../../src/utils/auth";
import { createUser } from "../../src/services/user.service";

export default async function seedUser() {
  const passwordHash = await hashPassword("password123");

  await createUser({
    fullName: "Sauron",
    email: "sauron@example.com",
    role: "ADMIN",
    passwordHash,
  });

  await createUser({
    fullName: "Anakin Skywalker",
    email: "skywalker@example.com",
    role: "PROJECT_MANAGER",
    passwordHash,
  });

  await createUser({
    fullName: "Gandalf the Gray",
    email: "gandalf@yahoo.com",
    role: "DEVELOPER",
    passwordHash,
  });

  await createUser({
    fullName: "Frodo Baggins",
    email: "frodo@example.com",
    role: "DEVELOPER",
    passwordHash,
  });

  await createUser({
    fullName: "Samwise Gamgee",
    email: "samwise@example.com",
    role: "DEVELOPER",
    passwordHash,
  });

  await createUser({
    fullName: "Legolas Greenleaf",
    email: "legolas@example.com",
    role: "DEVELOPER",
    passwordHash,
  });

  await createUser({
    fullName: "Aragorn Elessar",
    email: "aragorn@example.com",
    role: "DEVELOPER",
    passwordHash,
  });

  await createUser({
    fullName: "Bard Bowman",
    email: "bard@example.com",
    role: "DEVELOPER",
    passwordHash,
  });
}
