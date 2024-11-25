/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Area } from "../entities/area.entity";
import { AreasService } from "./services/areas.service";
import { AreasController } from "./controller/areas.controller";

@Module({
  // Registra el repositorio de 'Area' en TypeORM
  imports: [TypeOrmModule.forFeature([Area])],
  
  // Registra el controlador que manejará las rutas
  controllers: [AreasController],
  
  // Registra el servicio que contiene la lógica de negocio
  providers: [AreasService],
})
export class AreasModule {}
