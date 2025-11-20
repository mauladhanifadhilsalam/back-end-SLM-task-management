-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "emailFrom" TEXT,
ADD COLUMN     "emailReplyTo" TEXT,
ADD COLUMN     "emailText" TEXT,
ADD COLUMN     "subject" TEXT;
