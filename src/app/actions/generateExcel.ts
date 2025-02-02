import { NextApiRequest, NextApiResponse } from 'next';
import { Client } from 'pg'; // Import the PostgreSQL client
import * as XLSX from 'xlsx';

// Setup PostgreSQL connection using DATABASE_URL environment variable
const client = new Client({
  connectionString: process.env.DATABASE_URL,  // Use the DATABASE_URL directly
  ssl: { rejectUnauthorized: false },  // Necessary for some cloud providers (e.g., Heroku)
});

client.connect();

// Save Batch Function - Save batch details into the database
async function saveBatchToDB(companySkuId: number, quantity: number) {
  const query = `
    INSERT INTO batches (company_sku_id, quantity, timestamp)
    VALUES ($1, $2, NOW())
  `;
  
  try {
    await client.query(query, [companySkuId, quantity]);
    return { success: true };
  } catch (error) {
    console.error('Error saving batch:', error);
    return { success: false, message: 'Failed to save batch' };
  }
}

// Fetch Saved Batches Function - Query to get batches for the given date
async function getSavedBatches(date: string) {
  const query = `
    SELECT sku_id, quantity, timestamp
    FROM batches
    WHERE DATE(timestamp) = $1
  `;

  try {
    const result = await client.query(query, [date]);
    return result.rows;
  } catch (error) {
    console.error('Error fetching saved batches:', error);
    throw new Error('Failed to fetch saved batches');
  }
}

// Export to Excel Function - Convert batches data to Excel
async function exportToExcel(data: any) {
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Saved Batches');
  
  const file = XLSX.write(wb, { bookType: 'xlsx', type: 'buffer' });
  return file;
}

// API route handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Save batch logic
    const { companySkuId, quantity } = req.body;

    if (companySkuId && quantity) {
      const result = await saveBatchToDB(companySkuId, quantity);
      if (result.success) {
        return res.status(200).json({ success: true, message: 'Batch saved successfully' });
      }
      return res.status(500).json({ success: false, message: result.message });
    }
    
    return res.status(400).json({ success: false, message: 'Missing companySkuId or quantity' });
  }

  if (req.method === 'GET') {
    // Fetch saved batches and export to Excel
    const { date, userId, password } = req.query;

    if (!userId || !password) {
      return res.status(400).json({ success: false, message: 'User ID and password are required' });
    }

    // Validate user credentials (simplified for this example)
    if (userId !== 'admin' || password !== 'admin_password') {
      return res.status(403).json({ success: false, message: 'Unauthorized' });
    }

    try {
      const batches = await getSavedBatches(date as string);
      
      if (batches.length === 0) {
        return res.status(404).json({ success: false, message: 'No saved batches found for the selected date' });
      }

      const excelFile = await exportToExcel(batches);
      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      res.setHeader('Content-Disposition', 'attachment; filename=saved_batches.xlsx');
      return res.send(excelFile);
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Error exporting data to Excel' });
    }
  }

  return res.status(405).json({ success: false, message: 'Method Not Allowed' });
}
