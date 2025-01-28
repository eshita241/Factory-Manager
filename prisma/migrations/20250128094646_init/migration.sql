/*
  Warnings:

  - You are about to drop the `CompanySkuBatchnumRelation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CompanySkuBatchnumRelation" DROP CONSTRAINT "CompanySkuBatchnumRelation_batch_id_fkey";

-- DropForeignKey
ALTER TABLE "CompanySkuBatchnumRelation" DROP CONSTRAINT "CompanySkuBatchnumRelation_company_id_fkey";

-- DropForeignKey
ALTER TABLE "CompanySkuBatchnumRelation" DROP CONSTRAINT "CompanySkuBatchnumRelation_sku_id_fkey";

-- DropTable
DROP TABLE "CompanySkuBatchnumRelation";

-- CreateTable
CREATE TABLE "CompanySku" (
    "company_id" INTEGER NOT NULL,
    "sku_id" INTEGER NOT NULL,

    CONSTRAINT "CompanySku_pkey" PRIMARY KEY ("company_id","sku_id")
);

-- CreateTable
CREATE TABLE "CompanySkuBatchNumRelation" (
    "company_id" INTEGER NOT NULL,
    "sku_id" INTEGER NOT NULL,
    "batch_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CompanySkuBatchNumRelation_pkey" PRIMARY KEY ("company_id","sku_id","batch_id")
);

-- AddForeignKey
ALTER TABLE "CompanySku" ADD CONSTRAINT "CompanySku_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanySku" ADD CONSTRAINT "CompanySku_sku_id_fkey" FOREIGN KEY ("sku_id") REFERENCES "Sku"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanySkuBatchNumRelation" ADD CONSTRAINT "CompanySkuBatchNumRelation_company_id_sku_id_fkey" FOREIGN KEY ("company_id", "sku_id") REFERENCES "CompanySku"("company_id", "sku_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanySkuBatchNumRelation" ADD CONSTRAINT "CompanySkuBatchNumRelation_batch_id_fkey" FOREIGN KEY ("batch_id") REFERENCES "BatchNum"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
