import { HttpException, HttpStatus } from "@nestjs/common";
import { Response, Request } from "express";
import { VerifyErrors, sign, verify } from "jsonwebtoken";

export const LoginUser = (res: Response, user: Account.UserI) => {
  const token = sign({ user }, process.env.SECRET, { expiresIn: "7d" });
  res.cookie(process.env.SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};

export const GetSessionToken = (res: Response, req: Request) => {
  const token = req.cookies[process.env.SESSION_COOKIE];

  if (!token) {
    throw new HttpException("logged out user.", HttpStatus.BAD_REQUEST);
  }

  const user = verify(token, process.env.SECRET, (err: VerifyErrors | null, decoded: Auth.UserSessionI) => {
    if (err) {
      res.cookie(process.env.SESSION_COOKIE, "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        maxAge: 0,
      });
      throw new HttpException("logged out user.", HttpStatus.BAD_REQUEST);
    }
    return decoded.user;
  });
  return user;
};
