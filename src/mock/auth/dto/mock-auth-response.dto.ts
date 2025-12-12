import { ApiProperty } from '@nestjs/swagger';

export class MockAuthResponseDto {
  @ApiProperty({ example: true })
  success: boolean;

  @ApiProperty({ example: 'mock-token-xyz' })
  token: string;

  @ApiProperty({
    example: {
      id: 1,
      username: 'admin',
      role: 'admin',
    },
  })
  user: any;
}
