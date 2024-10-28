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
}
