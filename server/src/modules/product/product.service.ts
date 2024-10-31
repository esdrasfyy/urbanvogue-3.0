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
    return await this.productRepository.create(dto);
  }

  async getAll() {
    return await this.productRepository.getAll();
  }
}
