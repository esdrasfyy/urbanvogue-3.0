import { Injectable } from "@nestjs/common";
import { SettingsRepository } from "../../repository";

@Injectable()
export class SettingsService {
  constructor(private readonly settingsRepository: SettingsRepository) {}
  async getCountries() {
    return await this.settingsRepository.getCountries();
  }
  async getGenders() {
    return await this.settingsRepository.getGenders();
  }
  async getBrands() {
    return await this.settingsRepository.getBrands();
  }
  async getStores() {
    return await this.settingsRepository.getStores();
  }
  async getCategories() {
    return await this.settingsRepository.getCategories();
  }
  async getSizes() {
    return await this.settingsRepository.getSizes();
  }
  async getColors() {
    return await this.settingsRepository.getColors();
  }
}
