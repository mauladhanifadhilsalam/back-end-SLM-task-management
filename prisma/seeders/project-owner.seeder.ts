import { createProjectOwner } from "../../src/services/project-owner.service";

export default async function seedProjectOwner() {
  await createProjectOwner({
    name: "Winston Scott",
    email: "scott@example.com",
    company: "The Continental Group",
    phone: "+12125550101",
    address: "1 High Table Way, New York",
  });

  await createProjectOwner({
    name: "Vincent Bisset de Grammont",
    email: "grammont@example.com",
    company: "Grammont Holdings",
    phone: "+33123456789",
    address: "12 Rue Royale, Paris",
  });

  await createProjectOwner({
    name: "Shimazu Koji",
    email: "koji@example.com",
    company: "Osaka Continental",
    phone: "+81612345678",
    address: "88 Sakura Street, Osaka",
  });
}
