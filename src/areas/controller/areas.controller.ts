/* eslint-disable prettier/prettier */
import { Controller, Get, Post, /*Put, Delete,*/ Param, Body } from '@nestjs/common';
import { AreasService } from '../services/areas.service';
import { Area } from '../../entities/area.entity';

@Controller('areas')
export class AreasController {
  constructor(private readonly areasService: AreasService) {}

  // Método para obtener todas las áreas
  @Get()
  findAll(): Promise<Area[]> {
    return this.areasService.findAll();
  }

  // Método para obtener una área por su ID
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Area> {
    return this.areasService.findOne(id);
  }

  // Método para crear una nueva área
  @Post()
  create(@Body() data: Partial<Area>): Promise<Area> {
    return this.areasService.create(data);
  }

  /* 
  // Método para actualizar un área por su ID
  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Area>): Promise<{ mensaje: string }> {
    return this.areasService.update(id, data);
  }

  // Método para eliminar un área por su ID
  @Delete(':id')
  delete(@Param('id') id: number): Promise<{ mensaje: string }> {
    return this.areasService.delete(id);
  }
  */
}
