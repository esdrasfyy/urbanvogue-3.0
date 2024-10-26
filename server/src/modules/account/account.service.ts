import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { User } from "src/decorators/user.decorator";
import { AccountRepository } from "src/repository";
import { MailerService } from "src/services/mailer.sevice";
import { HandleErrors } from "src/utils/handle-errors-database";
import { regex_alphanumeric, regex_boolean, regex_date, regex_fullname, regex_letters, regex_number, regex_username } from "src/utils/regex.util";
import { ValidateFields, ValidationRule } from "src/utils/validate-fields.util";

@Injectable()
export class AccountService {
  constructor(
    private readonly accountRepository: AccountRepository,
    private readonly mailer: MailerService
  ) {}
  async edit(dto: Account.UpdateI, avatar: Express.Multer.File, user: Account.UserI) {
    try {
      const validators: { [key in keyof Account.UpdateI]: ValidationRule } = {
        fullname: { regex: regex_fullname, message: "must be a valid fullname!", optional: true },
        // bio: { regex: null, message: "must be a valid bio!", optional: true },
        username: { regex: regex_username, message: "must be a valid username!", optional: true },
        birthdate: { regex: regex_date, message: "must be a valid birthdate!", optional: true },
        // gender_id: { regex: regex_number, message: "must be a valid gender!", optional: true },
        national_id: { regex: regex_alphanumeric, message: "must be a valid national id!", optional: true },
        enable_2fa: { regex: regex_boolean, message: "must be a valid enable_2fa!", optional: true },
        country_id: { regex: regex_number, message: "must be a valid country_id!", optional: true },
      };

      ValidateFields(dto, validators);

      await this.accountRepository.update(dto, user.id);

      // mail of success
      new HttpException("ok", HttpStatus.OK);
    } catch (error) {
      HandleErrors(error);
    }
  }
}
