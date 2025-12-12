import { Controller, Post, Get, Body } from '@nestjs/common';

@Controller('auth')
export class AuthMockController {
  @Post('login')
  login(@Body() body: any) {
    return {
      accessToken: 'mock_access_token_123',
      refreshToken: 'mock_refresh_token_456',
      user: {
        id: 'mock_user_001',
        email: body.email ?? 'mock@example.com',
        name: 'Mock User',
        avatar: 'https://picsum.photos/200',
      },
    };
  }

  @Get('me')
  me() {
    return {
      id: 'mock_user_001',
      email: 'mock@example.com',
      name: 'Mock User',
    };
  }
}
