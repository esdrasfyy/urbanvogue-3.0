import { Injectable, Query } from "@nestjs/common";
import { ProductRepository } from "../../repository";
import { MailerService } from "../../services/mailer.sevice";
import { ProductTarget } from "src/enums/product.enums";

@Injectable()
export class ProductService {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly mailer: MailerService
  ) {}

  async create(dto: Product.Create) {
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

  async get(@Query() queries: Product.ParametersSearch) {
    let products: Product.Mini[] = [];
    const res = await this.productRepository.get(queries);

    for (let i = 0; i < res.length; i++) {
      let targets: ProductTarget[] = [];
      const {
        brand: { name: brand },
        condition,
        created_at,
        id,
        last_price,
        price,
        summary,
        store: { name: store },
        title,
        colors,
      } = res[i];

      const thirtyDaysAgo = new Date();

      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

      if (created_at > thirtyDaysAgo) targets.push(ProductTarget.new);

      products.push({ condition, created_at, id, last_price: last_price.toString(), price: price.toString(), summary, store, title, brand, targets, color: colors[0] });
    }

    return [...products, ...products];
  }
}
