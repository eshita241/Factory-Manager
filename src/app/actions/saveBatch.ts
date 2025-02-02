'use server';

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const saveBatch = async (companySkuId: number, quantity: number) => {
  try {
    // Create a new batch number entry
    const batchNum = await prisma.batchNum.create({
      data: {
        quantity, // Set the quantity for this batch
      },
    });

    // Create the relation between the BatchNum and CompanySku
    const companySkuBatch = await prisma.companySkuBatchNumRelation.create({
      data: {
        company_sku_id: companySkuId, // Relate the batch to the specific company SKU
        batch_id: batchNum.id, // Use the ID of the batchNum
      },
    });

    return { success: true, batch: batchNum };
  } catch (error) {
    console.error('Error saving batch:', error);
    return { success: false, message: 'Failed to save batch' };
  }
};
