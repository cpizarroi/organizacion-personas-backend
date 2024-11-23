/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

// Cargar variables de entorno desde .env
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:4200', // Permitir solicitudes desde Angular
    methods: 'GET,POST', // Métodos permitidos
    allowedHeaders: 'Content-Type,Authorization', // Headers permitidos
  });

  await app.listen(3000);
}
bootstrap();
