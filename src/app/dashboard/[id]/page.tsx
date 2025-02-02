'use client';

import { useEffect, useState } from 'react';
import { createSKU } from '../../actions/createSKU'; 

export default function CreateSKUComponent() {
  const [skuName, setSkuName] = useState('Sliced Bread 200gm');
  const [companyId, setCompanyId] = useState(2); // Example company ID
  const [response, setResponse] = useState<{ success: boolean; sku?: any; error?: string } | null>(null);

  useEffect(() => {
    const createNewSKU = async () => {
      try {
        const result = await createSKU(skuName, companyId);
        setResponse(result);
      } catch (error) {
        console.error('Error creating SKU:', error);
        setResponse({ success: false, error: 'Unexpected error occurred' });
      }
    };

    createNewSKU();
  }, [skuName, companyId]); // Calls the function when skuName or companyId changes

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Create SKU</h1>

      <div className="my-4">
        <input
          type="text"
          value={skuName}
          onChange={(e) => setSkuName(e.target.value)}
          placeholder="Enter SKU Name"
          className="border p-2 rounded mr-2"
        />
        <input
          type="number"
          value={companyId}
          onChange={(e) => setCompanyId(Number(e.target.value))}
          placeholder="Enter Company ID"
          className="border p-2 rounded"
        />
      </div>

      {response && (
        <div className={`p-3 rounded ${response.success ? 'bg-green-100' : 'bg-red-100'}`}>
          {response.success ? (
            <div>
              <p>SKU Created Successfully!</p>
              <p>SKU ID: {response.sku?.id}</p>
              <p>SKU Name: {response.sku?.sku_name}</p>
            </div>
          ) : (
            <p>Error: {response.error}</p>
          )}
        </div>
      )}
    </div>
  );
}
