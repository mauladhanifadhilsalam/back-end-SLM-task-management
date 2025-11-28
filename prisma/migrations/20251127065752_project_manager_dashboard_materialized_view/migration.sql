CREATE MATERIALIZED VIEW project_manager_dashboard AS
WITH projects AS (
  SELECT
    id,
    status,
    "endDate"
  FROM "Project"
),
project_stats AS (
  SELECT
    (COUNT(*) FILTER (WHERE TRUE))::int AS total_projects,
    (COUNT(*) FILTER (WHERE status <> 'DONE'))::int AS active_projects,
    (COUNT(*) FILTER (WHERE status = 'ON_HOLD'))::int AS on_hold_projects,
    (COUNT(*) FILTER (WHERE status = 'DONE'))::int AS completed_projects,
    (COUNT(*) FILTER (
      WHERE status <> 'DONE'
        AND "endDate" >= now()
        AND "endDate" < now() + interval '7 days'
    ))::int AS projects_due_next_7_days,
    (COUNT(*) FILTER (
      WHERE status <> 'DONE'
        AND "endDate" >= now()
        AND "endDate" < now() + interval '30 days'
    ))::int AS projects_due_next_30_days,
    (COUNT(*) FILTER (
      WHERE status <> 'DONE'
        AND "endDate" < now()
    ))::int AS overdue_projects
  FROM projects
),
phase_stats AS (
  SELECT
    (COUNT(*) FILTER (
      WHERE "startDate" <= now()
        AND "endDate" >= now()
    ))::int AS active_phases,
    (COUNT(*) FILTER (
      WHERE "endDate" >= now()
        AND "endDate" < now() + interval '30 days'
    ))::int AS phases_due_next_30_days,
    (COUNT(*) FILTER (WHERE "endDate" < now()))::int AS overdue_phases
  FROM "ProjectPhase"
),
tickets AS (
  SELECT
    id,
    "projectId",
    status,
    priority,
    "dueDate",
    "createdAt",
    "updatedAt"
  FROM "Ticket"
),
ticket_stats AS (
  SELECT
    (COUNT(*) FILTER (WHERE TRUE))::int AS total_tickets,
    (COUNT(*) FILTER (
      WHERE status NOT IN ('DONE', 'CLOSED', 'RESOLVED')
    ))::int AS open_tickets,
    (COUNT(*) FILTER (
      WHERE status = 'IN_REVIEW'
    ))::int AS in_review_tickets,
    (COUNT(*) FILTER (
      WHERE status NOT IN ('DONE', 'CLOSED', 'RESOLVED')
        AND "dueDate" IS NOT NULL
        AND "dueDate" < now()
    ))::int AS overdue_tickets,
    (COUNT(*) FILTER (
      WHERE status NOT IN ('DONE', 'CLOSED', 'RESOLVED')
        AND priority IN ('HIGH', 'CRITICAL')
    ))::int AS open_high_priority_tickets,
    (COUNT(*) FILTER (
      WHERE status NOT IN ('DONE', 'CLOSED', 'RESOLVED')
        AND priority = 'CRITICAL'
    ))::int AS open_critical_tickets,
    (COUNT(*) FILTER (
      WHERE status IN ('DONE', 'CLOSED', 'RESOLVED')
        AND "updatedAt" >= now() - interval '7 days'
    ))::int AS completed_tickets_last_7_days,
    (COUNT(*) FILTER (
      WHERE status IN ('DONE', 'CLOSED', 'RESOLVED')
        AND "updatedAt" >= now() - interval '30 days'
    ))::int AS completed_tickets_last_30_days,
    CASE
      WHEN MIN("createdAt") FILTER (WHERE status NOT IN ('DONE', 'CLOSED', 'RESOLVED')) IS NULL THEN NULL
      ELSE FLOOR(
        EXTRACT(
          EPOCH FROM (
            now() - MIN("createdAt") FILTER (WHERE status NOT IN ('DONE', 'CLOSED', 'RESOLVED'))
          )
        ) / 86400
      )::int
    END AS oldest_open_ticket_days
  FROM tickets
),
status_breakdown AS (
  SELECT
    jsonb_agg(
      jsonb_build_object(
        'status', status,
        'count', count
      )
      ORDER BY count DESC, status
    ) AS tickets_by_status
  FROM (
    SELECT
      status,
      COUNT(*)::int AS count
    FROM tickets
    GROUP BY status
  ) sb
),
priority_breakdown AS (
  SELECT
    jsonb_agg(
      jsonb_build_object(
        'priority', priority,
        'count', count
      )
      ORDER BY count DESC, priority
    ) AS tickets_by_priority
  FROM (
    SELECT
      priority,
      COUNT(*)::int AS count
    FROM tickets
    GROUP BY priority
  ) pb
),
tickets_by_project AS (
  SELECT
    t."projectId",
    p.name,
    COUNT(*)::int AS total_tickets,
    COUNT(*) FILTER (
      WHERE t.status NOT IN ('DONE', 'CLOSED', 'RESOLVED')
    )::int AS open_tickets
  FROM tickets t
  JOIN "Project" p ON p.id = t."projectId"
  GROUP BY t."projectId", p.name
),
tickets_by_project_agg AS (
  SELECT
    jsonb_agg(
      jsonb_build_object(
        'projectId', tbp."projectId",
        'name', tbp.name,
        'openTickets', tbp.open_tickets,
        'totalTickets', tbp.total_tickets
      )
      ORDER BY tbp.open_tickets DESC, tbp."projectId"
    ) AS tickets_by_project
  FROM tickets_by_project tbp
),
primary_project AS (
  SELECT
    tbp."projectId" AS primary_project_id
  FROM tickets_by_project tbp
  ORDER BY tbp.open_tickets DESC, tbp."projectId"
  LIMIT 1
),
comment_stats AS (
  SELECT
    (COUNT(*) FILTER (
      WHERE "createdAt" >= now() - interval '7 days'
    ))::int AS comments_last_7_days,
    (COUNT(*) FILTER (
      WHERE "createdAt" >= now() - interval '30 days'
    ))::int AS comments_last_30_days
  FROM "Comment"
),
notification_stats AS (
  SELECT
    n."recipientId" AS user_id,
    COUNT(*)::int AS unread_notifications_count
  FROM "Notification" n
  WHERE n.state = 'UNREAD'
  GROUP BY n."recipientId"
)

