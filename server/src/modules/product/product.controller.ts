import { isPublic } from "./../../decorators/public.decorator";
import { Body, Controller, Get, HttpStatus, Post, Put, Res } from "@nestjs/common";
import { User } from "../../decorators/user.decorator";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UpdateProfileSwagger } from "src/docs/account.doc";
import { ProductService } from "./product.service";

@ApiTags("Product")
@Controller("product")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post("create")
  async create(@Body() dto: Product.Create, @Res() res) {
    await this.productService.create(dto);
    return res.status(HttpStatus.CREATED).end();
  }
  @isPublic()
  @Get("all")
  async getAll(@Res() res) {
    const products = await this.productService.getAll();
    return res.status(HttpStatus.OK).json(products);
  }
}
