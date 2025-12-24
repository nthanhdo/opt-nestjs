// src/modules/auth/auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { Mockable } from '../../mock/decorators/mockable.decorator';
import { AuthLoginDto } from './dto/auth-login.dto';
import { LoginResponse } from './interfaces/auth.interface';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  @Post('login')
  @Mockable('AUTH_LOGIN', { delay: 500, errorRate: 0.1 })
  @ApiResponse({ status: 200, description: 'Successful login', type: LoginResponse })
  login(@Body() dto: AuthLoginDto): LoginResponse {
    return this.realLogin(dto);
  }

  realLogin(dto: AuthLoginDto): LoginResponse {
    return {
      token: 'real-jwt-token',
      user: {
        id: 1,
        email: dto.email,
        name: 'John Doe',
      },
    };
  }
}