SELECT
u.id AS "userId",
u."fullName" AS "fullName",
u.email AS "email",

COALESCE(ps.total_projects, 0) AS "totalProjects",
COALESCE(ps.active_projects, 0) AS "activeProjects",
COALESCE(ps.on_hold_projects, 0) AS "onHoldProjects",
COALESCE(ps.completed_projects, 0) AS "completedProjects",
COALESCE(ps.projects_due_next_7_days, 0) AS "projectsDueNext7Days",
COALESCE(ps.projects_due_next_30_days, 0) AS "projectsDueNext30Days",
COALESCE(ps.overdue_projects, 0) AS "overdueProjects",

COALESCE(phs.active_phases, 0) AS "activePhases",
COALESCE(phs.phases_due_next_30_days, 0) AS "phasesDueNext30Days",
COALESCE(phs.overdue_phases, 0) AS "overduePhases",

COALESCE(ts.total_tickets, 0) AS "totalTickets",
COALESCE(ts.open_tickets, 0) AS "openTickets",
COALESCE(ts.in_review_tickets, 0) AS "inReviewTickets",
COALESCE(ts.overdue_tickets, 0) AS "overdueTickets",
COALESCE(ts.open_high_priority_tickets, 0) AS "openHighPriorityTickets",
COALESCE(ts.open_critical_tickets, 0) AS "openCriticalTickets",
COALESCE(ts.completed_tickets_last_7_days, 0) AS "completedTicketsLast7Days",
COALESCE(ts.completed_tickets_last_30_days, 0) AS "completedTicketsLast30Days",
ts.oldest_open_ticket_days AS "oldestOpenTicketDays",

COALESCE(sb.tickets_by_status, '[]'::jsonb) AS "ticketsByStatus",
COALESCE(pb.tickets_by_priority, '[]'::jsonb) AS "ticketsByPriority",
COALESCE(tbp_agg.tickets_by_project, '[]'::jsonb) AS "ticketsByProject",
pp.primary_project_id AS "primaryProjectId",

COALESCE(cs.comments_last_7_days, 0) AS "commentsLast7Days",
COALESCE(cs.comments_last_30_days, 0) AS "commentsLast30Days",
COALESCE(ns.unread_notifications_count, 0) AS "unreadNotificationsCount"


FROM "User" u
LEFT JOIN project_stats ps ON TRUE
LEFT JOIN phase_stats phs ON TRUE
LEFT JOIN ticket_stats ts ON TRUE
LEFT JOIN status_breakdown sb ON TRUE
LEFT JOIN priority_breakdown pb ON TRUE
LEFT JOIN tickets_by_project_agg tbp_agg ON TRUE
LEFT JOIN primary_project pp ON TRUE
LEFT JOIN comment_stats cs ON TRUE
LEFT JOIN notification_stats ns ON ns.user_id = u.id
WHERE u.role = 'PROJECT_MANAGER';

CREATE INDEX IF NOT EXISTS idx_project_manager_dashboard_user_id
  ON project_manager_dashboard ("userId");
