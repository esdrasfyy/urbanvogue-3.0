import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/services/prisma.service";

@Injectable()
export class AccountRepository {
  constructor(private readonly prisma: PrismaService) {}

  async update(data: Account.UpdateI, id: number) {
    await this.prisma.user.update({ data, where: { id } });
  }
}
