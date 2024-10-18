import { regex_alphanumeric, regex_email, regex_password } from './../utils/regex.util';
import { ApiProperty } from '@nestjs/swagger';


export class LoginSwagger {
  @ApiProperty({
    description: 'email or username',
    example: 'johndoe@gmail.com',
  })
  credential: typeof regex_alphanumeric;

  @ApiProperty({
    description: 'password',
    example: '@12345679Aa',
  })
  password: typeof regex_password;
}

export class RegisterSwagger {
  @ApiProperty({
    description: 'email',
    example: 'johndoe@gmail.com',
  })
  email: typeof regex_email;

  @ApiProperty({
    description: 'username',
    example: 'johndoe123',
  })
  username: typeof regex_alphanumeric;

  @ApiProperty({
    description: 'password',
    example: '@12345679Aa',
  })
  password: typeof regex_password;
}

class ServerResDto {
  @ApiProperty({
    description: 'ID account',
    example: 56792,
  })
  Id: number;

  @ApiProperty({
    description: "User's birthday",
    example: '2004-06-09T00:00:00.000Z',
  })
  Birthday: Date;

  @ApiProperty({
    description: "Money in the user's wallet",
    example: 1000,
  })
  Cash: number;

  @ApiProperty({
    description: 'ID discord',
    example: 538127290232471550,
  })
  DiscordId: number;

  @ApiProperty({
    description: 'Email account',
    example: 'jonh.doe@email.com',
  })
  Email: string;

  @ApiProperty({
    description: 'Email account',
    example: 'Jonh Doe',
  })
  Name: string;

  @ApiProperty({
    description: 'User priority',
    example: null,
  })
  Priority: number | null;

  @ApiProperty({
    description: 'Steam Hex',
    example: '11000014b1dd3f2',
  })
  SteamHex: string;

  @ApiProperty({
    description: 'User priority',
    example: null,
  })
  VipExpirationDate: Date | null;

  @ApiProperty({
    description: 'Vip ID',
    example: true,
  })
  VipId: boolean;

  @ApiProperty({
    description: 'Have Whitelisted',
    example: false,
  })
  Whitelisted: boolean;
}

class DiscordResDto {
  @ApiProperty({
    description: 'Discord user ID',
    example: '538127334343474',
  })
  id: string;

  @ApiProperty({
    description: 'Discord username',
    example: 'JonhDoeXP',
  })
  username: string;

  @ApiProperty({
    description: 'Discord avatar hash',
    example: 'c880c0073428bbc856240678d7305cdd',
  })
  avatar: string;

  @ApiProperty({
    description: 'Discriminator (the four-digit tag)',
    example: '0',
  })
  discriminator: string;

  @ApiProperty({
    description: 'Public flags',
    example: 0,
  })
  public_flags: number;

  @ApiProperty({
    description: 'Flags',
    example: 0,
  })
  flags: number;

  @ApiProperty({
    description: 'Banner hash',
    example: null,
  })
  banner: string | null;

  @ApiProperty({
    description: 'Accent color',
    example: 0,
  })
  accent_color: number;

  @ApiProperty({
    description: 'Global name',
    example: 'JohnDoeXP',
  })
  global_name: string;

  @ApiProperty({
    description: 'Avatar decoration data',
    example: null,
  })
  avatar_decoration_data: string | null;

  @ApiProperty({
    description: 'Banner color',
    example: '#000000',
  })
  banner_color: string;

  @ApiProperty({
    description: 'Clan',
    example: null,
  })
  clan: string | null;

  @ApiProperty({
    description: 'MFA enabled',
    example: false,
  })
  mfa_enabled: boolean;

  @ApiProperty({
    description: 'Locale',
    example: 'pt-BR',
  })
  locale: string;

  @ApiProperty({
    description: 'Premium type',
    example: 0,
  })
  premium_type: number;

  @ApiProperty({
    description: 'Email',
    example: 'johndoe@email.com',
  })
  email: string;

  @ApiProperty({
    description: 'Verified',
    example: true,
  })
  verified: boolean;
}

export class UserDataResDto {
  @ApiProperty({
    description: 'Main server data',
    type: ServerResDto,
  })
  principal: ServerResDto;

  @ApiProperty({
    description: 'Valley server data',
    type: ServerResDto,
  })
  valley: ServerResDto;

