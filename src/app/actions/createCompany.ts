"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createCompany(name: string) {
  try {
    const company = await prisma.company.create({
      data: { name },
    });

    return { success: true, company };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "An unknown error occurred" };
  }
}
