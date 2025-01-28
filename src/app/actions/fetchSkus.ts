'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const fetchSkusByCompanyId = async (companyId: number) => {
  try {
    const skus = await prisma.companySku.findMany({
      where: {
        company_id: companyId,
      },
      include: {
        sku: true, // Including the related SKU data
      },
    });

    return { success: true, skus };
  } catch (error) {
    console.error("Error fetching SKUs:", error);
    return { success: false, error: "Error fetching SKUs" };
  }
};
