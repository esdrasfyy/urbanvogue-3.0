import { Body, Controller, HttpStatus, Post, Put, Res, UploadedFile, UseInterceptors } from "@nestjs/common";
import { AccountService } from "./account.service";
import { User } from "../../decorators/user.decorator";

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
  async edit(@Body() dto: Account.UpdateI, @Res() res, @User() user: Account.UserI, @UploadedFile() avatar: Express.Multer.File) {
    await this.accountService.edit(res, dto, user);
    return res.status(HttpStatus.OK).end();
  }
}
