import { Injectable } from "@nestjs/common";
import { CartRepository, ProductRepository } from "../../repository";

@Injectable()
export class CartService {
  constructor(
    private readonly cartRepository: CartRepository,
    private readonly productRepository: ProductRepository
  ) {}

  async add(dto: Cart.Dto) {
    const { price, title } = await this.productRepository.getById(dto.product_id);
    return await this.cartRepository.addItemToCart({ dto: { ...dto, price: String(price), title } });
  }
}
