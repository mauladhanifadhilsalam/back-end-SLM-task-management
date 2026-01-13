/*
  Warnings:

  - You are about to drop the column `roleInProject` on the `ProjectAssignment` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[projectId,userId]` on the table `ProjectAssignment` will be added. If there are existing duplicate values, this will fail.

*/
-- Add global project role reference on users.
ALTER TABLE "User" ADD COLUMN "projectRole" TEXT;

-- Create flexible project roles table.
CREATE TABLE "ProjectRole" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    CONSTRAINT "ProjectRole_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "ProjectRole_code_key" ON "ProjectRole"("code");

-- Seed default project roles.
INSERT INTO "ProjectRole" ("code", "name") VALUES
('TECH_LEAD', 'Tech Lead'),
('FRONT_END', 'Front End'),
('BACK_END', 'Back End'),
('DEVOPS', 'DevOps'),
('CLOUD_ENGINEER', 'Cloud Engineer')
ON CONFLICT ("code") DO NOTHING;

-- Backfill users from assignment roles (most common role, tie broken by latest assignment).
WITH role_counts AS (
    SELECT
        "userId",
        "roleInProject",
        COUNT(*) AS role_count,
        MAX("assignedAt") AS last_assigned
    FROM "ProjectAssignment"
    GROUP BY "userId", "roleInProject"
),
ranked AS (
    SELECT
        *,
        ROW_NUMBER() OVER (
            PARTITION BY "userId"
            ORDER BY role_count DESC, last_assigned DESC, "roleInProject"
        ) AS rn
    FROM role_counts
)
UPDATE "User" AS u
SET "projectRole" = r."roleInProject"::text
FROM ranked r
WHERE u.id = r."userId" AND u."role" = 'DEVELOPER' AND r.rn = 1;

-- Drop per-project role and rebuild uniqueness.
DROP INDEX "public"."ProjectAssignment_projectId_userId_roleInProject_key";
ALTER TABLE "ProjectAssignment" DROP COLUMN "roleInProject";
CREATE UNIQUE INDEX "ProjectAssignment_projectId_userId_key" ON "ProjectAssignment"("projectId", "userId");

-- Add foreign key to project roles.
ALTER TABLE "User" ADD CONSTRAINT "User_projectRole_fkey"
FOREIGN KEY ("projectRole") REFERENCES "ProjectRole"("code") ON DELETE SET NULL ON UPDATE CASCADE;

-- Remove legacy enum type.
DROP TYPE "public"."ProjectRoleType";
