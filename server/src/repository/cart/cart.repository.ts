import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../services/prisma.service";

@Injectable()
export class CartRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getCart(id: number, byUserId: boolean = true) {
    if (byUserId) {
      return await this.prisma.cart.findFirst({ where: { user_id: id }, include: { items: { include: { variation: { include: { variation: true } } } } } });
    }
    return await this.prisma.cart.findFirst({ where: { id: id }, include: { items: { include: { variation: { include: { variation: true } } } } } });
  }
  async addItemToCart({ dto }: { dto: Cart.Add }) {
    const cart = await this.getCart(dto.cart_id, false);
    const existingItem = cart.items.find((item) => item.variation_id === dto.variation_id);

    if (!existingItem) {
      return await this.prisma.cartItem.create({
        data: { ...dto, price: Number(dto.price) },
      });
    }
    return await this.prisma.cartItem.update({
      where: { id: existingItem.id },
      data: { quantity: { increment: dto.quantity } },
    });
  }
}
