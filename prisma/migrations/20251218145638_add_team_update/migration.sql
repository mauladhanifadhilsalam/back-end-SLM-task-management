-- CreateEnum
CREATE TYPE "TeamUpdateStatus" AS ENUM ('NOT_STARTED', 'IN_PROGRESS', 'DONE');

-- CreateTable
CREATE TABLE "TeamUpdate" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "status" "TeamUpdateStatus" NOT NULL,
    "yesterdayWork" TEXT NOT NULL,
    "todayWork" TEXT NOT NULL,
    "blocker" TEXT NOT NULL,
    "nextAction" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TeamUpdate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TeamUpdate" ADD CONSTRAINT "TeamUpdate_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
