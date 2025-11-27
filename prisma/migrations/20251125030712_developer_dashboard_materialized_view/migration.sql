CREATE MATERIALIZED VIEW developer_dashboard AS
WITH assigned_tickets AS (
  SELECT
    ta."userId",
    ta."assignedAt",
    t.id           AS ticket_id,
    t."projectId",
    t.type,
    t.status,
    t.priority,
    t."dueDate",
    t."createdAt",
    t."updatedAt"
  FROM "TicketAssignee" ta
  JOIN "Ticket" t ON t.id = ta."ticketId"
),

-- =========================
-- Task-related stats (type = 'TASK')
-- =========================
task_stats AS (
  SELECT
    at."userId",

    COUNT(*) FILTER (WHERE at.type = 'TASK')::int AS total_assigned_tasks,
    COUNT(*) FILTER (
      WHERE at.type = 'TASK'
        AND at.status NOT IN ('DONE', 'CLOSED')
    )::int AS tasks_in_progress,
    COUNT(*) FILTER (
      WHERE at.type = 'TASK'
        AND at."dueDate" IS NOT NULL
        AND at."dueDate" < now()
        AND at.status NOT IN ('DONE', 'CLOSED', 'RESOLVED')
    )::int AS overdue_tasks,
    COUNT(*) FILTER (
      WHERE at.type = 'TASK'
        AND at.status IN ('DONE', 'CLOSED', 'RESOLVED')
    )::int AS completed_tasks,

    COUNT(*) FILTER (
      WHERE at.type = 'TASK'
        AND at.priority IN ('HIGH', 'CRITICAL')
        AND at.status NOT IN ('DONE', 'CLOSED', 'RESOLVED')
    )::int AS open_tasks_high_priority,

    COUNT(*) FILTER (
      WHERE at.type = 'TASK'
        AND at."dueDate" IS NOT NULL
        AND at."dueDate" >= now()
        AND at."dueDate" <  now() + interval '7 days'
        AND at.status NOT IN ('DONE', 'CLOSED', 'RESOLVED')
    )::int AS tasks_due_next_7_days,

    COUNT(*) FILTER (
      WHERE at.type = 'TASK'
        AND at.status IN ('DONE', 'CLOSED', 'RESOLVED')
        AND at."updatedAt" >= now() - interval '7 days'
    )::int AS completed_tasks_last_7_days

  FROM assigned_tickets at
  GROUP BY at."userId"
),

-- =========================
-- Issue-related stats (type = 'ISSUE')
-- =========================
issue_stats AS (
  SELECT
    at."userId",

    COUNT(*) FILTER (WHERE at.type = 'ISSUE')::int AS total_assigned_issues,
    COUNT(*) FILTER (
      WHERE at.type = 'ISSUE'
        AND at.status NOT IN ('DONE', 'CLOSED', 'RESOLVED')
    )::int AS issues_in_progress,
    COUNT(*) FILTER (
      WHERE at.type = 'ISSUE'
        AND at.priority = 'CRITICAL'
    )::int AS critical_issues,

    COUNT(*) FILTER (
      WHERE at.type = 'ISSUE'
        AND at.priority IN ('HIGH', 'CRITICAL')
        AND at.status NOT IN ('DONE', 'CLOSED', 'RESOLVED')
    )::int AS open_issues_high_priority,

    COUNT(*) FILTER (
      WHERE at.type = 'ISSUE'
        AND at."dueDate" IS NOT NULL
        AND at."dueDate" >= now()
        AND at."dueDate" <  now() + interval '7 days'
        AND at.status NOT IN ('DONE', 'CLOSED', 'RESOLVED')
    )::int AS issues_due_next_7_days,

    COUNT(*) FILTER (
      WHERE at.type = 'ISSUE'
        AND at.status IN ('DONE', 'CLOSED', 'RESOLVED')
        AND at."updatedAt" >= now() - interval '7 days'
    )::int AS completed_issues_last_7_days,

    COUNT(*) FILTER (
      WHERE at.type = 'ISSUE'
        AND at.status IN ('DONE', 'CLOSED', 'RESOLVED')
    )::int AS completed_issues

  FROM assigned_tickets at
  GROUP BY at."userId"
),

