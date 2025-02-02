"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CompanyList() {
  const [companies] = useState<{ id: number; name: string }[]>([
    { id: 1, name: "Red Cow" },
    { id: 2, name: "Modern" }
  ]);

  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

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
