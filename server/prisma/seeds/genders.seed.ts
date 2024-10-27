import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedGenders() {
  await prisma.gender.createMany({
    data: [{ name: "Male" }, { name: "Female" }, { name: "Non-binary" }, { name: "Other" }],
  });
}
