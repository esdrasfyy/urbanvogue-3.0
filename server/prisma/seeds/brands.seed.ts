import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedBrands() {
  await prisma.brand.createMany({
    data: [
      { name: "Nike", picture: "https://logopng.com.br/logos/nike-99.svg", color: "#FFFFFF" },
      { name: "Adidas", picture: "https://logopng.com.br/logos/adidas-39.svg", color: "#FFFFFF" },
      { name: "Lacoste", picture: "https://logospng.org/wp-content/uploads/lacoste.png", color: "#005F3E" },
      { name: "Gucci", picture: "https://logospng.org/wp-content/uploads/gucci.png", color: "#FFFFFF" },
      { name: "Louis Vuitton", picture: "https://logospng.org/wp-content/uploads/louis-vuitton-250x170.png", color: "#FFFFFF" },
      { name: "Zara", picture: "https://logospng.org/wp-content/uploads/zara-250x170.png", color: "#FFFFFF" },
      { name: "Renner", picture: "https://logospng.org/wp-content/uploads/renner.png", color: "#FFFFFF" },
      { name: "Calvin Klein", picture: "https://logospng.org/wp-content/uploads/calvin-klein-250x170.jpg", color: "#FFFFFF" },
      { name: "Tommy Hilfiger", picture: "https://logospng.org/wp-content/uploads/tommy-hilfiger-250x170.png", color: "#FFFFFF" },
      { name: "Hering", picture: "https://logospng.org/wp-content/uploads/hering-250x170.png", color: "#FFFFFF" },
      { name: "Lupo", picture: "https://logospng.org/wp-content/uploads/lupo-250x170.png", color: "#FFFFFF" },
      { name: "Mizuno", picture: "https://logospng.org/wp-content/uploads/mizuno-250x170.png", color: "#FFFFFF" },
    ],
  });
}
