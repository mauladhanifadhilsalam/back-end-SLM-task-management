import { z } from "zod";
import { registerSchema } from "../openapi/registry";

const ticketsByProjectSchema = z
  .array(
    z
      .object({
        projectId: z.number().int().positive(),
        name: z.string().optional(),
        openTickets: z.number().int().nonnegative().optional(),
        totalTickets: z.number().int().nonnegative().optional(),
      })
      .passthrough(),
  )
  .optional();

const developerDashboardEntrySchema = registerSchema(
  "DeveloperDashboardEntry",
  z
    .object({
      userId: z.number().int().positive(),
      fullName: z.string(),
      email: z.string().email(),
      totalAssignedTasks: z.number().int().nonnegative(),
      tasksInProgress: z.number().int().nonnegative(),
      overdueTasks: z.number().int().nonnegative(),
      taskCompletionPercentage: z.string(),
      openTasksHighPriority: z.number().int().nonnegative(),
      tasksDueNext7Days: z.number().int().nonnegative(),
      completedTasksLast7Days: z.number().int().nonnegative(),
      totalAssignedIssues: z.number().int().nonnegative(),
      issuesInProgress: z.number().int().nonnegative(),
      criticalIssues: z.number().int().nonnegative(),
      openIssuesHighPriority: z.number().int().nonnegative(),
      issuesDueNext7Days: z.number().int().nonnegative(),
      completedIssuesLast7Days: z.number().int().nonnegative(),
      bugToTaskCompletionRatio: z.string().nullable(),
      totalAssignedProjects: z.number().int().nonnegative(),
      projectsInProgress: z.number().int().nonnegative(),
      primaryProjectId: z.number().int().positive().nullable(),
      ticketsByProject: ticketsByProjectSchema,
      workloadIndex: z.number(),
      newTicketsAssignedLast7Days: z.number().int().nonnegative(),
      commentsWrittenLast7Days: z.number().int().nonnegative(),
      commentsOnMyTicketsLast7Days: z.number().int().nonnegative(),
      unreadNotificationsCount: z.number().int().nonnegative(),
    })
    .openapi({ description: "Metrics surfaced on the developer dashboard." }),
);

const developerDashboardListSchema = registerSchema(
  "DeveloperDashboardList",
  z
    .array(developerDashboardEntrySchema)
    .openapi({ description: "Array of developer dashboard rows." }),
);

const projectManagerDashboardSchema = registerSchema(
  "ProjectManagerDashboard",
  z
    .object({
      userId: z.number().int().positive(),
      fullName: z.string(),
      email: z.email(),
      totalProjects: z.number().int().nonnegative(),
      activeProjects: z.number().int().nonnegative(),
      onHoldProjects: z.number().int().nonnegative(),
      completedProjects: z.number().int().nonnegative(),
      projectsDueNext7Days: z.number().int().nonnegative(),
      projectsDueNext30Days: z.number().int().nonnegative(),
      overdueProjects: z.number().int().nonnegative(),
      activePhases: z.number().int().nonnegative(),
      phasesDueNext30Days: z.number().int().nonnegative(),
      overduePhases: z.number().int().nonnegative(),
      totalTickets: z.number().int().nonnegative(),
      openTickets: z.number().int().nonnegative(),
      inReviewTickets: z.number().int().nonnegative(),
      overdueTickets: z.number().int().nonnegative(),
      openHighPriorityTickets: z.number().int().nonnegative(),
      openCriticalTickets: z.number().int().nonnegative(),
      completedTicketsLast7Days: z.number().int().nonnegative(),
      completedTicketsLast30Days: z.number().int().nonnegative(),
      oldestOpenTicketDays: z.number().int().nonnegative().nullable(),
      ticketsByStatus: z.array(
        z.object({
          status: z.string(),
          count: z.number().int().nonnegative(),
        }),
      ),
      ticketsByPriority: z.array(
        z.object({
          priority: z.string(),
          count: z.number().int().nonnegative(),
        }),
      ),
      ticketsByProject: z.array(
        z.object({
          projectId: z.number().int().positive(),
          name: z.string(),
          openTickets: z.number().int().nonnegative(),
          totalTickets: z.number().int().nonnegative(),
        }),
      ),
      primaryProjectId: z.number().int().positive().nullable(),
      commentsLast7Days: z.number().int().nonnegative(),
      commentsLast30Days: z.number().int().nonnegative(),
      unreadNotificationsCount: z.number().int().nonnegative(),
    })
    .openapi({ description: "Metrics surfaced on the project manager dashboard." }),
);

const dailyCadenceHistoryEntrySchema = z.object({
  date: z.string(),
  totalIssues: z.number().int().nonnegative(),
  note: z.string(),
});

const dailyCadenceEntrySchema = registerSchema(
  "DailyCadenceEntry",
  z
    .object({
      projectId: z.number().int().positive(),
      date: z.string(),
      progress: z.string(),
      remainingProgress: z.string(),
      totalDevelopersInvolved: z.number().int().nonnegative(),
      totalModules: z.number().int().nonnegative(),
      totalIssues: z.number().int().nonnegative(),
      history: z.array(dailyCadenceHistoryEntrySchema),
    })
    .openapi({ description: "Daily cadence metrics per project." }),
);

const dailyCadenceListSchema = registerSchema(
  "DailyCadenceList",
  z.array(dailyCadenceEntrySchema).openapi({
    description: "Array of daily cadence rows for all projects.",
  }),
);

export {
  developerDashboardEntrySchema,
  developerDashboardListSchema,
  projectManagerDashboardSchema,
  dailyCadenceEntrySchema,
  dailyCadenceListSchema,
};
