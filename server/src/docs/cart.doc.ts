import { ApiProperty } from "@nestjs/swagger";

export class CartSwagger {
  @ApiProperty({
    description: "The unique ID of the cart item.",
    example: 101,
  })
  id: number;

  @ApiProperty({
    description: "The name of the product in the cart.",
    example: "Wireless Headphones",
  })
  name: string;

  @ApiProperty({
    description: "The quantity of the product added to the cart.",
    example: 2,
  })
  quantity: number;

  @ApiProperty({
    description: "The price of a single unit of the product.",
    example: 59.99,
  })
  price: number;

  @ApiProperty({
    description: "The ID of the product variation, if applicable.",
    example: 25,
  })
  variation_id: number;

  @ApiProperty({
    description: "The title or description of the product variation.",
    example: "Black, Noise-Cancelling",
  })
  variation_title: string;
}

class ProductVariationSwagger {
  @ApiProperty({
    description: "The unique ID of the product variation.",
    example: 3,
  })
  id: number;

  @ApiProperty({
    description: "The name of the product variation.",
    example: "Over-Ear",
  })
  name: string;

  @ApiProperty({
    description: "An array of image URLs associated with the variation.",
    example: ["image1.jpg", "image2.jpg"],
  })
  images: string[];

  @ApiProperty({
    description: "The unique ID of the product.",
    example: 10,
  })
  product_id: number;
}

class VariationSwagger {
  @ApiProperty({
    description: "The unique ID of the variation.",
    example: 5,
  })
  id: number;

  @ApiProperty({
    description: "The name of the variation.",
    example: "Black",
  })
  name: string;

  @ApiProperty({
    description: "The quantity of the variation available.",
    example: 10,
  })
  qtd: number;

  @ApiProperty({
    description: "The incremental price for this variation.",
    example: 5.0,
  })
  increment: number;

  @ApiProperty({
    description: "The decremental price for this variation.",
    example: 2.0,
  })
  decrement: number;

  @ApiProperty({
    description: "The ID of the related variation.",
    example: 3,
  })
  variation_id: number;

  @ApiProperty({
    description: "Details of the related product variation.",
    type: ProductVariationSwagger,
  })
  variation: ProductVariationSwagger;
}

class ItemSwagger {
  @ApiProperty({
    description: "The unique ID of the cart item.",
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: "The unique ID of the cart.",
    example: 1,
  })
  cart_id: number;

  @ApiProperty({
    description: "The unique ID of the product.",
    example: 10,
  })
  product_id: number;

  @ApiProperty({
    description: "The quantity of the product in the cart.",
    example: 2,
  })
  quantity: number;

  @ApiProperty({
    description: "The price of a single unit of the product.",
    example: 59.99,
  })
  price: number;

  @ApiProperty({
    description: "The title of the product.",
    example: "Wireless Headphones",
  })
  title: string;

  @ApiProperty({
    description: "The unique ID of the product variation.",
    example: 5,
  })
  variation_id: number;

  @ApiProperty({
    description: "Details of the product variation.",
    type: VariationSwagger,
  })
  variation: VariationSwagger;

  @ApiProperty({
    description: "The date and time when the item was created.",
    example: "2024-01-11T10:00:00.000Z",
  })
  created_at: Date;

  @ApiProperty({
    description: "The date and time when the item was last updated.",
    example: "2024-01-11T12:00:00.000Z",
  })
  updated_at: Date;
}

export class CartResponseSwagger {
  @ApiProperty({
    description: "The unique ID of the cart.",
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: "The unique ID of the user associated with the cart.",
    example: 123,
  })
  user_id: number;

  @ApiProperty({
    description: "The list of items in the cart.",
    type: [ItemSwagger],
  })
  items: ItemSwagger[];

  @ApiProperty({
    description: "The date and time when the cart was created.",
    example: "2024-01-11T09:00:00.000Z",
  })
  created_at: Date;

  @ApiProperty({
    description: "The date and time when the cart was last updated.",
    example: "2024-01-11T12:00:00.000Z",
  })
  updated_at: Date;
}
