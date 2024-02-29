/*
  Warnings:

  - You are about to alter the column `price` on the `Perfume` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Perfume" ALTER COLUMN "price" SET DATA TYPE INTEGER;
