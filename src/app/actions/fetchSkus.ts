// src/actions/fetchSkus.ts
'use server';

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function fetchSkus(companyId: number) {
  try {
    await prisma.$connect(); // Ensure connection
    const skus = await prisma.companySku.findMany({
      where: {
        company_id: companyId,
      },
      include: {
        sku: true,
        companySkuBatches: {
          include: {
            batchNum: true,
          },
        },
      },
    });
    return { success: true, skus };
  } catch (error) {
    console.error("Error fetching SKUs:", error);
    return { success: false, error: "Failed to fetch SKUs", skus: [] };
  } finally {
    await prisma.$disconnect();
  }
}
