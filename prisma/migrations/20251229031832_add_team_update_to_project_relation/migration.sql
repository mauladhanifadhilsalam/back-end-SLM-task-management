/*
  Warnings:

  - Added the required column `projectId` to the `TeamUpdate` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."TeamUpdate" DROP CONSTRAINT "TeamUpdate_userId_fkey";

-- AlterTable
ALTER TABLE "TeamUpdate" ADD COLUMN     "projectId" INTEGER NOT NULL,
ALTER COLUMN "yesterdayWork" DROP NOT NULL,
ALTER COLUMN "blocker" DROP NOT NULL,
ALTER COLUMN "nextAction" DROP NOT NULL;

-- CreateIndex
CREATE INDEX "TeamUpdate_projectId_createdAt_idx" ON "TeamUpdate"("projectId", "createdAt");

-- AddForeignKey
ALTER TABLE "TeamUpdate" ADD CONSTRAINT "TeamUpdate_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamUpdate" ADD CONSTRAINT "TeamUpdate_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