  @ApiProperty({
    description: 'Discord user data',
    type: DiscordResDto,
  })
  discord: DiscordResDto;

  @ApiProperty({
    description: 'List of roles assigned to the user',
    example: ['ADMIN'],
    isArray: true,
    type: String,
  })
  roles: string[];
}

class JwtResDto {
  @ApiProperty({
    description: 'Data in jwt',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcmluY2lwYWwiOnsiSWQiOjU2NzkyLCJCaXJ0aGRheSI6IjIwMDQtMDYtMDlUMDA6MDA6MDAuMDAwWiIsIkNhc2giOjAsIkRpc2NvcmRJZCI6NTM4MTI3MjkwMjMyNDcxNTUwLCJFbWFpbCI6ImNvbnRhdG9lc2RyYXNvZmljaWFsQGdtYWlsLmNvbSIsIk5hbWUiOiJGZXJuYW5kbyBFc2RyYXMgZGEgU2lsdmEiLCJQcmlvcml0eSI6bnVsbCwiU3RlYW1IZXgiOiIxMTAwMDAxNGIxZGQzZjIiLCJWaXBFeHBpcmF0aW9uRGF0ZSI6IjIwMjQtMDctMzFUMTg6MDg6NDMuMDAwWiIsIlZpcElkIjo0LCJXaGl0ZWxpc3RlZCI6MX0sInZhbGxleSI6eyJJZCI6NzcyMDksIkJpcnRoZGF5IjoiMjAwNC0wNi0wOVQwMDowMDowMC4wMDBaIiwiQ2FzaCI6MCwiRGlzY29yZElkIjo1MzgxMjcyOTAyMzI0NzE1NTAsIkVtYWlsIjoiY29udGF0b2VzZHJhc29maWNpYWxAZ21haWwuY29tIiwiTmFtZSI6IkZlcm5hbmRvIEVzZHJhcyBkYSBTaWx2YSIsIlByaW9yaXR5IjpudWxsLCJTdGVhbUhleCI6IjExMDAwMDE0YjFkZDNmMiIsIlZpcEV4cGlyYXRpb25EYXRlIjpudWxsLCJWaXBJZCI6MSwiV2hpdGVsaXN0ZWQiOjB9LCJkaXNjb3JkIjp7ImlkIjoiNTM4MTI3MjkwMjMyNDcxNTc0IiwidXNlcm5hbWUiOiJlc2RyYXNmeXkiLCJhdmF0YXIiOiJjODgwYzAwNzM0MjhiYmM4NTYyNDA2NzhkNzMwNWNkZCIsImRpc2NyaW1pbmF0b3IiOiIwIiwicHVibGljX2ZsYWdzIjowLCJmbGFncyI6MCwiYmFubmVyIjpudWxsLCJhY2NlbnRfY29sb3IiOjAsImdsb2JhbF9uYW1lIjoiZXNkcmFzLmRldiIsImF2YXRhcl9kZWNvcmF0aW9uX2RhdGEiOm51bGwsImJhbm5lcl9jb2xvciI6IiMwMDAwMDAiLCJjbGFuIjpudWxsLCJtZmFfZW5hYmxlZCI6ZmFsc2UsImxvY2FsZSI6InB0LUJSIiwicHJlbWl1bV90eXBlIjowLCJlbWFpbCI6ImZlcm5hYW5kby5lc2RyYXNAZ21haWwuY29tIiwidmVyaWZpZWQiOnRydWV9LCJyb2xlcyI6WyJBRE1JTiJdLCJpYXQiOjE3MjE0MTE4OTcsImV4cCI6MTcyMjAxNjY5N30.S_gRzi0SbqmbYtSvM0uLGNjNQ9NPqzaqGCEjyDnfiuM',
  })
  token: string;
}

export class LoginResDto200 {
  @ApiProperty({
    description: 'Request message',
    example: 'OK',
  })
  message: string;

  @ApiProperty({
    description: 'Request message',
    type: JwtResDto,
  })
  data: JwtResDto;

  @ApiProperty({
    description: 'Request message',
    example: true,
  })
  success: boolean;
}

export class LoginResDto201 {
  @ApiProperty({
    description: 'Request message',
    example: 'DISCORD_TOKEN_EXPIRED',
  })
  message: string;
  @ApiProperty({
    description: 'Request message',
    example: false,
  })
  success: boolean;
}
