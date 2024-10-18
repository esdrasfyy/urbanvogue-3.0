import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { regex_alphanumeric, regex_email, regex_letters, regex_password } from 'src/utils/regex.util';
import { ValidateFields, ValidationRule } from 'src/utils/validate-fields.util';
import * as bcrypt from 'bcrypt';
import { AccountRepository } from 'src/repository';
import { HandleErrors } from 'src/utils/handle-errors-database';
import { GetSessionToken, LoginUser } from 'src/services/cookies.service';
import { Response as ExpressResponse, Request as ExpressRequest } from 'express';
@Injectable()
export class AuthService {
  constructor(private readonly accountRepository: AccountRepository) {} // private readonly logRepository: LogRepository, // private readonly mailService: MailService, // private readonly accountRepository: AccountRepository, // private readonly jwtService: JwtService,

  // async getToken(user: Account.Auth, ip: string): Promise<{ message: string }> {
  //   return { message: this.jwtService.sign({ ...user, ip }) };
  // }

  async register(dto: Account.Register, res:ExpressResponse) {
    try {
        const validators: { [key in keyof Account.Register]: ValidationRule } = {
          username: { regex: regex_alphanumeric, message: 'username can only contain letters, numbers, and underscores.',optional: false, },
          email: { regex: regex_email, message: 'must be a valid email!',optional: false, },
          password: { regex: regex_password, message: 'password needs an uppercase, lowercase, number, and special character ($, @, #).',optional: false, },
        };

        ValidateFields(dto, validators);

        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(dto.password, salt);
        dto.password = passwordHash;
        const user = await this.accountRepository.create(dto);

        LoginUser(res, user)

        return res.status(HttpStatus.CREATED).json(user);
    } catch (error) {    
       HandleErrors(error)
    }
  }

  async login(dto: Account.Login, res: ExpressResponse) {
    try {

      const validators: { [key in keyof Account.Login]: ValidationRule } = {
          credential: { regex: null, message: 'must be a valid credential!', optional: false },
          password: { regex: regex_password, message: 'password needs an uppercase, lowercase, number, and special character ($, @, #).',optional: false },
        };

        ValidateFields(dto, validators);

       const user = await this.accountRepository.findByCredential(dto.credential);

       if (!user) {
          throw new HttpException('user not found.', HttpStatus.NOT_FOUND);
       }

       const isValidPassword = await bcrypt.compare(dto.password, user.password);

       if (!isValidPassword) {
         throw new HttpException('incorrect password.', HttpStatus.UNAUTHORIZED);
       }

       LoginUser(res, user);

       return res.status(HttpStatus.OK).json(user);

    } catch(error) {
      throw new HttpException(HandleErrors(error), HttpStatus.BAD_REQUEST);
    }
  }

  async authenticate(res: ExpressResponse, req:ExpressRequest) {
    const user = GetSessionToken( res, req )
    
    return res.status(HttpStatus.OK).json( user );
  }
}
