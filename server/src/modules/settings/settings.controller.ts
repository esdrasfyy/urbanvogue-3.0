import { Controller, Get, HttpStatus, Res } from "@nestjs/common";
import { isPublic } from "../../decorators/public.decorator";
import { SettingsService } from "./settings.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import * as docs from "src/docs/settings.doc";

@ApiTags("Settings")
@Controller("settings")
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}
  @isPublic()
  @Get("countries")
  @ApiOperation({ summary: "Retrieve a list of available countries." })
  @ApiResponse({ status: 200, description: "List of countries retrieved successfully.", type: [docs.CountrySwagger] })
  async getCountries(@Res() res) {
    const data = await this.settingsService.getCountries();
    return res.status(HttpStatus.OK).json(data);
  }

  @isPublic()
  @Get("genders")
  @ApiOperation({ summary: "Retrieve a list of available genders." })
  @ApiResponse({ status: 200, description: "List of genders retrieved successfully.", type: [docs.GenderSwagger] })
  async getGenders(@Res() res) {
    const data = await this.settingsService.getGenders();
    return res.status(HttpStatus.OK).json(data);
  }

  @isPublic()
  @Get("brands")
  @ApiOperation({ summary: "Retrieve a list of available brands." })
  @ApiResponse({ status: 200, description: "List of brands retrieved successfully.", type: [docs.BrandSwagger] })
  async getBrands(@Res() res) {
    const data = await this.settingsService.getBrands();
    return res.status(HttpStatus.OK).json(data);
  }

  @isPublic()
  @Get("stores")
  @ApiOperation({ summary: "Retrieve a list of available stores." })
  @ApiResponse({ status: 200, description: "List of stores retrieved successfully.", type: [docs.StoreSwagger] })
  async getStores(@Res() res) {
    const data = await this.settingsService.getStores();
    return res.status(HttpStatus.OK).json(data);
  }

  @isPublic()
  @Get("categories")
  @ApiOperation({ summary: "Retrieve a list of available categories." })
  @ApiResponse({ status: 200, description: "List of categories retrieved successfully.", type: [docs.CategorySwagger] })
  async getCategories(@Res() res) {
    const data = await this.settingsService.getCategories();
    return res.status(HttpStatus.OK).json(data);
  }

  @isPublic()
  @Get("sizes")
  @ApiOperation({ summary: "Retrieve a list of available sizes." })
  @ApiResponse({ status: 200, description: "List of sizes retrieved successfully.", type: [docs.SizeSwagger] })
  async getSizes(@Res() res) {
    const data = await this.settingsService.getSizes();
    return res.status(HttpStatus.OK).json(data);
  }

  @isPublic()
  @Get("colors")
  @ApiOperation({ summary: "Retrieve a list of available colors." })
  @ApiResponse({ status: 200, description: "List of colors retrieved successfully.", type: [docs.ColorSwagger] })
  async getColors(@Res() res) {
    const data = await this.settingsService.getColors();
    return res.status(HttpStatus.OK).json(data);
  }
}
