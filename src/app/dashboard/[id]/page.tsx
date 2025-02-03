'use client';

import { useEffect, useState } from 'react';
import { createSKU } from '../../actions/createSKU'; 

export default function CreateSKUComponent() {
  const [skuName, setSkuName] = useState('Cream Bun Vanilla');
  const [companyId, setCompanyId] = useState(15); // Example company ID
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

{/*"use client"

import { useEffect, useState } from "react";
import { createCompany } from "../../actions/createCompany";

interface CompanyResponse {
  success: boolean;
  company?: {
    id: number;
    name: string;
  };
  error?: string;
}

export default function CreateCompanyClient() {
  const [companyName, setCompanyName] = useState("Modern"); // Default name
  const [response, setResponse] = useState<CompanyResponse | null>(null);

  useEffect(() => {
    const createNewCompany = async () => {
      try {
        const result = await createCompany(companyName);
        setResponse(result);
      } catch (error) {
        console.error("Error creating company:", error);
        setResponse({ success: false, error: "Unexpected error occurred" });
      }
    };

    createNewCompany();
  }, [companyName]); // Trigger when companyName changes

  return (
    <div className="p-4 bg-gray-100 rounded-xl shadow-md">
      <h1 className="text-xl font-semibold mb-2">Create Company</h1>
      <input
        type="text"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        className="border p-2 rounded w-full mb-4"
        placeholder="Enter company name"
      />
      {response && (
        <div
          className={`p-3 rounded ${response.success ? "bg-green-200" : "bg-red-200"}`}
        >
          {response.success
            ? `Company Created: ${response.company?.name}`
            : `Error: ${response.error}`}
        </div>
      )}
    </div>
  );
}*/}
