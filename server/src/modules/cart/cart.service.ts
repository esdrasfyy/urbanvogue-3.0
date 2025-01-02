import { Injectable } from "@nestjs/common";
import { CartRepository, ProductRepository } from "../../repository";
import { User } from "src/decorators/user.decorator";

@Injectable()
export class CartService {
  constructor(
    private readonly cartRepository: CartRepository,
    private readonly productRepository: ProductRepository
  ) {}

  async get(id: number) {
    return await this.cartRepository.getCart(id);
  }
  async add(dto: Cart.Dto) {
    const { price, title } = await this.productRepository.getById(dto.product_id);
    return await this.cartRepository.addItemToCart({ dto: { ...dto, price: String(price), title } });
  }
}
