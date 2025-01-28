"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Dashboard() {
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null)
  const router = useRouter()

  const companies = ["Company A", "Company B"]

  const handleCompanySelect = (company: string) => {
    setSelectedCompany(company)
    router.push(`/sku-list?company=${encodeURIComponent(company)}`)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Select a Company</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {companies.map((company) => (
            <Button key={company} onClick={() => handleCompanySelect(company)} className="w-full">
              {company}
            </Button>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

