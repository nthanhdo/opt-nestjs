import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { MockAuthLoginDto } from '@mock/auth/dto/mock-auth-login.dto';
import { MockAuthResponseDto } from '@mock/auth/dto/mock-auth-response.dto';
import { MockAuthService } from './mock-auth.service';
import {MockAction} from "../../core/decorators/mock-action.decorator";
@ApiTags('Mock Auth')
@Controller('mock/auth')
export class MockAuthController {
  constructor(private readonly mock: MockAuthService) {}

  @Post('login')
  @MockAction('login')
  @ApiOperation({ summary: 'Mock login API' })
  @ApiBody({ type: MockAuthLoginDto })
  @ApiOkResponse({
    type: MockAuthResponseDto,
    description: 'Mock login success',
  })
  login(@Body() body: MockAuthLoginDto) {
    return this.mock.login();
  }

  @Post('verify-token')
  @MockAction('verify')
  @ApiOperation({ summary: 'Mock verify token' })
  @ApiOkResponse({
    schema: {
      example: {
        success: true,
        valid: true,
        userId: 1,
      },
    },
  })
  verifyToken() {
    return this.mock.verifyToken();
  }
}
