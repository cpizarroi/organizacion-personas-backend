/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AreasModule } from './areas/areas.module';
import { PersonasModule } from './personas/personas.module';
import { Area } from './entities/area.entity';
import { Persona } from './entities/persona.entity';
import { CorsMiddleware } from '@nest-middlewares/cors';

@Module({
  imports: [
    // Configuración global de entorno
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env', // Archivo con las variables de entorno
    }),

    // Configuración de la base de datos
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DATABASE_HOST'),
        port: +configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        entities: [Area, Persona],  // Entidades usadas en la base de datos
        synchronize: true,  // Sincroniza la base de datos automáticamente
      }),
    }),

    // Módulos importados
    AreasModule,
    PersonasModule,
  ],
})
export class AppModule implements NestModule {
  // Configura el middleware para CORS
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CorsMiddleware)  // Aplica el middleware CORS
      .forRoutes('*'); // Aplica CORS a todas las rutas
  }
}
