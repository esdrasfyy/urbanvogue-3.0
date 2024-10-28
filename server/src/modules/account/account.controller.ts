import { Body, Controller, HttpStatus, Post, Put, Res, UploadedFile, UseInterceptors } from "@nestjs/common";
import { AccountService } from "./account.service";
import { User } from "../../decorators/user.decorator";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UpdateProfileSwagger } from "src/docs/account.doc";

@ApiTags("Account")
@Controller("account")
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  // @UseInterceptors(
  //   FileInterceptor("avatar", {
  //     storage: diskStorage({
  //       destination: "./uploads", // Caminho onde você deseja salvar o arquivo
  //       filename: (req, file, callback) => {
  //         callback(null, `${Date.now()}-${file.originalname}`);
  //       },
  //     }),
  //   })
  // )

  @Put("edit")
  @ApiOperation({ summary: "Update user account details.", description: "This endpoint allows users to update their account details such as fullname, username, birthdate, gender, national ID, and country ID. Only fields provided in the request will be updated." })
  @ApiResponse({ status: 200, description: "Account details updated successfully." })
  @ApiResponse({ status: 400, description: "Invalid input data or failed validation." })
  @ApiResponse({ status: 404, description: "User account not found." })
  @ApiResponse({ status: 500, description: "An internal server error occurred." })
  @ApiBody({ type: UpdateProfileSwagger, description: "The request body should contain the updated account information." })
  async edit(@Body() dto: Account.UpdateI, @Res() res, @User() user: Account.UserI) {
    await this.accountService.edit(res, dto, user);
    return res.status(HttpStatus.OK).end();
  }
}
