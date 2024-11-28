import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedSizes() {
  await prisma.sizes.createMany({
    data: [{ name: "XS" }, { name: "S" }, { name: "M" }, { name: "L" }, { name: "XL" }, { name: "XXL" }, { name: "3XL" }, { name: "4XL" }, { name: "5XL" }, { name: "One Size" }],
  });
}
