"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import * as XLSX from "xlsx";

interface SKU {
  id: number;
  name: string;
  batchNumber: string;
  quantity: number;
  createdAt: string; // Date and Time combined
}

interface Company {
  id: number;
  name: string;
  skus: SKU[];
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
      createdAt: new Date().toLocaleString(), // Adds both date and time
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
            Last updated: {sku.createdAt} {/* Displaying date and time */}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export default function DashboardPage() {
  const companies: Company[] = [
    {
      id: 1,
      name: "Red Cow",
      skus: [
        { id: 1, name: "200gm Sliced Bread", batchNumber: "sb200", quantity: 0, createdAt: "" },
        { id: 2, name: "400gm Sliced Bread", batchNumber: "sb400", quantity: 0, createdAt: "" },
        { id: 3, name: "laccha bun", batchNumber: "lb", quantity: 0, createdAt: "" },
        { id: 4, name: "Sweet Bread", batchNumber: "swb", quantity: 0, createdAt: "" },
        { id: 5, name: "200gm Brown Bread", batchNumber: "bb200", quantity: 0, createdAt: "" },
        { id: 6, name: "400gm Brown Bread", batchNumber: "bb400", quantity: 0, createdAt: "" },
        { id: 7, name: "Cream Bun Chocolate", batchNumber: "bb400", quantity: 0, createdAt: "" },
        { id: 8, name: "Cream Bun Strawberry", batchNumber: "bb400", quantity: 0, createdAt: "" },
        { id: 9, name: "Cream Bun Vanilla", batchNumber: "bb400", quantity: 0, createdAt: "" },
      ],
    },
    {
      id: 2,
      name: "Modern",
      skus: [
        { id: 10, name: "Sliced bread 200gm", batchNumber: "B000", quantity: 0, createdAt: "" },
        { id: 11, name: "Sliced Bread 400gm", batchNumber: "B000", quantity: 0, createdAt: "" },
      ],
    },
  ];

  const [selectedCompanyId, setSelectedCompanyId] = useState<number | null>(null);
  const [skus, setSkus] = useState<SKU[]>([]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  const handleUpdate = (updatedSKU: SKU) => {
    setSkus((prevSkus) => prevSkus.map((sku) => (sku.id === updatedSKU.id ? updatedSKU : sku)));
  };

  const handleDownloadExcel = () => {
    if (!isLoggedIn) {
      setShowLogin(true);
      return;
    }

    const data = skus.map(({ id, name, batchNumber, quantity, createdAt }) => ({
      ID: id,
      Name: name,
      "Batch Number": batchNumber,
      Quantity: quantity,
      "Last Updated": createdAt ? createdAt : "Not Updated", // Use formatted date-time
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "SKUs");

    XLSX.writeFile(workbook, "SKU_Data.xlsx");
  };

  const handleLogin = () => {
    if (username === "admin" && password === "password123") {
      setIsLoggedIn(true);
      setShowLogin(false);
    } else {
      alert("Invalid username or password");
    }
  };

  const handleCompanySelect = (companyId: number) => {
    setSelectedCompanyId(companyId);
    const selectedCompany = companies.find((company) => company.id === companyId);
    if (selectedCompany) {
      setSkus(selectedCompany.skus);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 space-y-4">
      {showLogin && (
        <div className="flex flex-col items-center p-4 border rounded-lg shadow-md bg-white">
          <h2 className="text-xl mb-4">Admin Login</h2>
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleLogin} className="w-full bg-blue-500 hover:bg-blue-600">
              Login
            </Button>
          </div>
        </div>
      )}
      <div className="space-y-2">
        <Label>Select Company</Label>
        <select
          value={selectedCompanyId || ""}
          onChange={(e) => handleCompanySelect(Number(e.target.value))}
          className="w-full p-2 border rounded"
        >
          <option value="">-- Select Company --</option>
          {companies.map((company) => (
            <option key={company.id} value={company.id}>
              {company.name}
            </option>
          ))}
        </select>
      </div>
      <Button onClick={handleDownloadExcel} className="mb-4 bg-green-500 hover:bg-green-600">
        Download as Excel
      </Button>
      <div className="space-y-4">
        {skus.map((sku) => (
          <SKUCard key={sku.id} sku={sku} onUpdate={handleUpdate} />
        ))}
      </div>
    </div>
  );
}
