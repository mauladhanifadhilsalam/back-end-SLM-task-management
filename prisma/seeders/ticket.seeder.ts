import { TicketPriority, TicketStatus, TicketType } from "@prisma/client";
import prisma from "../../src/db/prisma";
import { createTicket } from "../../src/services/ticket.service";

type TicketSeed = {
  projectOwnerEmail: string;
  requesterEmail: string;
  assigneeEmails: string[];
  type: TicketType;
  title: string;
  description?: string;
  actionPlan?: string | null;
  priority: TicketPriority;
  status?: TicketStatus;
  startDate?: string;
  dueDate?: string;
};

const ticketSeeds: TicketSeed[] = [
  {
    projectOwnerEmail: "scott@example.com",
    requesterEmail: "skywalker@example.com",
    assigneeEmails: ["gandalf@yahoo.com"],
    type: TicketType.ISSUE,
    title: "Stabilize SSO callback failures",
    description:
      "Users intermittently receive 502s on SSO callback. Collect proxy logs and add retry with exponential backoff.",
    actionPlan: "Collect proxy logs, add retry/backoff, and validate error rates.",
    priority: TicketPriority.CRITICAL,
    status: TicketStatus.IN_PROGRESS,
    startDate: "2025-01-15",
    dueDate: "2025-02-05",
  },
  {
    projectOwnerEmail: "grammont@example.com",
    requesterEmail: "skywalker@example.com",
    assigneeEmails: ["skywalker@example.com", "gandalf@yahoo.com"],
    type: TicketType.TASK,
    title: "Finalize loyalty SDK contract tests",
    description:
      "Write integration tests for the loyalty SDK contract ahead of the Interface phase.",
    actionPlan: null,
    priority: TicketPriority.HIGH,
    status: TicketStatus.NEW,
    startDate: "2025-02-10",
    dueDate: "2025-02-24",
  },
  {
    projectOwnerEmail: "koji@example.com",
    requesterEmail: "skywalker@example.com",
    assigneeEmails: ["legolas@example.com"],
    type: TicketType.ISSUE,
    title: "Rotate TLS certificates across sensor gateway",
    description:
      "Coordinate a zero-downtime TLS certificate rotation for all gateway nodes.",
    actionPlan: "Inventory nodes, schedule rotation, and verify monitoring.",
    priority: TicketPriority.MEDIUM,
    status: TicketStatus.TO_DO,
    startDate: "2025-03-03",
    dueDate: "2025-03-12",
  },
  {
    projectOwnerEmail: "grammont@example.com",
    requesterEmail: "skywalker@example.com",
    assigneeEmails: ["frodo@example.com", "samwise@example.com"],
    type: TicketType.TASK,
    title: "Draft customer launch communications",
    description:
      "Produce launch briefing kit for marketing ahead of the client summit.",
    actionPlan: null,
    priority: TicketPriority.LOW,
    status: TicketStatus.NEW,
    startDate: "2025-03-01",
    dueDate: "2025-03-15",
  },
  {
    projectOwnerEmail: "scott@example.com",
    requesterEmail: "skywalker@example.com",
    assigneeEmails: ["aragorn@example.com", "legolas@example.com", "gandalf@yahoo.com"],
    type: TicketType.ISSUE,
    title: "Patch audit logging gaps in IAM agents",
    description:
      "Harden audit coverage on identity microservices and backfill missing metrics in the SIEM pipeline.",
    actionPlan: "Audit services, add missing events, and validate in SIEM.",
    priority: TicketPriority.HIGH,
    status: TicketStatus.IN_PROGRESS,
    startDate: "2025-03-04",
    dueDate: "2025-03-26",
  },
  {
    projectOwnerEmail: "grammont@example.com",
    requesterEmail: "skywalker@example.com",
    assigneeEmails: ["legolas@example.com", "aragorn@example.com", "bard@example.com"],
    type: TicketType.TASK,
    title: "Optimize storefront render pipeline",
    description:
      "Profile hydration bottlenecks across the web storefront, split critical CSS, and cache upstream GraphQL aggregates.",
    actionPlan: null,
    priority: TicketPriority.MEDIUM,
    status: TicketStatus.IN_REVIEW,
    startDate: "2025-03-10",
    dueDate: "2025-03-28",
  },
  {
    projectOwnerEmail: "koji@example.com",
    requesterEmail: "skywalker@example.com",
    assigneeEmails: ["bard@example.com", "frodo@example.com"],
    type: TicketType.TASK,
    title: "Calibrate telemetry watchdog thresholds",
    description:
      "Run load tests against sensor gateways and tune watchdog thresholds to curb noisy paging.",
    actionPlan: null,
    priority: TicketPriority.MEDIUM,
    status: TicketStatus.IN_PROGRESS,
    startDate: "2025-03-08",
    dueDate: "2025-03-20",
  },
  {
    projectOwnerEmail: "scott@example.com",
    requesterEmail: "skywalker@example.com",
    assigneeEmails: ["gandalf@yahoo.com", "legolas@example.com", "samwise@example.com"],
    type: TicketType.ISSUE,
    title: "Hardening rollout for trusted device enrollment",
    description:
      "Deploy updated trusted device enrollment flows with device fingerprint fallback and enforce policy in SAML bridge.",
    actionPlan: "Deploy updates, add fallback, and enforce SAML policy.",
    priority: TicketPriority.CRITICAL,
    status: TicketStatus.IN_REVIEW,
    startDate: "2025-03-06",
    dueDate: "2025-03-22",
  },
  {
    projectOwnerEmail: "grammont@example.com",
    requesterEmail: "skywalker@example.com",
    assigneeEmails: ["frodo@example.com", "samwise@example.com", "aragorn@example.com"],
    type: TicketType.TASK,
    title: "Author loyalty rewards migration playbook",
    description:
      "Document step-by-step loyalty data migration, validation checklists, and regression test matrix for marketing handoff.",
    actionPlan: null,
    priority: TicketPriority.HIGH,
    status: TicketStatus.TO_DO,
    startDate: "2025-03-12",
    dueDate: "2025-03-30",
  },
];

