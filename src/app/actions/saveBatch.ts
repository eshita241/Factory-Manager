'use server';

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const saveBatch = async (companySkuId: number, quantity: number) => {
  try {
    // First, create a new batch in the BatchNum table with the provided quantity
    const batchNum = await prisma.batchNum.create({
      data: {
        quantity, // Set the quantity for this batch
      },
    });

    // Now create the relation between the created batch and the specific CompanySku
    const companySkuBatch = await prisma.companySkuBatchNumRelation.create({
      data: {
        company_sku_id: companySkuId, // Relate the batch to the specific company SKU
        batch_id: batchNum.id, // Use the ID of the batchNum
      },
    });

    // Optionally, you can fetch the last batch number for the SKU
    // Assuming batch number is stored in batchNum.id
    const latestBatchNumber = batchNum.id;

    // Return a success result with the latest batch number
    return { success: true, batchNumber: latestBatchNumber };
  } catch (error) {
    console.error('Error saving batch:', error);
    return { success: false, message: 'Failed to save batch' };
  }
};
