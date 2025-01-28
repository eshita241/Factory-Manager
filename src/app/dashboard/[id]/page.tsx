"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation"; // Correct hook for dynamic route params
import { fetchSkusByCompanyId } from "../../actions/fetchSkus"; // Import server action
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  const [selectedCompanySkus, setSelectedCompanySkus] = useState<{ id: number; sku_name: string }[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const params = useParams(); // Use this to extract route parameters

  // Extract companyId from the params
  const companyId = params.companyId;

  useEffect(() => {
    const loadCompanySkus = async () => {
      if (companyId) {
        try {
          // Call the server-side action to fetch the SKUs for the selected company
          const result = await fetchSkusByCompanyId(Number(companyId));

          if (result.success) {
            // Ensure the data is in the correct format before updating state
            const skus = result.skus?.map(skuData => ({
              id: skuData.sku.id,    // Map SKU data correctly
              sku_name: skuData.sku.sku_name,
            })) || []; // Default to an empty array if undefined

            setSelectedCompanySkus(skus); // Set the SKUs in state
          } else {
            setError(result.error ?? "An unknown error occurred");
          }
        } catch (error) {
          setError("Failed to fetch SKUs");
        }
      }
    };

    loadCompanySkus();
  }, [companyId]); // Re-run the effect when companyId changes

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>SKU List for Company {companyId}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && <p className="text-red-500 text-center">{error}</p>}
          {selectedCompanySkus && selectedCompanySkus.length > 0 ? (
            <div>
              <h3 className="text-xl font-semibold">SKUs for this Company:</h3>
              <ul className="mt-2">
                {selectedCompanySkus.map((sku) => (
                  <li key={sku.id} className="py-1">
                    {sku.sku_name}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-center">No SKUs available for this company</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
