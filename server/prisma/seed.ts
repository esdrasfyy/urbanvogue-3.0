import { PrismaClient } from "@prisma/client";
import { seedCountries } from "./seeds/countries.seed";
import { seedGenders } from "./seeds/genders.seed";
import { seedCategories } from "./seeds/categories.seed";
import { seedBrands } from "./seeds/brands.seed";

const prisma = new PrismaClient();

async function main() {
  await seedCountries();
  await seedGenders();
  await seedCategories();
  await seedBrands();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
