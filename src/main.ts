import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { GlobalContext } from './core/context/global-context';
import { TransformInterceptor } from './core/interceptors/transform.interceptor';
import { LoggerMiddleware } from './core/middlewares/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const ctx = app.get(GlobalContext);

  app.use(new LoggerMiddleware(ctx).use.bind(new LoggerMiddleware(ctx)));
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
  app.useGlobalInterceptors(new TransformInterceptor());

  const port = parseInt(process.env.APP_PORT ?? '3000', 10);

  const version = '1.0.0';
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Shop Service API document')
    .setDescription('This is Shop Service API description')
    .setVersion(version)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig, {
    deepScanRoutes: false,  // ⛔ Quan trọng!
  });

  const outputDir = `./swagger/${version}`;
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  const outputPath = `${outputDir}/swagger.json`;
  writeFileSync(outputPath, JSON.stringify(document, null, 2));

  SwaggerModule.setup('api-document', app, document);

  await app.listen(port);
  console.log(`🚀 Application is running on http://localhost:${port}`);
}

bootstrap();
