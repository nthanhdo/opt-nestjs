import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { CacheDriver } from '../../config/cache.config';

@Injectable()
export class CacheFactory {
  constructor(private readonly configService: ConfigService) {}

  /**
   * Trả về danh sách cache driver đang enable
   * Logic chi tiết sẽ implement sau
   */
  getEnabledDrivers(): CacheDriver[] {
    const cacheConfig = this.configService.get('cache');
    return cacheConfig?.drivers || [];
  }

  /**
   * Resolve cache driver theo tên
   * (redis | rabbit | memcached)
   */
  getDriver(driver: CacheDriver): any {
    // TODO: map driver → instance
    // hiện tại chỉ là placeholder
    return null;
  }
}
