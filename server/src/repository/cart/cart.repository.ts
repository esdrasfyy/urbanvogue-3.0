import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../services/prisma.service";

@Injectable()
export class CartRepository {
  constructor(private readonly prisma: PrismaService) {}

  async addItemToCart({ dto }: { dto: Cart.Add }) {
    return await this.prisma.cartItem.create({ data: { ...dto, price: Number(dto.price) } });
  }
}
