/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `ProjectOwner` will be added. If there are existing duplicate values, this will fail.
  - Made the column `company` on table `ProjectOwner` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `ProjectOwner` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone` on table `ProjectOwner` required. This step will fail if there are existing NULL values in that column.
  - Made the column `address` on table `ProjectOwner` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ProjectOwner" ALTER COLUMN "company" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "phone" SET NOT NULL,
ALTER COLUMN "address" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ProjectOwner_email_key" ON "ProjectOwner"("email");
