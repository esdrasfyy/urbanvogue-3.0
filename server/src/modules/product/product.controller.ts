import { isPublic } from "./../../decorators/public.decorator";
import { Body, Controller, Get, HttpStatus, Post, Query, Res } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ProductService } from "./product.service";

@ApiTags("Products")
@Controller("product")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post("create")
  async create(@Body() dto: Product.Create, @Res() res) {
    await this.productService.create(dto);
    return res.status(HttpStatus.CREATED).end();
  }
  @isPublic()
  @Post("get")
  async getAll(@Res() res, @Body() dto) {
    const products = await this.productService.get(dto);
    return res.status(HttpStatus.OK).json(products);
  }
}
