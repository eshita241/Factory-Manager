"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import SKUCard from "@/components/SKUCard"
import { Button } from "@/components/ui/button"
//import FileSaver from "file-saver"
//import * as XLSX from "xlsx"

interface SKU {
  id: number
  name: string
  batchNumber: string
  quantity: number
  createdAt: string
}

export default function SKUList() {
  const [skus, setSKUs] = useState<SKU[]>([])
  const searchParams = useSearchParams()
  const company = searchParams.get("company")

  useEffect(() => {
    // In a real application, you would fetch the SKUs from your API here
    setSKUs([
      { id: 1, name: "SKU 1", batchNumber: "", quantity: 0, createdAt: "" },
      { id: 2, name: "SKU 2", batchNumber: "", quantity: 0, createdAt: "" },
      { id: 3, name: "SKU 3", batchNumber: "", quantity: 0, createdAt: "" },
    ])
  }, [])

  const handleSKUUpdate = (updatedSKU: SKU) => {
    setSKUs(skus.map((sku) => (sku.id === updatedSKU.id ? updatedSKU : sku)))
  }

  {/*const handleDownloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      skus.map((sku) => ({
        "Company Name": company,
        SKU: sku.name,
        "Batch Number": sku.batchNumber,
        "Batch Quantity": sku.quantity,
        "Created At": sku.createdAt,
      })),
    )
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, "SKUs")
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" })
    const data = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" })
    FileSaver.saveAs(data, "sku_list.xlsx")
  }*/}

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">SKU List for {company}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skus.map((sku) => (
          <SKUCard key={sku.id} sku={sku} onUpdate={handleSKUUpdate} />
        ))}
      </div>
      {/*<Button onClick={handleDownloadExcel} className="mt-4">
        Download Excel
      </Button>*/}
    </div>
  )
}

