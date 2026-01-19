import { hashPassword } from "../../src/utils/auth";
import { createUser } from "../../src/services/user.service";

export default async function seedUser() {
  const passwordHash = await hashPassword("password123");
  const projectRoleByEmail: Record<string, string> = {
    "gandalf@yahoo.com": "BACK_END",
    "frodo@example.com": "BACK_END",
    "samwise@example.com": "BACK_END",
    "legolas@example.com": "FRONT_END",
    "aragorn@example.com": "DEVOPS",
    "bard@example.com": "CLOUD_ENGINEER",
  };

  await createUser({
    fullName: "Support Intake",
    email: "support-intake@example.com",
    role: "PROJECT_MANAGER",
    passwordHash,
  });

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
    projectRole: projectRoleByEmail["gandalf@yahoo.com"],
    passwordHash,
  });

  await createUser({
    fullName: "Frodo Baggins",
    email: "frodo@example.com",
    role: "DEVELOPER",
    projectRole: projectRoleByEmail["frodo@example.com"],
    passwordHash,
  });

  await createUser({
    fullName: "Samwise Gamgee",
    email: "samwise@example.com",
    role: "DEVELOPER",
    projectRole: projectRoleByEmail["samwise@example.com"],
    passwordHash,
  });

  await createUser({
    fullName: "Legolas Greenleaf",
    email: "legolas@example.com",
    role: "DEVELOPER",
    projectRole: projectRoleByEmail["legolas@example.com"],
    passwordHash,
  });

  await createUser({
    fullName: "Aragorn Elessar",
    email: "aragorn@example.com",
    role: "DEVELOPER",
    projectRole: projectRoleByEmail["aragorn@example.com"],
    passwordHash,
  });

  await createUser({
    fullName: "Bard Bowman",
    email: "bard@example.com",
    role: "DEVELOPER",
    projectRole: projectRoleByEmail["bard@example.com"],
    passwordHash,
  });
}
