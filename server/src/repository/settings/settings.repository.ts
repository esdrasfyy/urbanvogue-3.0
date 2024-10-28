import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../services/prisma.service";

@Injectable()
export class SettingsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getCountries() {
    return await this.prisma.country.findMany();
  }

  async getGenders() {
    return await this.prisma.gender.findMany();
  }
}
