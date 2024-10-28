import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../services/prisma.service";
import * as jwt from "jsonwebtoken";

@Injectable()
export class AuthRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: Account.CreateI) {
    return await this.prisma.user.create({
      data: {
        email: dto.email,
        username: dto.username,
        password: dto.password,
        ...dto,
      },
    });
  }

  async findByCredential(credential: string) {
    return await this.prisma.user.findFirst({
      where: {
        OR: [{ email: credential }, { username: credential }],
      },
    });
  }

  async findByGithubID(id: number) {
    return await this.prisma.user.findFirst({
      where: {
        github_id: String(id),
      },
    });
  }

  async findGoogleAccount(id: string, email: string) {
    return await this.prisma.user.findFirst({
      where: {
        OR: [{ google_id: String(id) }, { email: email }],
      },
    });
  }

  async findAccountByEmail(email: string) {
    return await this.prisma.user.findFirst({
      where: { email: email },
    });
  }

  async createPasswordReset(email: string, id: number) {
    const token = jwt.sign({ email, id }, process.env.SECRET, { expiresIn: "1h" });

    return await this.prisma.passwordReset.create({
      data: {
        email,
        token,
      },
    });
  }

  async updatePassword(id: number, password: string, token: string) {
    await this.prisma.user.update({ where: { id }, data: { password } });
    return await this.prisma.passwordReset.update({ where: { token }, data: { used: true } });
  }

  async getTokenResetPassword(token: string) {
    return await this.prisma.passwordReset.findFirst({ where: { token }, select: { used: true } });
  }
}
