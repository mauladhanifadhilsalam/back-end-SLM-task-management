import { RoleType, TicketPriority, TicketStatus } from "@prisma/client";
import env from "../config/env";
import prisma from "../db/prisma";
import { calculateAhpWeights } from "../utils/ahp";

type InboxSupportRewardDeveloper = {
  userId: number;
  fullName: string;
  email: string;
  completedTicketCount: number;
  averagePriorityScore: number;
  averageDueUrgencyScore: number;
  ticketLoadScore: number;
  rewardScore: number;
};

type InboxSupportRewardSummary = {
  projectId: number;
  projectName: string;
  criteriaWeights: {
    priority: number;
    dueTime: number;
    ticketLoad: number;
  };
  developers: InboxSupportRewardDeveloper[];
};

const inboxProjectFallbackName = "Support Inbox";
const dueWindowHours = 24 * 7;
const completedWindowDays = 30;
const priorityScores: Record<TicketPriority, number> = {
  LOW: 0.25,
  MEDIUM: 0.5,
  HIGH: 0.75,
  CRITICAL: 1,
};

const ahpMatrix = [
  [1, 3, 5],
  [1 / 3, 1, 3],
  [1 / 5, 1 / 3, 1],
];
const [priorityWeight, dueTimeWeight, ticketLoadWeight] = calculateAhpWeights(ahpMatrix);
const criteriaWeights = {
  priority: priorityWeight,
  dueTime: dueTimeWeight,
  ticketLoad: ticketLoadWeight,
};

function roundTo(value: number, decimals = 4) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function resolvePriorityScore(priority: TicketPriority) {
  return priorityScores[priority] ?? 0;
}

function resolveDueUrgencyScore(dueDate: Date | null, createdAt: Date, referenceTime: Date) {
  const effectiveDueDate =
    dueDate ?? new Date(createdAt.getTime() + dueWindowHours * 60 * 60 * 1000);
  const hoursRemaining = (effectiveDueDate.getTime() - referenceTime.getTime()) / (1000 * 60 * 60);
  if (hoursRemaining <= 0) return 1;
  if (hoursRemaining >= dueWindowHours) return 0;
  return clamp(1 - hoursRemaining / dueWindowHours, 0, 1);
}

async function resolveInboxProject() {
  if (env.emailTicketProjectId) {
    const project = await prisma.project.findUnique({
      where: { id: env.emailTicketProjectId },
      select: { id: true, name: true },
    });
    if (project) {
      return project;
    }
  }

  return prisma.project.findFirst({
    where: { name: inboxProjectFallbackName },
    select: { id: true, name: true },
  });
}

async function findInboxSupportRewards(): Promise<InboxSupportRewardSummary | null> {
  const project = await resolveInboxProject();
  if (!project) {
    return null;
  }

  const assignments = await prisma.projectAssignment.findMany({
    where: {
      projectId: project.id,
      user: {
        role: RoleType.DEVELOPER,
        isActive: true,
      },
    },
    select: {
      user: {
        select: {
          id: true,
          fullName: true,
          email: true,
        },
      },
    },
    orderBy: { userId: "asc" },
  });

  const developers = assignments
    .map((assignment) => assignment.user)
    .filter((user): user is { id: number; fullName: string; email: string } => Boolean(user));

  if (!developers.length) {
    return {
      projectId: project.id,
      projectName: project.name,
      criteriaWeights,
      developers: [],
    };
  }

  const developerIds = developers.map((developer) => developer.id);
  const now = new Date();
  const windowStart = new Date(now.getTime() - completedWindowDays * 24 * 60 * 60 * 1000);
  const ticketAssignments = await prisma.ticketAssignee.findMany({
    where: {
      userId: { in: developerIds },
      ticket: {
        projectId: project.id,
        status: TicketStatus.DONE,
        updatedAt: { gte: windowStart },
      },
    },
    select: {
      userId: true,
      ticket: {
        select: {
          priority: true,
          dueDate: true,
          createdAt: true,
          updatedAt: true,
        },
      },
    },
  });

  const metricsByUser = new Map<
    number,
    { ticketCount: number; priorityTotal: number; dueTotal: number }
  >();
  for (const developer of developers) {
    metricsByUser.set(developer.id, { ticketCount: 0, priorityTotal: 0, dueTotal: 0 });
  }

  for (const assignment of ticketAssignments) {
    const metrics = metricsByUser.get(assignment.userId);
    if (!metrics) continue;

    metrics.ticketCount += 1;
    metrics.priorityTotal += resolvePriorityScore(assignment.ticket.priority);
    metrics.dueTotal += resolveDueUrgencyScore(
      assignment.ticket.dueDate,
      assignment.ticket.createdAt,
      assignment.ticket.updatedAt,
    );
  }

  const maxTicketCount = Math.max(
    0,
    ...Array.from(metricsByUser.values()).map((metrics) => metrics.ticketCount),
  );

  const developersWithScores = developers.map((developer) => {
    const metrics = metricsByUser.get(developer.id) ?? {
      ticketCount: 0,
      priorityTotal: 0,
      dueTotal: 0,
    };
    const ticketCount = metrics.ticketCount;
    const averagePriorityScore = ticketCount ? metrics.priorityTotal / ticketCount : 0;
    const averageDueUrgencyScore = ticketCount ? metrics.dueTotal / ticketCount : 0;
    const ticketLoadScore = maxTicketCount ? ticketCount / maxTicketCount : 0;
    const rewardScore =
      averagePriorityScore * criteriaWeights.priority +
      averageDueUrgencyScore * criteriaWeights.dueTime +
      ticketLoadScore * criteriaWeights.ticketLoad;

    return {
      userId: developer.id,
      fullName: developer.fullName,
      email: developer.email,
      completedTicketCount: ticketCount,
      averagePriorityScore: roundTo(averagePriorityScore),
      averageDueUrgencyScore: roundTo(averageDueUrgencyScore),
      ticketLoadScore: roundTo(ticketLoadScore),
      rewardScore: roundTo(rewardScore),
    };
  });

  developersWithScores.sort((left, right) => {
    if (right.rewardScore !== left.rewardScore) {
      return right.rewardScore - left.rewardScore;
    }
    return left.fullName.localeCompare(right.fullName);
  });

  return {
    projectId: project.id,
    projectName: project.name,
    criteriaWeights: {
      priority: roundTo(criteriaWeights.priority),
      dueTime: roundTo(criteriaWeights.dueTime),
      ticketLoad: roundTo(criteriaWeights.ticketLoad),
    },
    developers: developersWithScores,
  };
}

export { findInboxSupportRewards };
