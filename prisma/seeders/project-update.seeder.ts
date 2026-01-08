import prisma from "../../src/db/prisma";
import { createProjectUpdate } from "../../src/services/project-update.service";

type ProjectUpdateSeed = {
  facilitatorEmail: string;
  ownerEmail: string;
  phaseName: string;
  participant: string | null;
  objective: string | null;
  progressHighlight: string | null;
  teamMood: string | null;
};

const projectUpdateSeeds: ProjectUpdateSeed[] = [
  {
    facilitatorEmail: "skywalker@example.com",
    ownerEmail: "koji@example.com",
    phaseName: "Stream Control",
    participant: "DevOps, Backend Developers, Automation Engineers",
    objective: "Confirm rollout dependencies for retry backoff toggles.",
    progressHighlight: "Proxy timeout thresholds drafted with infra.",
    teamMood: "Focused, moving steadily.",
  },
  {
    facilitatorEmail: "gandalf@yahoo.com",
    ownerEmail: "scott@example.com",
    phaseName: "Foundation",
    participant: "DevOps, QA, Release/Delivery Managers",
    objective: "Align on MFA rollout blockers for legacy ERP.",
    progressHighlight: "Identified the reverse proxy rule changes needed.",
    teamMood: "Cautiously optimistic.",
  },
  {
    facilitatorEmail: "legolas@example.com",
    ownerEmail: "grammont@example.com",
    phaseName: "Blueprint",
    participant: "Mobile Developers, Frontend Developers, UI/UX Designers",
    objective: "Lock down the loyalty SDK handoff dates.",
    progressHighlight: "Drafted contract test coverage alignment.",
    teamMood: "Energized.",
  },
  {
    facilitatorEmail: "frodo@example.com",
    ownerEmail: "grammont@example.com",
    phaseName: "Interface",
    participant: "UI/UX Designers, Technical Writers, Business Analysts",
    objective: "Review launch comms and FAQ backlog.",
    progressHighlight: "Launch outline approved pending legal review.",
    teamMood: "Waiting on approvals.",
  },
  {
    facilitatorEmail: "aragorn@example.com",
    ownerEmail: "scott@example.com",
    phaseName: "Execution",
    participant: "Release/Delivery Managers, QA, Automation Engineers",
    objective: "Finalize zero-trust stabilization rollout plan.",
    progressHighlight: "Deployment window options surfaced.",
    teamMood: "Confident.",
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
    throw new Error(`Cannot seed project updates: user with email ${email} not found`);
  }

  cache.set(email, user.id);
  return user.id;
}

async function getProjectId(ownerEmail: string, cache: Map<string, number>): Promise<number> {
  const cached = cache.get(ownerEmail);
  if (cached) return cached;

  const project = await prisma.project.findFirst({
    where: { owner: { email: ownerEmail } },
    select: { id: true },
  });

  if (!project) {
    throw new Error(
      `Cannot seed project updates: project with owner email ${ownerEmail} not found`,
    );
  }

  cache.set(ownerEmail, project.id);
  return project.id;
}

async function getPhaseId(
  projectId: number,
  phaseName: string,
  cache: Map<string, number>,
): Promise<number> {
  const key = `${projectId}:${phaseName}`;
  const cached = cache.get(key);
  if (cached) return cached;

  const phase = await prisma.projectPhase.findFirst({
    where: { projectId, name: phaseName },
    select: { id: true },
  });

  if (!phase) {
    throw new Error(
      `Cannot seed project updates: phase "${phaseName}" for project ${projectId} not found`,
    );
  }

  cache.set(key, phase.id);
  return phase.id;
}

export default async function seedProjectUpdate() {
  const userCache = new Map<string, number>();
  const projectCache = new Map<string, number>();
  const phaseCache = new Map<string, number>();

  for (const seed of projectUpdateSeeds) {
    const projectId = await getProjectId(seed.ownerEmail, projectCache);
    const [facilitatorId, phaseId] = await Promise.all([
      getUserId(seed.facilitatorEmail, userCache),
      getPhaseId(projectId, seed.phaseName, phaseCache),
    ]);

    await createProjectUpdate({
      facilitatorId,
      projectId,
      phaseId,
      reportDate: new Date(),
      participant: seed.participant,
      objective: seed.objective,
      progressHighlight: seed.progressHighlight,
      teamMood: seed.teamMood,
    });
  }
}
