import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiTags("Default")
  @ApiOperation({ summary: "Retrieve a welcome message." })
  @ApiResponse({
    status: 200,
    description: "Welcome message retrieved successfully.",
    type: String,
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
