import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedCountries() {
  await prisma.country.createMany({
    data: [
      { name: "Brazil", code: "BRA", continent: "South America" },
      { name: "United States", code: "USA", continent: "North America" },
      { name: "Japan", code: "JPN", continent: "Asia" },
    ],
  });
}
