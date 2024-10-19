import { Injectable } from "@nestjs/common";
import { prisma } from "src/services/prisma.service";

@Injectable()
export class AccountRepository {
  constructor() {}

  async create(dto: Account.UserI) {
    return await prisma.user.create({
      data: {
        email: dto.email,
        username: dto.username,
        password: dto.password,
        ...dto,
      },
    });
  }

  async update(dto) {
    return await prisma.user.update(dto);
  }

  async findByCredential(credential: string) {
    return await prisma.user.findFirst({
      where: {
        OR: [{ email: credential }, { username: credential }],
      },
    });
  }

  async findByGithubID(id: number) {
    return await prisma.user.findFirst({
      where: {
        github_id: String(id),
      },
    });
  }
  
  async findGoogleAccount(id: string, email: string) {
    return await prisma.user.findFirst({
      where: {
        OR: [{ google_id: String(id) }, { email: email }],
      },
    });
  }
}