-- =========================
-- Project-related stats (assignments)
-- =========================
project_stats AS (
  SELECT
    pa."userId",
    COUNT(DISTINCT pa."projectId")::int AS total_assigned_projects,
    COUNT(DISTINCT CASE
      WHEN p.status <> 'DONE' THEN pa."projectId"
    END)::int AS projects_in_progress
  FROM "ProjectAssignment" pa
  JOIN "Project" p ON p.id = pa."projectId"
  GROUP BY pa."userId"
),

-- =========================
-- Ticket breakdown per project for each dev
-- =========================
project_ticket_breakdown AS (
  SELECT
    at."userId",
    at."projectId",
    COUNT(*)::int AS total_tickets,
    COUNT(*) FILTER (
      WHERE at.status NOT IN ('DONE', 'CLOSED', 'RESOLVED')
    )::int AS open_tickets
  FROM assigned_tickets at
  GROUP BY at."userId", at."projectId"
),

tickets_by_project AS (
  SELECT
    ptb."userId",
    jsonb_agg(
      jsonb_build_object(
        'projectId',    ptb."projectId",
        'totalTickets', ptb.total_tickets,
        'openTickets',  ptb.open_tickets
      )
      ORDER BY ptb.open_tickets DESC
    ) AS tickets_by_project
  FROM project_ticket_breakdown ptb
  GROUP BY ptb."userId"
),

primary_project AS (
  SELECT DISTINCT ON (ptb."userId")
    ptb."userId",
    ptb."projectId" AS primary_project_id
  FROM project_ticket_breakdown ptb
  ORDER BY ptb."userId", ptb.open_tickets DESC, ptb."projectId"
),

-- =========================
-- Workload index (weighted open tickets by priority)
-- =========================
workload_stats AS (
  SELECT
    at."userId",
    SUM(
      CASE
        WHEN at.status NOT IN ('DONE', 'CLOSED', 'RESOLVED') THEN
          CASE at.priority
            WHEN 'LOW'      THEN 1
            WHEN 'MEDIUM'   THEN 2
            WHEN 'HIGH'     THEN 3
            WHEN 'CRITICAL' THEN 4
            ELSE 1
          END
        ELSE 0
      END
    )::int AS workload_index
  FROM assigned_tickets at
  GROUP BY at."userId"
),

-- =========================
-- New tickets assigned in last 7 days
-- =========================
assignment_stats AS (
  SELECT
    ta."userId",
    COUNT(*)::int AS new_tickets_assigned_last_7_days
  FROM "TicketAssignee" ta
  WHERE ta."assignedAt" >= now() - interval '7 days'
  GROUP BY ta."userId"
),

-- =========================
-- Comments metrics
-- =========================
comments_written AS (
  SELECT
    c."userId",
    COUNT(*)::int AS comments_written_last_7_days
  FROM "Comment" c
  WHERE c."createdAt" >= now() - interval '7 days'
  GROUP BY c."userId"
),

comments_on_my_tickets AS (
  SELECT
    ta."userId",
    COUNT(*)::int AS comments_on_my_tickets_last_7_days
  FROM "Comment" c
  JOIN "TicketAssignee" ta ON ta."ticketId" = c."ticketId"
  WHERE c."createdAt" >= now() - interval '7 days'
  GROUP BY ta."userId"
),

-- =========================
-- Notification metrics
-- =========================
notification_stats AS (
  SELECT
    n."recipientId" AS "userId",
    COUNT(*)::int   AS unread_notifications_count
  FROM "Notification" n
  WHERE n.state = 'UNREAD'
  GROUP BY n."recipientId"
)

