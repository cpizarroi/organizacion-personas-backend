/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Persona } from '../entities/persona.entity';
import { PersonasService } from './services/personas.service';
import { PersonasController } from './controller/personas.controller';
import { Area } from '../entities/area.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Persona, Area])],
  controllers: [PersonasController],
  providers: [PersonasService],
})
export class PersonasModule {}
