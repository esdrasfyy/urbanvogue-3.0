import { ApiProperty } from "@nestjs/swagger";

export class CountrySwagger {
  @ApiProperty({
    description: "The unique ID of the country.",
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: "The name of the country.",
    example: "Brazil",
  })
  name: string;
}

export class GenderSwagger {
  @ApiProperty({
    description: "The unique ID of the gender.",
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: "The name of the gender.",
    example: "Male",
  })
  name: string;
}

export class BrandSwagger {
  @ApiProperty({
    description: "The unique ID of the brand.",
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: "The name of the brand.",
    example: "Nike",
  })
  name: string;
}

export class StoreSwagger {
  @ApiProperty({
    description: "The unique ID of the store.",
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: "The name of the store.",
    example: "Urban Vogue",
  })
  name: string;

  @ApiProperty({
    description: "The address of the store.",
    example: "123 Main St, Springfield",
  })
  address: string;
}

export class CategorySwagger {
  @ApiProperty({
    description: "The unique ID of the category.",
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: "The name of the category.",
    example: "Footwear",
  })
  name: string;
}

export class SizeSwagger {
  @ApiProperty({
    description: "The unique ID of the size.",
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: "The size value.",
    example: "L",
  })
  value: string;
}

export class ColorSwagger {
  @ApiProperty({
    description: "The unique ID of the color.",
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: "The name of the color.",
    example: "Red",
  })
  name: string;

  @ApiProperty({
    description: "The hexadecimal value of the color.",
    example: "#FF0000",
  })
  hex: string;
}