SELECT
  u.id         AS "userId",
  u."fullName",
  u.email,

  -- tasks
  COALESCE(ts.total_assigned_tasks, 0)        AS "totalAssignedTasks",
  COALESCE(ts.tasks_in_progress, 0)           AS "tasksInProgress",
  COALESCE(ts.overdue_tasks, 0)               AS "overdueTasks",
  CASE
    WHEN COALESCE(ts.total_assigned_tasks, 0) = 0 THEN 0
    ELSE ROUND(
      (ts.completed_tasks::numeric * 100.0)
        / ts.total_assigned_tasks,
      2
    )
  END                                         AS "taskCompletionPercentage",
  COALESCE(ts.open_tasks_high_priority, 0)    AS "openTasksHighPriority",
  COALESCE(ts.tasks_due_next_7_days, 0)       AS "tasksDueNext7Days",
  COALESCE(ts.completed_tasks_last_7_days, 0) AS "completedTasksLast7Days",

  -- issues
  COALESCE(is2.total_assigned_issues, 0)         AS "totalAssignedIssues",
  COALESCE(is2.issues_in_progress, 0)            AS "issuesInProgress",
  COALESCE(is2.critical_issues, 0)               AS "criticalIssues",
  COALESCE(is2.open_issues_high_priority, 0)     AS "openIssuesHighPriority",
  COALESCE(is2.issues_due_next_7_days, 0)        AS "issuesDueNext7Days",
  COALESCE(is2.completed_issues_last_7_days, 0)  AS "completedIssuesLast7Days",

  -- bug-to-task completion ratio (lifetime)
  CASE
    WHEN COALESCE(ts.completed_tasks, 0) = 0 THEN NULL
    ELSE ROUND(
      COALESCE(is2.completed_issues, 0)::numeric
        / ts.completed_tasks::numeric,
      2
    )
  END                                           AS "bugToTaskCompletionRatio",

  -- projects
  COALESCE(ps.total_assigned_projects, 0)       AS "totalAssignedProjects",
  COALESCE(ps.projects_in_progress, 0)          AS "projectsInProgress",
  pp.primary_project_id                         AS "primaryProjectId",
  COALESCE(tbp.tickets_by_project, '[]'::jsonb) AS "ticketsByProject",

  -- workload
  COALESCE(ws.workload_index, 0)                     AS "workloadIndex",
  COALESCE(asg.new_tickets_assigned_last_7_days, 0)  AS "newTicketsAssignedLast7Days",

  -- collaboration
  COALESCE(cw.comments_written_last_7_days, 0)        AS "commentsWrittenLast7Days",
  COALESCE(cmt.comments_on_my_tickets_last_7_days, 0) AS "commentsOnMyTicketsLast7Days",
  COALESCE(ns.unread_notifications_count, 0)          AS "unreadNotificationsCount"

FROM "User" u
LEFT JOIN task_stats              ts  ON ts."userId"  = u.id
LEFT JOIN issue_stats             is2 ON is2."userId" = u.id
LEFT JOIN project_stats           ps  ON ps."userId"  = u.id
LEFT JOIN tickets_by_project      tbp ON tbp."userId" = u.id
LEFT JOIN primary_project         pp  ON pp."userId"  = u.id
LEFT JOIN workload_stats          ws  ON ws."userId"  = u.id
LEFT JOIN assignment_stats        asg ON asg."userId" = u.id
LEFT JOIN comments_written        cw  ON cw."userId"  = u.id
LEFT JOIN comments_on_my_tickets  cmt ON cmt."userId" = u.id
LEFT JOIN notification_stats      ns  ON ns."userId"  = u.id
WHERE u.role = 'DEVELOPER';

-- Optional indexes for faster lookups
CREATE INDEX IF NOT EXISTS idx_developer_dashboard_user_id
  ON developer_dashboard ("userId");
