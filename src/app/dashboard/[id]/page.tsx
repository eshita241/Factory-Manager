"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface SKU {
  id: number;
  name: string;
  batchNumber: string;
  quantity: number;
  createdAt: string;
}

interface SKUCardProps {
  sku: SKU;
  onUpdate: (sku: SKU) => void;
}

function SKUCard({ sku, onUpdate }: SKUCardProps) {
  const [quantity, setQuantity] = useState(sku.quantity);

  const handleSave = () => {
    const newBatchNumber = `B${String(parseInt(sku.batchNumber.replace(/\D/g, "")) + 1).padStart(3, "0")}`;

    const updatedSKU = {
      ...sku,
      batchNumber: newBatchNumber,
      quantity,
      createdAt: new Date().toISOString(),
    };
    onUpdate(updatedSKU);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{sku.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Batch Number</Label>
          <Input value={sku.batchNumber} readOnly className="bg-gray-200 cursor-not-allowed" />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`quantity-${sku.id}`}>Quantity</Label>
          <Input
            id={`quantity-${sku.id}`}
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>
        <Button onClick={handleSave} className="w-full">
          Save
        </Button>
        {sku.createdAt && (
          <p className="text-sm text-gray-500">
            Last updated: {new Date(sku.createdAt).toLocaleString()}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export default function DashboardPage() {
  const [skus, setSkus] = useState<SKU[]>([
    { id: 1, name: "200gm Sliced Bread", batchNumber: "B001", quantity: 50, createdAt: "" },
    { id: 2, name: "400gm Sliced Bread", batchNumber: "B002", quantity: 30, createdAt: "" },
    { id: 3, name: "Whole Wheat Bread", batchNumber: "B003", quantity: 20, createdAt: "" },
  ]);

  const handleUpdate = (updatedSKU: SKU) => {
    setSkus((prevSkus) => prevSkus.map((sku) => (sku.id === updatedSKU.id ? updatedSKU : sku)));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="space-y-4">
        {skus.map((sku) => (
          <SKUCard key={sku.id} sku={sku} onUpdate={handleUpdate} />
        ))}
      </div>
    </div>
  );
}
