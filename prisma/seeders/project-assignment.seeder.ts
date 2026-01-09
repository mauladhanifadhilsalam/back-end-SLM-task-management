import prisma from "../../src/db/prisma";
import { createProjectAssignment } from "../../src/services/project-assignment.service";

type ProjectAssignmentSeed = {
  projectOwnerEmail: string;
  userEmail: string;
};

const projectAssignmentSeeds: ProjectAssignmentSeed[] = [
  {
    projectOwnerEmail: "scott@example.com",
    userEmail: "skywalker@example.com",
  },
  {
    projectOwnerEmail: "scott@example.com",
    userEmail: "gandalf@yahoo.com",
  },
  {
    projectOwnerEmail: "scott@example.com",
    userEmail: "aragorn@example.com",
  },
  {
    projectOwnerEmail: "scott@example.com",
    userEmail: "legolas@example.com",
  },
  {
    projectOwnerEmail: "scott@example.com",
    userEmail: "samwise@example.com",
  },
  {
    projectOwnerEmail: "grammont@example.com",
    userEmail: "skywalker@example.com",
  },
  {
    projectOwnerEmail: "grammont@example.com",
    userEmail: "legolas@example.com",
  },
  {
    projectOwnerEmail: "grammont@example.com",
    userEmail: "frodo@example.com",
  },
  {
    projectOwnerEmail: "grammont@example.com",
    userEmail: "gandalf@yahoo.com",
  },
  {
    projectOwnerEmail: "grammont@example.com",
    userEmail: "samwise@example.com",
  },
  {
    projectOwnerEmail: "grammont@example.com",
    userEmail: "aragorn@example.com",
  },
  {
    projectOwnerEmail: "grammont@example.com",
    userEmail: "bard@example.com",
  },
  {
    projectOwnerEmail: "koji@example.com",
    userEmail: "samwise@example.com",
  },
  {
    projectOwnerEmail: "koji@example.com",
    userEmail: "bard@example.com",
  },
  {
    projectOwnerEmail: "koji@example.com",
    userEmail: "aragorn@example.com",
  },
  {
    projectOwnerEmail: "koji@example.com",
    userEmail: "legolas@example.com",
  },
  {
    projectOwnerEmail: "koji@example.com",
    userEmail: "frodo@example.com",
  },
];

async function getProjectId(ownerEmail: string, cache: Map<string, number>): Promise<number> {
  const cached = cache.get(ownerEmail);
  if (cached) return cached;

  const project = await prisma.project.findFirst({
    where: {
      owner: { email: ownerEmail },
    },
    select: { id: true },
  });

  if (!project) {
    throw new Error(`Cannot seed project assignments: project for owner ${ownerEmail} not found`);
  }

  cache.set(ownerEmail, project.id);
  return project.id;
}

async function getUserId(email: string, cache: Map<string, number>): Promise<number> {
  const cached = cache.get(email);
  if (cached) return cached;

  const user = await prisma.user.findUnique({
    where: { email },
    select: { id: true },
  });

  if (!user) {
    throw new Error(`Cannot seed project assignments: user with email ${email} not found`);
  }

  cache.set(email, user.id);
  return user.id;
}

export default async function seedProjectAssignment() {
  const projectCache = new Map<string, number>();
  const userCache = new Map<string, number>();

  for (const seed of projectAssignmentSeeds) {
    const [projectId, userId] = await Promise.all([
      getProjectId(seed.projectOwnerEmail, projectCache),
      getUserId(seed.userEmail, userCache),
    ]);

    await createProjectAssignment({
      projectId,
      userId,
    });
  }
}
