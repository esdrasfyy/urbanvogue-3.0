import { Controller, Get, Post, Body, Res, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { isPublic } from "src/decorators/is-public.js";
import { Response as ExpressResponse, Request as ExpressRequest } from "express";
import { ApiBody, ApiOperation, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { LoginSwagger, RegisterSwagger } from "src/docs/auth.doc";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @isPublic()
  @Post("register")
  @ApiOperation({ summary: "create user and returns decrypted user data via cookies." })
  @ApiResponse({ status: 201, description: "user created and logged.", type: LoginSwagger })
  @ApiResponse({ status: 409, description: "data already exists" })
  @ApiResponse({ status: 400, description: "incorrect field." })
  @ApiBody({ type: RegisterSwagger })
  async register(@Res() res: ExpressResponse, @Body() dto: Auth.Register) {
    await this.authService.register(dto, res);
  }

  @isPublic()
  @Get("github")
  @ApiOperation({ summary: "Authenticate user via GitHub and return session data" })
  @ApiResponse({ status: 200, description: "User successfully authenticated via GitHub. Session data returned." })
  @ApiResponse({ status: 400, description: "Failed GitHub authentication. User may be logged out or session expired." })
  @ApiQuery({ name: "code", required: true, description: "Authorization code provided by GitHub after user grants permissions." })
  async github(@Res() res: ExpressResponse, @Req() req: ExpressRequest) {
    await this.authService.github(res, req);
  }

  @isPublic()
  @Get("google")
  @ApiOperation({ summary: "Authenticate user via Google and return session data" })
  @ApiResponse({ status: 200, description: "User successfully authenticated via Google. Session data returned." })
  @ApiResponse({ status: 400, description: "Failed Google authentication. User may be logged out or session expired." })
  @ApiQuery({ name: "code", required: true, description: "Authorization code provided by Google after user grants permissions." })
  async google(@Res() res: ExpressResponse, @Req() req: ExpressRequest) {
    await this.authService.google(res, req);
  }

  @isPublic()
  @Post("login")
  @ApiOperation({ summary: "returns decrypted user data via cookies." })
  @ApiResponse({ status: 200, description: "user logged.", type: LoginSwagger })
  @ApiResponse({ status: 404, description: "not found user." })
  @ApiResponse({ status: 401, description: "incorrect password." })
  @ApiResponse({ status: 400, description: "incorrect field." })
  @ApiBody({ type: LoginSwagger })
  async login(@Res() res: ExpressResponse, @Body() dto: Auth.Login) {
    await this.authService.login(dto, res);
  }

  @isPublic()
  @Get("me")
  @ApiOperation({ summary: "capture user session and return via body" })
  @ApiResponse({ status: 200, description: "data captured and returned.", type: LoginSwagger })
  @ApiResponse({ status: 400, description: "logged out user." })
  async getMe(@Res() res: ExpressResponse, @Req() req: ExpressRequest) {
    await this.authService.authenticate(res, req);
  }

  @isPublic()
  @Post("forgot-password")
  @ApiOperation({ summary: "returns decrypted user data via cookies." })
  @ApiResponse({ status: 200, description: "user logged.", type: LoginSwagger })
  @ApiResponse({ status: 404, description: "not found user." })
  @ApiResponse({ status: 401, description: "incorrect password." })
  @ApiResponse({ status: 400, description: "incorrect field." })
  @ApiBody({ type: LoginSwagger })
  async forgotPassword(@Res() res: ExpressResponse, @Body() dto: Auth.ForgotPassword) {
    await this.authService.forgotPassword(res, dto);
  }

  @isPublic()
  @Post("reset-password")
  @ApiOperation({ summary: "returns decrypted user data via cookies." })
  @ApiResponse({ status: 200, description: "user logged.", type: LoginSwagger })
  @ApiResponse({ status: 404, description: "not found user." })
  @ApiResponse({ status: 401, description: "incorrect password." })
  @ApiResponse({ status: 400, description: "incorrect field." })
  @ApiBody({ type: LoginSwagger })
  async resetPassword(@Res() res: ExpressResponse, @Body() dto: Auth.ResetPassword) {
    await this.authService.resetPassword(res, dto);
  }
}
