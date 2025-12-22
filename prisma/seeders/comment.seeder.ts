import prisma from "../../src/db/prisma";
import { createComment } from "../../src/services/comment.service";

type CommentSeed = {
  ticketTitle: string;
  authorEmail: string;
  message: string;
};

const commentSeeds: CommentSeed[] = [
  {
    ticketTitle: "Stabilize SSO callback failures",
    authorEmail: "gandalf@yahoo.com",
    message:
      "Captured proxy logs from the last outage window and can reproduce on staging. Investigating retry timing next.",
  },
  {
    ticketTitle: "Stabilize SSO callback failures",
    authorEmail: "skywalker@example.com",
    message:
      "Thanks for the logs. Please add metrics for the new retry path before promoting to prod.",
  },
  {
    ticketTitle: "Finalize loyalty SDK contract tests",
    authorEmail: "legolas@example.com",
    message:
      "Drafted baseline contract specs. Will expand the regression cases after QA feedback tomorrow.",
  },
  {
    ticketTitle: "Draft customer launch communications",
    authorEmail: "frodo@example.com",
    message:
      "Marketing wants the talking points by Friday. Uploading the outline for review later today.",
  },
  {
    ticketTitle: "Draft customer launch communications",
    authorEmail: "samwise@example.com",
    message: "I'll take the FAQ appendix and push a commit tonight so we keep the schedule.",
  },
  {
    ticketTitle: "Hardening rollout for trusted device enrollment",
    authorEmail: "gandalf@yahoo.com",
    message:
      "Telemetry still flags a spike on the legacy enrollment path. Need approval to disable it early.",
  },
  {
    ticketTitle: "Hardening rollout for trusted device enrollment",
    authorEmail: "aragorn@example.com",
    message:
      "Approved to disable the legacy path once QA signs off. I'll monitor the rollout dashboard.",
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
    throw new Error(`Cannot seed comments: user with email ${email} not found`);
  }

  cache.set(email, user.id);
  return user.id;
}

async function getTicketId(title: string, cache: Map<string, number>): Promise<number> {
  const cached = cache.get(title);
  if (cached) return cached;

  const ticket = await prisma.ticket.findFirst({
    where: { title },
    select: { id: true },
  });

  if (!ticket) {
    throw new Error(`Cannot seed comments: ticket with title "${title}" not found`);
  }

  cache.set(title, ticket.id);
  return ticket.id;
}

export default async function seedComment() {
  const userCache = new Map<string, number>();
  const ticketCache = new Map<string, number>();

  for (const seed of commentSeeds) {
    const [ticketId, userId] = await Promise.all([
      getTicketId(seed.ticketTitle, ticketCache),
      getUserId(seed.authorEmail, userCache),
    ]);

    await createComment({
      ticketId,
      userId,
      message: seed.message,
    });
  }
}
