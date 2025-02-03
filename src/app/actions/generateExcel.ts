// server-side code (unchanged)

'use server'

import { PrismaClient } from '@prisma/client';
import * as XLSX from 'xlsx';

const prisma = new PrismaClient();

// Fetch All Batches Function
async function getAllBatches(companyId: number) {
  try {
    const result = await prisma.companySkuBatchNumRelation.findMany({
      where: {
        companySku: {
          company_id: companyId,
        },
      },
      include: {
        batchNum: {
          select: {
            quantity: true,
            created_at: true
          },
        },
        companySku: {
          include: {
            company: {
              select: {
                name: true,
              },
            },
            sku: {
              select: {
                sku_name: true,
              },
            },
          },
        },
      },
      orderBy: {
        batchNum: {
          created_at: 'asc',
        },
      },
    });

    return result.map((batch) => ({
      company_name: batch.companySku?.company?.name || 'N/A',
      sku_name: batch.companySku?.sku?.sku_name || 'N/A',
      batch_quantity: batch.batchNum?.quantity || 0,
      timestamp: batch.batchNum?.created_at || new Date(),
    }));
  } catch (error) {
    console.error('Error fetching batches:', error);
    throw new Error('Failed to fetch batches');
  }
}

async function exportToExcel(data: any) {
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'All Batches');

  return XLSX.write(wb, { bookType: 'xlsx', type: 'buffer' });
}

export async function handleExcelDownload(companyId: number) {
  try {
    const batches = await getAllBatches(companyId);
    const excelFile = await exportToExcel(batches);
    
    return excelFile; // Send the buffer to the client
  } catch (error) {
    console.error('Error downloading Excel:', error);
    throw new Error('Failed to generate Excel');
  }
}
