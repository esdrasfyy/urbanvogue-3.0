import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../services/prisma.service";
import { Prisma } from "@prisma/client";

@Injectable()
export class ProductRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(dto: Product.Create) {
    return this.prisma.product.create({
      data: {
        title: dto.title,
        summary: dto.summary,
        condition: dto.condition,
        price: new Prisma.Decimal(dto.price),
        last_price: new Prisma.Decimal(dto.last_price),
        installments: dto.installments,
        store_id: dto.store_id,
        brand_id: dto.brand,
        categories: {
          create: dto.categories.map((categoryId) => ({
            category_id: categoryId,
          })),
        },
        colors: {
          create: dto.colors.map((color) => ({
            name: color.name,
            images: color.images,
            product_id: color.product_id,
            sizes: {
              create: color.sizes.map((size) => ({
                name: size.name,
                qtd: size.qtd,
                increment: new Prisma.Decimal(size.increment),
                decrement: new Prisma.Decimal(size.decrement),
              })),
            },
          })),
        },
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
      },
      include: {
        details: true,
        flags: true,
        categories: true,
        colors: {
          include: {
            sizes: true,
          },
        },
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
        colors: { include: { sizes: true } },
        categories: {
          select: { category: { select: { name: true } } },
        },
      },
    });
  }
}
