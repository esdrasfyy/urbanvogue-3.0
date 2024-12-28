import { Injectable } from "@nestjs/common";
import { ProductRepository } from "../../repository";
import { MailerService } from "../../services/mailer.sevice";

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

  async getAll() {
    let products: Product.Mini[] = [];
    const res = await this.productRepository.getAll();
    for (let i = 0; i < res.length; i++) {
      let images: string[] = [];
      const { brand: { name: brand }, condition, created_at, id, last_price, price, summary, store: { name: store }, title, colors } = res[i];

      colors.forEach((color) => {
        if (Array.isArray(color.images)) {
          color.images.forEach((image) => {
            images.push(String(image));
          });
        }
      });

      products.push({ condition, created_at, id, images, last_price: last_price.toString(), price: price.toString(), summary, store, title, brand });
    }
    return products;
  }
}
