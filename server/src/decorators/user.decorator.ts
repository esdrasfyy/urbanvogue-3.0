import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { verify } from "jsonwebtoken";

export const User = createParamDecorator((context: ExecutionContext): Account.UserI => {
  const cookies = context.switchToHttp().getRequest().headers.cookie;
  const token = cookies
    ?.split("; ")
    .find((cookie) => cookie.startsWith(`${process.env.SESSION_COOKIE}=`))
    ?.split("=")[1];

  const { user } = verify(token, process.env.SECRET) as { user: Account.UserI; iat: number; exp: number };

  return user;
});
