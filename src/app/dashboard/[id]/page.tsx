'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fetchSkusFromDb(companyId: number) {
  try {
    // Add debugging logs here
    console.log("Fetching SKUs for companyId:", companyId);

    // Fetch the SKUs related to the company from the database
    const skus = await prisma.companySku.findMany({
      where: {
        company_id: companyId, // Fetch using the company ID
      },
      include: {
        sku: true,
        companySkuBatches: {
          include: {
            batchNum: true,
          },
        },
      },
    });

    // Add debugging log to check what is returned from the database
    console.log("Fetched SKUs:", skus);
    return skus;
  } catch (error) {
    console.error("Error fetching SKUs from DB:", error);
    throw error;
  }
}

export default function DashboardPage({ params }: { params: { companyId: string } }) {
  const [skus, setSkus] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const companyId = parseInt(params.companyId); // Parse companyId from params
        console.log("Parsed companyId:", companyId); // Add debugging log here

        if (isNaN(companyId)) {
          setError("Invalid company ID");
          return;
        }

        const skusFromDb = await fetchSkusFromDb(companyId); // Fetch the SKUs from the DB
        setSkus(skusFromDb);

        if (skusFromDb.length === 0) {
          setError("No SKUs available for the selected company");
        }
      } catch (error) {
        setError("Failed to load SKUs");
        console.error("Error in fetching SKUs:", error);
      }
    };

    fetchData(); // Call fetchData when component mounts
  }, [params.companyId]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Company Dashboard</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && <p className="text-red-500 text-center">{error}</p>}
          {skus.length === 0 ? (
            <p className="text-center">No SKUs available for the selected company</p>
          ) : (
            skus.map((sku) => (
              <div key={sku.id} className="p-2">
                <Button className="w-full">{sku.sku.sku_name}</Button>
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}
