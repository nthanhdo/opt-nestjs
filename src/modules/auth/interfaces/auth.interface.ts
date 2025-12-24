// src/modules/auth/interfaces/auth.interface.ts
import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseUser {
  @ApiProperty({ example: 1 })
  id!: number;

  @ApiProperty({ example: 'user@example.com' })
  email!: string;

  @ApiProperty({ example: 'John Doe', required: false })
  name?: string;
}

export class LoginResponse {
  @ApiProperty({ example: 'jwt-token' })
  token!: string;

  @ApiProperty({ type: LoginResponseUser })
  user!: LoginResponseUser;
}
