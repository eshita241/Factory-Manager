'use server'

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createSKU(sku_name: string, companyId: number) {
  try {
    // Create SKU
    const sku = await prisma.sku.create({
      data: {
        sku_name,
      },
    });

    // Link SKU to the Company using the CompanySku table
    const companySku = await prisma.companySku.create({
      data: {
        company_id: companyId,
        sku_id: sku.id, // Link the newly created SKU to the company
      },
    });

    return { success: true, sku, companySku };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    } else {
      return { success: false, error: "An unknown error occurred" };
    }
  }
}


