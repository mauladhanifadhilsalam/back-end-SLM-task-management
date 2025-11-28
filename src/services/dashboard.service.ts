import prisma from "../db/prisma";

type DeveloperDashboard = [
  {
    userId: number;
    fullName: string;
    email: string;

    totalAssignedTasks: number;
    tasksInProgress: number;
    overdueTasks: number;
    taskCompletionPercentage: string;

    openTasksHighPriority: number;
    tasksDueNext7Days: number;
    completedTasksLast7Days: number;

    totalAssignedIssues: number;
    issuesInProgress: number;
    criticalIssues: number;
    openIssuesHighPriority: number;
    issuesDueNext7Days: number;
    completedIssuesLast7Days: number;
    bugToTaskCompletionRatio: string | null;

    totalAssignedProjects: number;
    projectsInProgress: number;
    primaryProjectId: number | null;

    ticketsByProject: unknown;

    workloadIndex: number;
    newTicketsAssignedLast7Days: number;

    commentsWrittenLast7Days: number;
    commentsOnMyTicketsLast7Days: number;
    unreadNotificationsCount: number;
  }
];

type ProjectManagerDashboard = [
  {}
]


async function findDeveloperDashboard(userId: number): Promise<DeveloperDashboard> {
  return await prisma.$queryRaw`SELECT * FROM developer_dashboard WHERE "userId" = ${userId} LIMIT 1`;
}

async function findProjectManagerDashboard(userId: number): Promise<ProjectManagerDashboard> {
  return await prisma.$queryRaw`SELECT * FROM project_manager_dashboard WHERE "userId" = ${userId} LIMIT 1`;
}

async function refreshDashboard() {
  return await prisma.$transaction([
  prisma.$executeRaw`REFRESH MATERIALIZED VIEW developer_dashboard`,
  prisma.$executeRaw`REFRESH MATERIALIZED VIEW project_manager_dashboard`
  ])
}
export { findDeveloperDashboard, findProjectManagerDashboard, refreshDashboard };
