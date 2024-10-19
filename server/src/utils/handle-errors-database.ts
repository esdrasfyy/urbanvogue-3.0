import { HttpException, HttpStatus } from "@nestjs/common";

export const HandleErrors = (error) => {
  if (error?.meta?.target) {
    switch (error.meta.target) {
      case 'users_username_key':
        throw new HttpException('username already exists.', HttpStatus.CONFLICT);
      case 'users_email_key':
        throw new HttpException('email already exists.', HttpStatus.CONFLICT);
      case 'users_national_id_key':
        throw new HttpException('national ID already exists.', HttpStatus.CONFLICT);
      default:
        throw new HttpException('an unexpected error occurred', HttpStatus.INTERNAL_SERVER_ERROR,);
    }
  }
  throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
};

