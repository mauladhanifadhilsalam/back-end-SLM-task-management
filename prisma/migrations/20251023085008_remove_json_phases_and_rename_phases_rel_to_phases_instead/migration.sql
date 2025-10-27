/*
  Warnings:

  - You are about to drop the column `phases` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "phases";

-- AlterTable
ALTER TABLE "ProjectOwner" ALTER COLUMN "company" DROP NOT NULL;
