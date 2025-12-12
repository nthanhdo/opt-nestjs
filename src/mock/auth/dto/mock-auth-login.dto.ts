import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class MockAuthLoginDto {
  @ApiProperty({ example: 'admin', description: 'Mock username' })
  @IsString()
  username: string;

  @ApiProperty({ example: '123456', description: 'Mock password' })
  @IsString()
  password: string;
}
