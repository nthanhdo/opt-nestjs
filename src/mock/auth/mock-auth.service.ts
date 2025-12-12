import { Injectable } from '@nestjs/common';
import {MockAuthResponseDto} from "@mock/auth/dto/mock-auth-response.dto";

@Injectable()
export class MockAuthService {
  login(): MockAuthResponseDto {
    return {
      success: true,
      token: 'mock-token-xyz',
      user: {
        id: 1,
        username: 'admin',
        role: 'admin',
      },
    };
  }

  verifyToken(): any {
    return {
      success: true,
      valid: true,
      userId: 1,
    };
  }
}
