import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger-Konfiguration
  const config = new DocumentBuilder()
      .setTitle('Nest.js API')
      .setDescription('API documentation for Nest.js application')
      .setVersion('1.0')
      .addTag('nestjs')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
