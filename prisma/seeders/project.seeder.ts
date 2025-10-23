import { ProjectStatus } from "../../src/generated/prisma";
import { createProject } from "../../src/services/project.service";
import { findProjectOwner } from "../../src/services/project-owner.service";

export default async function seedProject() {
  const winston = await findProjectOwner({ email: "scott@gmail.com" });
  if (winston) {
    await createProject({
      name: "Project Obsidian — Identity Federation & Secure Access",
      categories: ["Security", "Infrastructure", "Platform"],
      ownerId: winston.id,
      startDate: new Date("2025-01-06"),
      endDate: new Date("2025-04-11"),
      status: ProjectStatus.IN_PROGRESS,
      completion: 42.5,
      notes:
        "MFA rollout blocked on legacy ERP app; dependency on Infra for reverse proxy rule changes. Zero-trust enforcement date: April 5.",
    });
  }

  const grammont = await findProjectOwner({ email: "grammont@gmail.com" });
  if (grammont) {
    await createProject({
      name: "Project Velvet — Client Experience & Commerce Layer",
      categories: ["Web", "Mobile", "Commerce"],
      ownerId: grammont.id,
      startDate: new Date("2025-02-03"),
      endDate: new Date("2025-05-30"),
      status: ProjectStatus.NOT_STARTED,
      completion: 0,
      notes:
        "Checkout flow requires payment gateway approval (ETA Feb 15). Mobile team must deliver loyalty SDK before Interface phase. Launch tied to Q2 client summit.",
    });
  }

  const koji = await findProjectOwner({ email: "koji@gmail.com" });
  if (koji) {
    await createProject({
      name: "Project Kintsugi — Sensor Grid & Ops Intelligence",
      categories: ["IoT", "Data", "Analytics"],
      ownerId: koji.id,
      startDate: new Date("2024-11-11"),
      endDate: new Date("2025-04-25"),
      status: ProjectStatus.IN_PROGRESS,
      completion: 64.0,
      notes:
        "Sensor network depends on finalizing TLS cert rotation policy. Data retention SLA under legal review. No downtime allowed during migration window.",
    });
  }
}
