'use client';

import { useState, useEffect } from 'react';
import * as XLSX from 'xlsx'; // Import XLSX for file generation
import { fetchCompanies } from '../actions/fetchCompanies';
import { fetchSkus } from '../actions/fetchSkus';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { saveBatch } from '../actions/saveBatch';
import CustomQuantityInput from "@/components/customQuantityInput"; // Import the custom input

export default function CompanyList() {
  const [companies, setCompanies] = useState<{ id: number; name: string }[]>([]);
  const [skus, setSkus] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedCompanyId, setSelectedCompanyId] = useState<number | null>(null);
  const [updatedBatches, setUpdatedBatches] = useState<Map<number, number>>(new Map());
  const [savedBatches, setSavedBatches] = useState<any[]>([]); // State to store saved batches
  const [batchNumber, setBatchNumber] = useState<number>(0); // Track the batch number

  useEffect(() => {
    const loadCompanies = async () => {
      const result = await fetchCompanies();

      if (result.success) {
        setCompanies(result.companies ?? []);
      } else {
        setError('Failed to load companies');
      }
    };

    loadCompanies();
  }, []);

  useEffect(() => {
    const loadSkus = async () => {
      if (selectedCompanyId === null) return;

      const result = await fetchSkus(selectedCompanyId);

      if (result.success) {
        setSkus(result.skus ?? []);
      } else {
        setError('Failed to load SKUs');
      }
    };

    loadSkus();
  }, [selectedCompanyId]);

  const handleSaveBatchForSku = async (companySkuId: number) => {
    const quantity = updatedBatches.get(companySkuId);
    if (quantity !== undefined) {
      const result = await saveBatch(companySkuId, quantity);
      if (result.success) {
        alert('Batch saved successfully!');
        // Update the batch number after a successful save
        setBatchNumber((prevBatchNumber) => prevBatchNumber + 1);
        
        // Add the new batch to the savedBatches state
        setSavedBatches((prevBatches) => [
          ...prevBatches,
          { sku_id: companySkuId, quantity, batch_number: batchNumber, timestamp: new Date().toISOString() }
        ]);
      } else {
        alert('Error saving batch');
      }
    }
  };

  const handleCompanyClick = (companyId: number) => {
    setSelectedCompanyId(companyId);
  };

  const handleQuantityChange = (companySkuId: number, quantity: number) => {
    setUpdatedBatches(new Map(updatedBatches.set(companySkuId, quantity)));
  };

  const handleDownload = () => {
    if (savedBatches.length === 0) {
      alert('No batches to download');
      return;
    }

    const ws = XLSX.utils.json_to_sheet(savedBatches); // Convert saved batches to sheet
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Saved Batches');
    const file = XLSX.write(wb, { bookType: 'xlsx', type: 'buffer' });

    const blob = new Blob([file], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'saved_batches.xlsx';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Company List</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && <p className="text-red-500 text-center">{error}</p>}
          {companies.length === 0 ? (
            <p className="text-center">No companies available</p>
          ) : (
            companies.map((company) => (
              <Button
                key={company.id}
                className="w-full"
                onClick={() => handleCompanyClick(company.id)}
              >
                {company.name}
              </Button>
            ))
          )}

          {/* Display SKUs for selected company */}
          {selectedCompanyId && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold">SKUs for Selected Company:</h3>
              {skus.length === 0 ? (
                <p className="text-center">No SKUs available for the selected company</p>
              ) : (
                skus.map((sku) => (
                  <Card key={sku.id} className="mb-4">
                    <CardHeader>
                      <CardTitle>{sku.sku.sku_name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>Batch Number: {batchNumber}</CardDescription> {/* Display dynamic batch number */}
                      <CardDescription>SKU Code: {sku.sku.sku_code}</CardDescription>
                      <CustomQuantityInput
                        value={updatedBatches.get(sku.id) ?? 0} // Use the value from updatedBatches map
                        onChange={(quantity) => handleQuantityChange(sku.id, quantity)} // Update the batch quantity
                        className="w-full mt-2"
                      />
                      <Button
                        className="w-full mt-4"
                        onClick={() => handleSaveBatchForSku(sku.id)} // Pass batch number when saving
                      >
                        Save Batch
                      </Button>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          )}
        </CardContent>
        <Button className="mt-4" onClick={handleDownload}>Download Excel</Button>
      </Card>
    </div>
  );
}
