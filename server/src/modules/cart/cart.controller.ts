import { Body, Controller, Get, HttpStatus, Post, Query, Res } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CartService } from "./cart.service";

@ApiTags("Cart")
@Controller("cart")
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post("add")
  async add(@Body() dto: Cart.Add, @Res() res) {
    await this.cartService.add(dto);
    return res.status(HttpStatus.CREATED).end();
  }
}
