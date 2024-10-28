import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../services/prisma.service";

@Injectable()
export class AccountRepository {
  constructor(private readonly prisma: PrismaService) {}

  async update(data: Account.UpdateI, id: number) {
    return await this.prisma.user.update({ data, where: { id } });
  }
}
