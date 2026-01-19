import { ProjectStatus } from "@prisma/client";
import { createProject } from "../../src/services/project.service";
import { findProjectOwner } from "../../src/services/project-owner.service";

export default async function seedProject() {
  const projects = [
    {
      ownerEmail: "support@example.com",
      name: "Support Inbox",
      categories: ["Support"],
      startDate: "2025-01-01",
      endDate: "2025-12-31",
      status: ProjectStatus.IN_PROGRESS,
      notes: "Inbound support mailbox for external customer requests.",
      phases: [
        {
          name: "Triage",
          startDate: "2025-01-01",
          endDate: "2025-12-31",
        },
      ],
    },
    {
      ownerEmail: "koji@example.com",
      name: "Project Kintsugi — Sensor Grid & Ops Intelligence",
      categories: ["IoT", "Data", "Analytics"],
      startDate: "2024-11-11",
      endDate: "2025-10-25",
      status: ProjectStatus.IN_PROGRESS,
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

        {
          name: "Grid Hardening",
          startDate: "2025-04-14",
          endDate: "2025-05-09",
        },
        {
          name: "Operational Modeling",
          startDate: "2025-05-12",
          endDate: "2025-06-06",
        },
        {
          name: "Adaptive Optimization",
          startDate: "2025-06-09",
          endDate: "2025-07-04",
        },
      ],
    },

    {
      ownerEmail: "scott@example.com",
      name: "Project Obsidian — Identity Federation & Secure Access",
      categories: ["Security", "Infrastructure", "Platform"],
      startDate: "2025-01-06",
      endDate: "2025-12-11",
      status: ProjectStatus.IN_PROGRESS,
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

        {
          name: "Federation Expansion",
          startDate: "2025-04-14",
          endDate: "2025-05-09",
        },
        {
          name: "Enterprise Policy Sync",
          startDate: "2025-05-12",
          endDate: "2025-06-06",
        },
        {
          name: "Zero-Trust Stabilization",
          startDate: "2025-06-09",
          endDate: "2025-07-04",
        },
      ],
    },

    {
      ownerEmail: "grammont@example.com",
      name: "Project Velvet — Client Experience & Commerce Layer",
      categories: ["Web", "Mobile", "Commerce"],
      startDate: "2025-02-03",
      endDate: "2025-12-30",
      status: ProjectStatus.NOT_STARTED,
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

        {
          name: "Commerce Optimization",
          startDate: "2025-06-02",
          endDate: "2025-06-27",
        },
        {
          name: "Omnichannel Integration",
          startDate: "2025-06-30",
          endDate: "2025-07-25",
        },
        {
          name: "Client Experience Refinement",
          startDate: "2025-07-28",
          endDate: "2025-08-22",
        },
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
