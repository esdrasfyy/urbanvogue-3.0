import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { IS_PUBLIC_KEY } from "src/decorators/is-public";
import { verify, VerifyErrors } from "jsonwebtoken";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [context.getHandler(), context.getClass()]);
    if (isPublic) {
      return true;
    }

    const cookies = context.switchToHttp().getRequest().headers.cookie;
    const token = cookies
      ?.split("; ")
      .find((cookie) => cookie.startsWith(`${process.env.SESSION_COOKIE}=`))
      ?.split("=")[1];

    if (!token) return false;

    const isValid = verify(token, process.env.SECRET, (err: VerifyErrors | null) => {
      if (err) {
        context
          .switchToHttp()
          .getResponse()
          .cookie(process.env.SESSION_COOKIE, "", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            maxAge: 0,
          });
        return false;
      }
      return true;
    });

    return Boolean(isValid);
  }
}
