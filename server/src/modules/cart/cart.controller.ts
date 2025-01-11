import { Body, Controller, Get, HttpStatus, Post, Res } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CartService } from "./cart.service";
import { User } from "../../decorators/user.decorator";
import * as docs from "src/docs/cart.doc";

@ApiTags("Cart")
@Controller("cart")
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post("add")
  @ApiOperation({
    summary: "Add items to the cart.",
    description: "This endpoint allows users to add items to their cart by providing item details such as product ID, quantity, and any additional information required. The cart will be updated accordingly.",
  })
  @ApiResponse({ status: 201, description: "Item(s) added to the cart successfully." })
  @ApiResponse({ status: 400, description: "Invalid input data or failed validation." })
  @ApiResponse({ status: 404, description: "Product not found or unavailable." })
  @ApiResponse({ status: 500, description: "An internal server error occurred." })
  @ApiBody({ type: docs.CartSwagger, description: "The request body should contain the item details to be added to the cart." })
  async add(@Body() dto: Cart.Add, @Res() res) {
    await this.cartService.add(dto);
    return res.status(HttpStatus.CREATED).end();
  }

  @Get("get")
  @ApiOperation({
    summary: "Retrieve user cart.",
    description: "This endpoint retrieves the current cart for the logged-in user, including all items, quantities, and total cost.",
  })
  @ApiResponse({ status: 200, description: "Cart retrieved successfully.", type: docs.CartResponseSwagger })
  @ApiResponse({ status: 404, description: "Cart not found or user has no items in the cart." })
  @ApiResponse({ status: 500, description: "An internal server error occurred." })
  async get(@Res() res, @User() user: Account.UserI) {
    const cart = await this.cartService.get(user.id);
    return res.status(HttpStatus.OK).json(cart);
  }
}
