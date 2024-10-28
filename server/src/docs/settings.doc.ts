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
