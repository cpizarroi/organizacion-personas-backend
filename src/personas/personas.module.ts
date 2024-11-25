/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Persona } from '../entities/persona.entity';
import { PersonasService } from './services/personas.service';
import { PersonasController } from './controller/personas.controller';
import { Area } from '../entities/area.entity';

@Module({
  // Importa las entidades necesarias para el módulo
  imports: [TypeOrmModule.forFeature([Persona, Area])],
  
  // Controladores que manejan las solicitudes HTTP
  controllers: [PersonasController],
  
  // Servicios que proporcionan la lógica de negocio
  providers: [PersonasService],
})
export class PersonasModule {}
