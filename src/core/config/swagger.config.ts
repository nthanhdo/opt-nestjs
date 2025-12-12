// File: src/core/config/swagger.config.ts
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


export const createSwaggerDocument = (app: INestApplication) => {
  const version = '1.0.0';

  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('NestJS API Docs (auto generated)')
    .setVersion(version)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  return { document, config, version };
};
