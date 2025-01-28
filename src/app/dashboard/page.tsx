"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchCompanies } from "../actions/fetchCompanies";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CompanyList() {
  const [companies, setCompanies] = useState<{ id: number; name: string }[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); // Access Next.js router to navigate between pages

  useEffect(() => {
    const loadCompanies = async () => {
      const result = await fetchCompanies();

      if (result.success) {
        setCompanies(result.companies ?? []);
      } else {
        setError("Failed to load companies");
      }
    };

    loadCompanies();
  }, []);

  const handleCompanyClick = (companyId: number) => {
    // Navigate to the dashboard page with company ID in the URL
    router.push(`/dashboard/${companyId}`);
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
        </CardContent>
      </Card>
    </div>
  );
}