async function getUserId(email: string, cache: Map<string, number>): Promise<number> {
  const cached = cache.get(email);
  if (cached) return cached;

  const user = await prisma.user.findUnique({
    where: { email },
    select: { id: true },
  });

  if (!user) {
    throw new Error(`Cannot seed tickets: user with email ${email} not found`);
  }

  cache.set(email, user.id);
  return user.id;
}

async function getProjectId(ownerEmail: string, cache: Map<string, number>): Promise<number> {
  const cached = cache.get(ownerEmail);
  if (cached) return cached;

  const project = await prisma.project.findFirst({
    where: {
      owner: {
        email: ownerEmail,
      },
    },
    select: { id: true },
  });

  if (!project) {
    throw new Error(`Cannot seed tickets: project for owner ${ownerEmail} not found`);
  }

  cache.set(ownerEmail, project.id);
  return project.id;
}

export default async function seedTicket() {
  const userCache = new Map<string, number>();
  const projectCache = new Map<string, number>();

  for (const seed of ticketSeeds) {
    const projectId = await getProjectId(seed.projectOwnerEmail, projectCache);
    const requesterId = await getUserId(seed.requesterEmail, userCache);
    const assigneeIds = [
      ...new Set(
        await Promise.all(seed.assigneeEmails.map((email) => getUserId(email, userCache))),
      ),
    ];

    await createTicket({
      projectId,
      requesterId,
      type: seed.type,
      title: seed.title,
      description: seed.description,
      actionPlan: seed.actionPlan,
      priority: seed.priority ?? undefined,
      status: seed.status,
      startDate: seed.startDate ? new Date(seed.startDate) : undefined,
      dueDate: seed.dueDate ? new Date(seed.dueDate) : undefined,
      assigneeIds,
    });
  }
}
