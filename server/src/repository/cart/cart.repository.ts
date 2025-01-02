import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../services/prisma.service";

@Injectable()
export class CartRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getCart(user_id: number) {
    return await this.prisma.cart.findFirst({ where: { user_id: user_id }, include: { items: { include: { variation: { include: { variation: true } } } } } });
  }
  async addItemToCart({ dto }: { dto: Cart.Add }) {
    return await this.prisma.cartItem.create({ data: { ...dto, price: Number(dto.price) } });
  }
}
