/*
  Warnings:

  - You are about to drop the column `latidute` on the `gyms` table. All the data in the column will be lost.
  - Added the required column `latitute` to the `gyms` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "gyms" DROP COLUMN "latidute",
ADD COLUMN     "latitute" DECIMAL(65,30) NOT NULL;
