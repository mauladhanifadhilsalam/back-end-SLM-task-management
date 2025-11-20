/*
  Warnings:

  - You are about to drop the column `ticketId` on the `Notification` table. All the data in the column will be lost.
  - Added the required column `targetType` to the `Notification` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "NotificationTargetType" AS ENUM ('PROJECT', 'TICKET', 'COMMENT');

-- CreateEnum
CREATE TYPE "NotificationState" AS ENUM ('UNREAD', 'READ');

-- DropForeignKey
ALTER TABLE "public"."Notification" DROP CONSTRAINT "Notification_ticketId_fkey";

-- AlterTable
ALTER TABLE "Notification" DROP COLUMN "ticketId",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "emailError" TEXT,
ADD COLUMN     "readAt" TIMESTAMP(3),
ADD COLUMN     "state" "NotificationState" NOT NULL DEFAULT 'UNREAD',
ADD COLUMN     "targetId" INTEGER,
ADD COLUMN     "targetType" "NotificationTargetType" NOT NULL,
ALTER COLUMN "status" DROP NOT NULL,
ALTER COLUMN "status" DROP DEFAULT;

-- CreateIndex
CREATE INDEX "Notification_recipientId_state_createdAt_idx" ON "Notification"("recipientId", "state", "createdAt");

-- CreateIndex
CREATE INDEX "Notification_recipientId_targetType_targetId_idx" ON "Notification"("recipientId", "targetType", "targetId");

-- CreateIndex
CREATE INDEX "Notification_status_createdAt_idx" ON "Notification"("status", "createdAt");
