import { isPublic } from "./../../decorators/public.decorator";
import { Body, Controller, Get, HttpStatus, Post, Query, Res } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
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
  @Get("get")
  async getAll(@Res() res, @Query() queries) {
    const products = await this.productService.get(queries);
    return res.status(HttpStatus.OK).json(products);
  }
}
