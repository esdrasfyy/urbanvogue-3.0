import { Controller, Get, HttpStatus, Res } from "@nestjs/common";
import { isPublic } from "../../decorators/public.decorator";
import { SettingsService } from "./settings.service";

@Controller("settings")
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @isPublic()
  @Get("countries")
  async getCountries(@Res() res) {
    const data = await this.settingsService.getCountries();
    return res.status(HttpStatus.OK).json(data);
  }

  @isPublic()
  @Get("genders")
  async getGenders(@Res() res) {
    const data = await this.settingsService.getGenders();
    return res.status(HttpStatus.OK).json(data);
  }
}
