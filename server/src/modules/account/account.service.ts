import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Response as ExpressResponse } from "express";
import { AccountRepository } from "../../repository";
import { LoginUser } from "../../services/cookies.service";
import { MailerService } from "../../services/mailer.sevice";
import { HandleErrors } from "../../utils/handle-errors-database";
import { regex_alphanumeric, regex_fullname, regex_number, regex_username } from "../../utils/regex.util";
import { RemoveNullValues, ValidateFields, ValidationRule } from "../../utils/validate-fields.util";

@Injectable()
export class AccountService {
  constructor(
    private readonly accountRepository: AccountRepository,
    private readonly mailer: MailerService
  ) {}
  async edit(res: ExpressResponse, dto: Account.UpdateI, user: Account.UserI) {
    try {

      const validators: { [key in keyof Account.UpdateI]: ValidationRule } = {
        fullname: { regex: regex_fullname, message: "must be a valid fullname!", optional: true },
        username: { regex: regex_username, message: "must be a valid username!", optional: true },
        birthdate: { regex: null, message: "must be a valid birthdate!", optional: true },
        gender_id: { regex: regex_number, message: "must be a valid gender!", optional: true },
        national_id: { regex: regex_alphanumeric, message: "must be a valid national id!", optional: true },
        country_id: { regex: regex_number, message: "must be a valid country!", optional: true },
      };

      const data = RemoveNullValues(dto);

      ValidateFields(data, validators);

      const newuser = await this.accountRepository.update(data, user.id);

      LoginUser(res, newuser);

      new HttpException("ok", HttpStatus.OK);
    } catch (error) {
      HandleErrors(error);
    }
  }
}
