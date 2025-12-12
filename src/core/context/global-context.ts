import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GlobalContext {
  constructor(private config: ConfigService) {}

  get<T = any>(key: string, defaultValue?: T): T | undefined {
    const value = this.config.get<T>(key);
    return value !== undefined ? value : defaultValue;
  }
}
