import { Prisma, PrismaClient } from "@prisma/client";
import { Injectable, Query } from "@nestjs/common";
import { ProductRepository } from "../../repository";
import { MailerService } from "../../services/mailer.sevice";
import { ProductTarget } from "src/enums/product.enums";
import { log } from "console";

@Injectable()
export class ProductService {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly mailer: MailerService
  ) {}

  async create(dto: Product.Create) {
    console.log(dto);

    return await this.productRepository.create(dto);
  }
  // brands =  brands=Nike%Tommy Hilfiger
  // ids =  ids=1%3
  // store =  store=1
  // min =  min=10
  // max =  max=100
  // search =  search=Nike
  // orderBy =  orderBy=price%asc
  // limit =  limit=10
  // offset =  offset=10

  async getAll(@Query() queries: Product.ParametersSearch) {
    let products: Product.Mini[] = [];
    // console.log(data);
    const prisma = new PrismaClient();
    // const res1 = await prisma.product.findMany({
    //   include: {
    //     brand: { select: { name: true } },
    //     details: true,
    //     flags: true,
    //     store: true,
    //     colors: { include: { sizes: true } },
    //     categories: { select: { category: { select: { name: true } } } },
    //   },
    //   where: {
    //     ...(queries.brands !== undefined && { brand: { name: { in: queries.brands.split("%") } } }),
    //     ...(queries.ids !== undefined && { id: { in: queries.ids.split("%").map(Number) } }),
    //     ...(queries.store !== undefined && { store: { id: { equals: +queries.store } } }),
    //     ...(queries.min !== undefined && { price: { gte: +queries.min } }),
    //     ...(queries.max !== undefined && { price: { lte: +queries.max } }),
    //     ...(queries.search !== undefined && {
    //       OR: [{ title: { contains: queries.search } }, { summary: { contains: queries.search } }, { brand: { name: { contains: queries.search } } }, { categories: { every: { category: { name: { contains: queries.search } } } } }, { condition: { contains: queries.search } }, { details: { data: { array_contains: queries.search } } }, { colors: { every: { name: { contains: queries.search } } } }],
    //     }),
    //   },
    //   orderBy: queries.orderBy ? { [queries.orderBy.split("%")[0]]: queries.orderBy.split("%")[1] } : undefined,
    //   take: queries.limit ? +queries.limit : undefined,
    //   skip: queries.offset ? +queries.offset : undefined,
    // });

    // return res1;
    const res = await this.productRepository.getAll();

    for (let i = 0; i < res.length; i++) {
      let images: string[] = [];
      let targets: ProductTarget[] = [];
      const {
        brand: { name: brand }, condition, created_at, id, last_price, price, summary,
        store: { name: store }, title, colors } = res[i];

      colors.forEach((color) => {
        if (Array.isArray(color.images)) {
          color.images.forEach((image) => {
            images.push(String(image));
          });
        }
      });
      
      const thirtyDaysAgo = new Date();

      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

      if (created_at > thirtyDaysAgo) targets.push(ProductTarget.new);

      products.push({ condition, created_at, id, images, last_price: last_price.toString(), price: price.toString(), summary, store, title, brand, targets });
    }
    return products;
  }
}
