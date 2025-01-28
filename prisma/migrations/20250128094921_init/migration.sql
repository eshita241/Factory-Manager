/*
  Warnings:

  - The primary key for the `CompanySku` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `CompanySkuBatchNumRelation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `company_id` on the `CompanySkuBatchNumRelation` table. All the data in the column will be lost.
  - You are about to drop the column `sku_id` on the `CompanySkuBatchNumRelation` table. All the data in the column will be lost.
  - Added the required column `company_sku_id` to the `CompanySkuBatchNumRelation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CompanySkuBatchNumRelation" DROP CONSTRAINT "CompanySkuBatchNumRelation_company_id_sku_id_fkey";

-- AlterTable
ALTER TABLE "CompanySku" DROP CONSTRAINT "CompanySku_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "CompanySku_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "CompanySkuBatchNumRelation" DROP CONSTRAINT "CompanySkuBatchNumRelation_pkey",
DROP COLUMN "company_id",
DROP COLUMN "sku_id",
ADD COLUMN     "company_sku_id" INTEGER NOT NULL,
ADD CONSTRAINT "CompanySkuBatchNumRelation_pkey" PRIMARY KEY ("company_sku_id", "batch_id");

-- AddForeignKey
ALTER TABLE "CompanySkuBatchNumRelation" ADD CONSTRAINT "CompanySkuBatchNumRelation_company_sku_id_fkey" FOREIGN KEY ("company_sku_id") REFERENCES "CompanySku"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
