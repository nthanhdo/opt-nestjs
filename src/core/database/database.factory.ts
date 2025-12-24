import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { DatabaseDriver } from '../../config/database.config';

@Injectable()
export class DatabaseFactory {
  constructor(private readonly configService: ConfigService) {}

  /**
   * Lấy driver đang được config
   * mongo | postgres | mysql
   */
  getDriver(): DatabaseDriver {
    const dbConfig = this.configService.get('database');
    return dbConfig?.driver || 'mongo';
  }

  /**
   * Resolve database driver instance
   * (implement sau)
   */
  createConnection(): any {
    const driver = this.getDriver();

    switch (driver) {
      case 'postgres':
        // return new PostgresDriver(...)
        return null;

      case 'mysql':
        // return new MysqlDriver(...)
        return null;

      case 'mongo':
      default:
        // return new MongoDriver(...)
        return null;
    }
  }
}
