import { ApiProperty } from "@nestjs/swagger";

export class UpdateProfileSwagger {
  @ApiProperty({
    description: "The full name of the user.",
    example: "John Doe",
  })
  fullname?: string;

  @ApiProperty({
    description: "The username of the user.",
    example: "johndoe123",
  })
  username?: string;

  @ApiProperty({
    description: "The birthdate of the user in ISO format (YYYY-MM-DD).",
    example: "1990-01-01",
  })
  birthdate?: string;

  @ApiProperty({
    description: "The gender ID associated with the user.",
    example: 1,
  })
  gender_id?: number;

  @ApiProperty({
    description: "The national ID of the user.",
    example: "123456789",
  })
  national_id?: string;

  @ApiProperty({
    description: "The country ID associated with the user's account.",
    example: 1,
  })
  country_id?: number;
}
