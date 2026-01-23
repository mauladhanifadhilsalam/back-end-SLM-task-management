import { describe, expect, it } from "vitest";
import {
  developerDashboardEntrySchema,
  projectManagerDashboardSchema,
  dailyCadenceEntrySchema,
} from "../../src/schemas/dashboard.schema";

describe("dashboard schema", () => {
  it("accepts developer dashboard entry", () => {
    const parsed = developerDashboardEntrySchema.safeParse({
      userId: 1,
      fullName: "Dev",
      email: "dev@example.com",
      totalAssignedTasks: 0,
      tasksInProgress: 0,
      overdueTasks: 0,
      taskCompletionPercentage: "0%",
      openTasksHighPriority: 0,
      tasksDueNext7Days: 0,
      completedTasksLast7Days: 0,
      totalAssignedIssues: 0,
      issuesInProgress: 0,
      criticalIssues: 0,
      openIssuesHighPriority: 0,
      issuesDueNext7Days: 0,
      completedIssuesLast7Days: 0,
      bugToTaskCompletionRatio: null,
      totalAssignedProjects: 0,
      projectsInProgress: 0,
      primaryProjectId: null,
      ticketsByProject: [],
      workloadIndex: 0,
      newTicketsAssignedLast7Days: 0,
      commentsWrittenLast7Days: 0,
      commentsOnMyTicketsLast7Days: 0,
      unreadNotificationsCount: 0,
    });
    expect(parsed.success).toBe(true);
  });

  it("accepts project manager dashboard entry", () => {
    const parsed = projectManagerDashboardSchema.safeParse({
      userId: 1,
      fullName: "PM",
      email: "pm@example.com",
      totalProjects: 0,
      activeProjects: 0,
      onHoldProjects: 0,
      completedProjects: 0,
      projectsDueNext7Days: 0,
      projectsDueNext30Days: 0,
      overdueProjects: 0,
      activePhases: 0,
      phasesDueNext30Days: 0,
      overduePhases: 0,
      totalTickets: 0,
      openTickets: 0,
      inReviewTickets: 0,
      overdueTickets: 0,
      openHighPriorityTickets: 0,
      openCriticalTickets: 0,
      completedTicketsLast7Days: 0,
      completedTicketsLast30Days: 0,
      oldestOpenTicketDays: null,
      ticketsByStatus: [],
      ticketsByPriority: [],
      ticketsByProject: [],
      primaryProjectId: null,
      commentsLast7Days: 0,
      commentsLast30Days: 0,
      unreadNotificationsCount: 0,
    });
    expect(parsed.success).toBe(true);
  });

  it("accepts daily cadence entry", () => {
    const parsed = dailyCadenceEntrySchema.safeParse({
      projectId: 1,
      date: "2025-01-01",
      progress: "10%",
      remainingProgress: "90%",
      totalDevelopersInvolved: 1,
      totalModules: 2,
      totalIssues: 3,
      history: [{ date: "2025-01-01", totalIssues: 3, note: "ok" }],
    });
    expect(parsed.success).toBe(true);
  });
});
