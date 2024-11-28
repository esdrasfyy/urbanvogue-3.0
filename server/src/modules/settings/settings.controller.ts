import { Controller, Get, HttpStatus, Res } from "@nestjs/common";
import { isPublic } from "../../decorators/public.decorator";
import { SettingsService } from "./settings.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CountrySwagger, GenderSwagger } from "src/docs/settings.doc";

@ApiTags("Settings")
@Controller("settings")
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @isPublic()
  @Get("countries")
  @ApiOperation({ summary: "Retrieve a list of available countries." })
  @ApiResponse({ status: 200, description: "List of countries retrieved successfully.", type: [CountrySwagger] })
  async getCountries(@Res() res) {
    const data = await this.settingsService.getCountries();
    return res.status(HttpStatus.OK).json(data);
  }

  @isPublic()
  @Get("genders")
  @ApiOperation({ summary: "Retrieve a list of available genders." })
  @ApiResponse({ status: 200, description: "List of genders retrieved successfully.", type: [GenderSwagger] })
  async getGenders(@Res() res) {
    const data = await this.settingsService.getGenders();
    return res.status(HttpStatus.OK).json(data);
  }
  @isPublic()
  @Get("brands")
  @ApiOperation({ summary: "Retrieve a list of available genders." })
  @ApiResponse({ status: 200, description: "List of genders retrieved successfully.", type: [GenderSwagger] })
  async getBrands(@Res() res) {
    const data = await this.settingsService.getBrands();
    return res.status(HttpStatus.OK).json(data);
  }
  @isPublic()
  @Get("stores")
  @ApiOperation({ summary: "Retrieve a list of available genders." })
  @ApiResponse({ status: 200, description: "List of genders retrieved successfully.", type: [GenderSwagger] })
  async getStores(@Res() res) {
    const data = await this.settingsService.getStores();
    return res.status(HttpStatus.OK).json(data);
  }
  @isPublic()
  @Get("categories")
  @ApiOperation({ summary: "Retrieve a list of available genders." })
  @ApiResponse({ status: 200, description: "List of genders retrieved successfully.", type: [GenderSwagger] })
  async getCategories(@Res() res) {
    const data = await this.settingsService.getCategories();
    return res.status(HttpStatus.OK).json(data);
  }

  @isPublic()
  @Get("sizes")
  @ApiOperation({ summary: "Retrieve a list of available genders." })
  @ApiResponse({ status: 200, description: "List of genders retrieved successfully.", type: [GenderSwagger] })
  async getSizes(@Res() res) {
    const data = await this.settingsService.getSizes();
    return res.status(HttpStatus.OK).json(data);
  }

  @isPublic()
  @Get("colors")
  @ApiOperation({ summary: "Retrieve a list of available genders." })
  @ApiResponse({ status: 200, description: "List of genders retrieved successfully.", type: [GenderSwagger] })
  async getColors(@Res() res) {
    const data = await this.settingsService.getColors();
    return res.status(HttpStatus.OK).json(data);
  }
}
