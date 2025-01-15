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
        store_id: dto.store,
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

  async get(queries: Product.ParametersSearch) {
    return await this.prisma.product.findMany({
      include: {
        brand: { select: { name: true } },
        details: true,
        flags: true,
        store: true,
        colors: { include: { sizes: true } },
        categories: { select: { category: { select: { name: true } } } },
      },
      where: {
        ...(queries.brands !== undefined && { brand: { name: { in: queries.brands.split("-").map((item) => item.replace("+", " ").trim()) } } }),
        ...(queries.ids !== undefined && { id: { in: queries.ids.split("%").map(Number) } }),
        ...(queries.store !== undefined && { store: { id: { equals: +queries.store } } }),
        ...(queries.min !== undefined && { price: { gte: +queries.min } }),
        ...(queries.max !== undefined && { price: { lte: +queries.max } }),
        ...(queries.p !== undefined && {
          OR: [{ title: { contains: queries.p } }, { summary: { contains: queries.p } }, { brand: { name: { contains: queries.p } } }, { categories: { every: { category: { name: { contains: queries.p } } } } }, { condition: { contains: queries.p } }, { details: { data: { array_contains: queries.p } } }, { colors: { every: { name: { contains: queries.p } } } }],
        }),
      },
      orderBy: queries.orderBy ? { [queries.orderBy.split("-")[0]]: queries.orderBy.split("-")[1] } : undefined,
      take: queries.limit ? +queries.limit : undefined,
      skip: queries.offset ? +queries.offset : undefined,
    });
  }

  async getById(id: number) {
    return await this.prisma.product.findFirst({
      include: {
        brand: { select: { name: true } },
        details: true,
        flags: true,
        store: true,
        colors: { include: { sizes: true } },
        categories: { select: { category: { select: { name: true } } } },
      },
      where: { id },
    });
  }
}
