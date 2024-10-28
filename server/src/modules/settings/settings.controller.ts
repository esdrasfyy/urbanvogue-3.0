import { Controller, Get, HttpStatus, Res } from "@nestjs/common";
import { Public } from "src/decorators/public.decorator.js";
import { SettingsService } from "./settings.service";

@Controller("settings")
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Public()
  @Get("countries")
  async getCountries(@Res() res) {
    const data = await this.settingsService.getCountries();
    return res.status(HttpStatus.OK).json(data);
  }

  @Public()
  @Get("genders")
  async getGenders(@Res() res) {
    const data = await this.settingsService.getGenders();
    return res.status(HttpStatus.OK).json(data);
  }
}
