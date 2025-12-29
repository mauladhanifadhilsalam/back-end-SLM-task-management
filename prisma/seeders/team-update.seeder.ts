import prisma from "../../src/db/prisma";
import { TeamUpdateStatus } from "@prisma/client";
import { createTeamUpdate } from "../../src/services/team-update.service";

type TeamUpdateSeed = {
  authorEmail: string;
  ownerEmail: string;
  yesterdayWork: string;
  todayWork: string;
  blocker: string;
  nextAction: string;
  status: TeamUpdateStatus;
};

const teamUpdateSeeds: TeamUpdateSeed[] = [
  {
    authorEmail: "gandalf@yahoo.com",
    ownerEmail: "koji@example.com",
    yesterdayWork: "Instrumented SSO callback tracing and attached logs to the incident ticket.",
    todayWork: "Implement retry backoff toggles for the new auth gateway.",
    blocker: "Need confirmation from infra about proxy timeout thresholds.",
    nextAction: "Sync with infra after standup to finalize timeouts.",
    status: TeamUpdateStatus.IN_PROGRESS,
  },
  {
    authorEmail: "legolas@example.com",
    ownerEmail: "scott@example.com",
    yesterdayWork: "Completed contract test scaffolding for the loyalty SDK.",
    todayWork: "Expand regression cases and align with QA coverage requests.",
    blocker: "Awaiting QA feedback on the error taxonomy.",
    nextAction: "Draft remaining scenarios once QA replies.",
    status: TeamUpdateStatus.NOT_STARTED,
  },
  {
    authorEmail: "frodo@example.com",
    ownerEmail: "grammont@example.com",
    yesterdayWork: "Drafted launch communication outline for client summit.",
    todayWork: "Coordinate with marketing on the FAQ appendix.",
    blocker: "Marketing is verifying legal review timing.",
    nextAction: "Send draft to marketing once legal notes arrive.",
    status: TeamUpdateStatus.IN_PROGRESS,
  },
  {
    authorEmail: "samwise@example.com",
    ownerEmail: "koji@example.com",
    yesterdayWork: "Organized reward migration checklist for loyalty rollout.",
    todayWork: "Validate data mapping with analytics team.",
    blocker: "Analytics pipeline schema changes pending approval.",
    nextAction: "Review schema proposal and update checklist.",
    status: TeamUpdateStatus.NOT_STARTED,
  },
  {
    authorEmail: "aragorn@example.com",
    ownerEmail: "scott@example.com",
    yesterdayWork: "Reviewed audit logging gaps and flagged missing metrics.",
    todayWork: "Coordinate patch rollout plan for IAM agents.",
    blocker: "Need final approval on deployment window.",
    nextAction: "Confirm window with release manager.",
    status: TeamUpdateStatus.DONE,
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
    throw new Error(`Cannot seed team updates: user with email ${email} not found`);
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
    throw new Error(`Cannot seed team updates: project with owner email ${ownerEmail} not found`);
  }

  cache.set(ownerEmail, project.id);
  return project.id;
}

export default async function seedTeamUpdate() {
  const userCache = new Map<string, number>();
  const projectCache = new Map<string, number>();

  for (const seed of teamUpdateSeeds) {
    const userId = await getUserId(seed.authorEmail, userCache);
    const projectId = await getProjectId(seed.ownerEmail, projectCache);

    await createTeamUpdate({
      userId,
      projectId,
      yesterdayWork: seed.yesterdayWork,
      todayWork: seed.todayWork,
      blocker: seed.blocker,
      nextAction: seed.nextAction,
      status: seed.status,
    });
  }
}
