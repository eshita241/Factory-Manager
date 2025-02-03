"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createSKU(skuName:string, companyId:number) {
  try {
    // Check if the company exists
    const company = await prisma.company.findUnique({
      where: { id: companyId },
    });

    if (!company) {
      return { success: false, error: "Company not found" };
    }

    // Create SKU
    const sku = await prisma.sku.create({
      data: {
        sku_name: skuName,
      },
    });

    // Link SKU to Company
    const companySku = await prisma.companySku.create({
      data: {
        company_id: companyId,
        sku_id: sku.id,
      },
    });

    return { success: true, sku, companySku };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "An unknown error occurred" };
  }
}
