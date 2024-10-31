import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../services/prisma.service";

@Injectable()
export class ProductRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(dto: Product.Create) {
    return this.prisma.product.create({
      data: {
        ...dto,
        details: dto.details && {
          create: {
            data: dto.details,
          },
        },
        flags: dto.flags && {
          create: {
            data: dto.flags,
          },
        },
        categories: {
          create: dto.categories.map((categoryId) => ({
            category_id: categoryId,
          })),
        },
        variations: {
          create: dto.variations.map((variation) => ({
            color: variation.color,
            increment: variation.increment,
            decrement: variation.decrement,
            url: variation.url,
            sizes: {
              create: variation.sizes.map((size) => ({
                name: size.name,
                qtd: size.qtd,
              })),
            },
          })),
        },
      },
      include: {
        details: true,
        flags: true,
        categories: true,
      },
    });
  }

  async getAll() {
    return await this.prisma.product.findMany({
      include: {
        brand: { select: { name: true } },
        details: true,
        flags: true,
        store: true,
        variations: { include: { sizes: true } },
        categories: {
          select: { category: { select: { name: true } } },
        },
      },
    });
  }
}
