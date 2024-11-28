import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedColors() {
  await prisma.colors.createMany({
    data: [{ name: "Red" }, { name: "Blue" }, { name: "Green" }, { name: "Yellow" }, { name: "Black" }, { name: "White" }, { name: "Purple" }, { name: "Orange" }, { name: "Pink" }, { name: "Gray" }],
  });
}
