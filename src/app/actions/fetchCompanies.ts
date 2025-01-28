'use server';

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function fetchCompanies() {
  try {
    await prisma.$connect(); // Ensure connection
    const companies = await prisma.company.findMany();
    return { success: true, companies };
  } catch (error) {
    console.error("Database Error:", error);
    return { success: false, error: "Failed to fetch companies", companies: [] };
  } finally {
    await prisma.$disconnect(); // Disconnect after query execution
  }
}
