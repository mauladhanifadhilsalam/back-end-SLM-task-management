import { ProjectStatus } from "../../src/generated/prisma";
import { createProject } from "../../src/services/project.service";
import { findProjectOwner } from "../../src/services/project-owner.service";

export default async function seedProject() {
  const projects = [
    {
      ownerEmail: "scott@gmail.com",
      name: "Project Obsidian — Identity Federation & Secure Access",
      categories: ["Security", "Infrastructure", "Platform"],
      startDate: "2025-01-06",
      endDate: "2025-04-11",
      status: ProjectStatus.IN_PROGRESS,
      completion: 42.5,
      notes:
        "MFA rollout blocked on legacy ERP app; dependency on Infra for reverse proxy rule changes. Zero-trust enforcement date: April 5.",
      phases: [
        {
          name: "Reconnaissance",
          startDate: "2025-01-06",
          endDate: "2025-01-17",
        },
        { name: "Foundation", startDate: "2025-01-20", endDate: "2025-02-14" },
        { name: "Execution", startDate: "2025-02-17", endDate: "2025-03-21" },
        { name: "Final Seal", startDate: "2025-03-24", endDate: "2025-04-11" },
      ],
    },
    {
      ownerEmail: "grammont@gmail.com",
      name: "Project Velvet — Client Experience & Commerce Layer",
      categories: ["Web", "Mobile", "Commerce"],
      startDate: "2025-02-03",
      endDate: "2025-05-30",
      status: ProjectStatus.NOT_STARTED,
      completion: 0,
      notes:
        "Checkout flow requires payment gateway approval (ETA Feb 15). Mobile team must deliver loyalty SDK before Interface phase. Launch tied to Q2 client summit.",
      phases: [
        { name: "Blueprint", startDate: "2025-02-03", endDate: "2025-02-14" },
        { name: "Core Layer", startDate: "2025-02-17", endDate: "2025-03-21" },
        { name: "Interface", startDate: "2025-03-24", endDate: "2025-04-25" },
        {
          name: "Silent Launch",
          startDate: "2025-04-28",
          endDate: "2025-05-30",
        },
      ],
    },
    {
      ownerEmail: "koji@gmail.com",
      name: "Project Kintsugi — Sensor Grid & Ops Intelligence",
      categories: ["IoT", "Data", "Analytics"],
      startDate: "2024-11-11",
      endDate: "2025-04-25",
      status: ProjectStatus.IN_PROGRESS,
      completion: 64.0,
      notes:
        "Sensor network depends on finalizing TLS cert rotation policy. Data retention SLA under legal review. No downtime allowed during migration window.",
      phases: [
        {
          name: "Signal Capture",
          startDate: "2024-11-11",
          endDate: "2024-12-20",
        },
        {
          name: "Stream Control",
          startDate: "2025-01-06",
          endDate: "2025-02-07",
        },
        {
          name: "Intelligence Layer",
          startDate: "2025-02-10",
          endDate: "2025-03-21",
        },
        { name: "Vigil", startDate: "2025-03-24", endDate: "2025-04-11" },
      ],
    },
  ];

  await Promise.all(
    projects.map(async (proj) => {
      const owner = await findProjectOwner({ email: proj.ownerEmail });
      if (!owner) return;

      await createProject({
        name: proj.name,
        categories: proj.categories,
        ownerId: owner.id,
        startDate: new Date(proj.startDate),
        endDate: new Date(proj.endDate),
        status: proj.status,
        completion: proj.completion,
        notes: proj.notes,
        phases: {
          create: proj.phases.map((p) => ({
            name: p.name,
            startDate: new Date(p.startDate),
            endDate: new Date(p.endDate),
          })),
        },
      });
    }),
  );
}
