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
  async getBrands() {
    return await this.prisma.brand.findMany();
  }
  async getStores() {
    return await this.prisma.store.findMany();
  }
  async getCategories() {
    return await this.prisma.category.findMany();
  }
  async getSizes() {
    return await this.prisma.sizes.findMany();
  }
  async getColors() {
    return await this.prisma.colors.findMany();
  }
}
