-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sku" (
    "id" SERIAL NOT NULL,
    "sku_name" TEXT NOT NULL,

    CONSTRAINT "Sku_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BatchNum" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "BatchNum_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompanySku" (
    "id" SERIAL NOT NULL,
    "company_id" INTEGER NOT NULL,
    "sku_id" INTEGER NOT NULL,

    CONSTRAINT "CompanySku_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompanySkuBatchNumRelation" (
    "company_sku_id" INTEGER NOT NULL,
    "batch_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CompanySkuBatchNumRelation_pkey" PRIMARY KEY ("company_sku_id","batch_id")
);

-- AddForeignKey
ALTER TABLE "CompanySku" ADD CONSTRAINT "CompanySku_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanySku" ADD CONSTRAINT "CompanySku_sku_id_fkey" FOREIGN KEY ("sku_id") REFERENCES "Sku"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanySkuBatchNumRelation" ADD CONSTRAINT "CompanySkuBatchNumRelation_company_sku_id_fkey" FOREIGN KEY ("company_sku_id") REFERENCES "CompanySku"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanySkuBatchNumRelation" ADD CONSTRAINT "CompanySkuBatchNumRelation_batch_id_fkey" FOREIGN KEY ("batch_id") REFERENCES "BatchNum"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
