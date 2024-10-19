import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { generateUsername, regex_alphanumeric, regex_email, regex_password } from "src/utils/regex.util";
import { ValidateFields, ValidationRule } from "src/utils/validate-fields.util";
import * as bcrypt from "bcrypt";
import { AccountRepository } from "src/repository";
import { HandleErrors } from "src/utils/handle-errors-database";
import { GetSessionToken, LoginUser } from "src/services/cookies.service";
import { Response as ExpressResponse, Request as ExpressRequest } from "express";
import { GetGithubOAuthTokens, GetGithubUser } from "src/services/github.service";
import { GetGoogleOAuthToken, GetGoogleUser } from "src/services/google.service";
@Injectable()
export class AuthService {
  constructor(private readonly accountRepository: AccountRepository) {}

  async register(dto: Auth.Register, res: ExpressResponse) {
    try {
      const validators: { [key in keyof Auth.Register]: ValidationRule } = {
        username: { regex: regex_alphanumeric, message: "username can only contain letters, numbers, and underscores.", optional: false },
        email: { regex: regex_email, message: "must be a valid email!", optional: false },
        password: { regex: regex_password, message: "password needs an uppercase, lowercase, number, and special character ($, @, #).", optional: false },
      };

      ValidateFields(dto, validators);

      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(dto.password, salt);
      dto.password = passwordHash;
      const user = await this.accountRepository.create(dto);

      LoginUser(res, user);

      return res.status(HttpStatus.CREATED).json(user);
    } catch (error) {
      HandleErrors(error);
    }
  }

  async login(dto: Auth.Login, res: ExpressResponse) {
    try {
      const validators: { [key in keyof Auth.Login]: ValidationRule } = {
        credential: { regex: null, message: "must be a valid credential!", optional: false },
        password: { regex: regex_password, message: "password needs an uppercase, lowercase, number, and special character ($, @, #).", optional: false },
      };

      ValidateFields(dto, validators);

      const user = await this.accountRepository.findByCredential(dto.credential);

      if (!user) {
        throw new HttpException("user not found.", HttpStatus.NOT_FOUND);
      }

      const isValidPassword = await bcrypt.compare(dto.password, user.password);

      if (!isValidPassword) {
        throw new HttpException("incorrect password.", HttpStatus.UNAUTHORIZED);
      }

      LoginUser(res, user);

      return res.status(HttpStatus.OK).json(user);
    } catch (error) {
      throw new HttpException(HandleErrors(error), HttpStatus.BAD_REQUEST);
    }
  }

  async authenticate(res: ExpressResponse, req: ExpressRequest) {
    const user = GetSessionToken(res, req);

    return res.status(HttpStatus.OK).json(user);
  }

  async github(res: ExpressResponse, req: ExpressRequest) {
    const { code } = req.query;
    try {
      if (!code) {
        throw new Error("don't have the code.");
      }

      const accessToken = await GetGithubOAuthTokens(code as string);

      const user_github: Auth.GithubUserResult | undefined = await GetGithubUser(accessToken);

      let user = await this.accountRepository.findByGithubID(user_github.id);

      if (!user) {
        user = await this.accountRepository.create({ github_id: String(user_github.id), username: generateUsername(), avatar: user_github.avatar_url, fullname: user_github.name });
      }

      LoginUser(res, user);

      return res.status(HttpStatus.OK).redirect(process.env.APP_URL);
    } catch (error: any) {
      HandleErrors(error);
    }
  }

  async google(res: ExpressResponse, req: ExpressRequest) {
    const { code } = req.query;
    try {
      if (!code) {
        throw new Error("don't have the code.");
      }

      const { access_token, id_token } = await GetGoogleOAuthToken(code as string);

      const user_google = await GetGoogleUser(access_token, id_token);

      let user = await this.accountRepository.findGoogleAccount(user_google.id, user_google.email);

      if (!user) {
        user = await this.accountRepository.create({ google_id: String(user_google.id), email: user_google.email, username: generateUsername(), avatar: user_google.picture });
      }

      LoginUser(res, user);

      return res.status(HttpStatus.OK).redirect(process.env.APP_URL);
    } catch (error: any) {
      HandleErrors(error);
    }
  }
}
