// src/modules/auth/dto/auth-login.dto.ts
import { IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthLoginDto {
  @ApiProperty({ description: 'User email', example: 'user@example.com' })
  @IsEmail()
  email!: string;

  @ApiProperty({ description: 'User password', example: 'P@ssw0rd' })
  @IsString()
  @MinLength(6)
  password!: string;
}
