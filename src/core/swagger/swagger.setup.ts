// File: src/core/swagger/swagger.setup.ts
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

interface SwaggerSetupOptions {
  prefix: string;
  version: string;
  configService: ConfigService;
}

export function setupSwagger(
  app: INestApplication,
  options: SwaggerSetupOptions,
) {
  const { prefix, version, configService } = options;

  const enabled = configService.get<boolean>('feature.swagger', true);
  if (!enabled) return;

  const config = new DocumentBuilder()
    .setTitle('API Document')
    .setDescription('Core API documentation')
    .setVersion(version)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup(
    `${prefix}/${version}/docs`,
    app,
    document,
  );
}
