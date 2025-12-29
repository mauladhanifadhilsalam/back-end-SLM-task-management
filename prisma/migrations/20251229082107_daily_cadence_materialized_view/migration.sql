CREATE MATERIALIZED VIEW daily_cadence AS
WITH project_base AS (
  SELECT
    p.id,
    p.completion
  FROM "Project" p
),
project_developers AS (
  SELECT
    pa."projectId",
    COUNT(DISTINCT pa."userId") FILTER (WHERE u.role = 'DEVELOPER')::int
      AS total_developers_involved
  FROM "ProjectAssignment" pa
  JOIN "User" u ON u.id = pa."userId"
  GROUP BY pa."projectId"
),
ticket_counts AS (
  SELECT
    t."projectId",
    COUNT(*) FILTER (
      WHERE t.type = 'TASK'
        AND t.status <> 'DONE'
    )::int AS total_modules,
    COUNT(*) FILTER (
      WHERE t.type = 'ISSUE'
        AND t.status <> 'DONE'
    )::int AS total_issues
  FROM "Ticket" t
  GROUP BY t."projectId"
),
project_history AS (
  SELECT
    p.id AS "projectId",
    COALESCE(hist.history, '[]'::jsonb) AS history
  FROM "Project" p
  LEFT JOIN LATERAL (
    WITH days AS (
      SELECT d::date AS day
      FROM generate_series(
        current_date - interval '14 days',
        current_date - interval '1 day',
        interval '1 day'
      ) AS d
      WHERE EXTRACT(DOW FROM d) NOT IN (0, 6)
      ORDER BY d DESC
      LIMIT 5
    ),
    day_stats AS (
      SELECT
        days.day,
        COUNT(*) FILTER (
          WHERE t.type = 'ISSUE'
            AND t."createdAt"::date = days.day
            AND t.status <> 'DONE'
        )::int AS total_issues,
        COUNT(*) FILTER (
          WHERE t.type = 'TASK'
            AND t."dueDate" IS NOT NULL
            AND t."dueDate"::date < days.day
            AND t.status NOT IN ('DONE', 'CLOSED')
        )::int AS overdue_tasks
      FROM days
      LEFT JOIN "Ticket" t ON t."projectId" = p.id
      GROUP BY days.day
    )
    SELECT
      jsonb_agg(
        jsonb_build_object(
          'date', day_stats.day,
          'totalIssues', day_stats.total_issues,
          'note', CASE
            WHEN day_stats.overdue_tasks = 0
              THEN 'all tasks on track'
            WHEN day_stats.overdue_tasks = 1
              THEN '1 task is not on track'
            ELSE day_stats.overdue_tasks || ' tasks are not on track'
          END
        )
        ORDER BY day_stats.day DESC
      ) AS history
    FROM day_stats
  ) hist ON TRUE
)

SELECT
  pb.id AS "projectId",
  current_date AS "date",
  pb.completion AS "progress",
  (100 - pb.completion) AS "remainingProgress",
  COALESCE(pd.total_developers_involved, 0) AS "totalDevelopersInvolved",
  COALESCE(tc.total_modules, 0) AS "totalModules",
  COALESCE(tc.total_issues, 0) AS "totalIssues",
  ph.history AS "history"
FROM project_base pb
LEFT JOIN project_developers pd ON pd."projectId" = pb.id
LEFT JOIN ticket_counts tc ON tc."projectId" = pb.id
LEFT JOIN project_history ph ON ph."projectId" = pb.id;

CREATE INDEX IF NOT EXISTS idx_daily_cadence_project_id
  ON daily_cadence ("projectId");
