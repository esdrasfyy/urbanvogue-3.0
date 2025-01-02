import { Body, Controller, Get, HttpStatus, Post, Query, Res } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CartService } from "./cart.service";
import { User } from "../../decorators/user.decorator";
@ApiTags("Cart")
@Controller("cart")
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post("add")
  async add(@Body() dto: Cart.Add, @Res() res) {
    await this.cartService.add(dto);
    return res.status(HttpStatus.CREATED).end();
  }

  @Get("get")
  async get(@Res() res, @User() user: Account.UserI) {
    const cart = await this.cartService.get(user.id);
    return res.status(HttpStatus.OK).json(cart);
  }
}
