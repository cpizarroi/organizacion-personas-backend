/* eslint-disable prettier/prettier */
import { Controller, Get, Post, /*Put, Delete,*/ Param, Body } from '@nestjs/common';
import { PersonasService } from '../services/personas.service';
import { Persona } from '../../entities/persona.entity';

@Controller('personas')
export class PersonasController {
  constructor(private readonly personasService: PersonasService) {}

  // Obtener todas las personas
  @Get()
  findAll(): Promise<Persona[]> {
    return this.personasService.findAll();
  }

  // Obtener una persona por ID
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Persona> {
    return this.personasService.findOne(id);
  }

  // Crear una nueva persona
  @Post()
  async create(@Body() data: Partial<Persona>): Promise<Persona> {
    console.log('Datos recibidos para crear persona:', data); // Verifica los datos que llegan al backend
    return this.personasService.create(data);
  }
  

  /*// Actualizar una persona existente
  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Persona>): Promise<{ mensaje: string }> {
    return this.personasService.update(id, data);
  }

  // Eliminar una persona
  @Delete(':id')
  delete(@Param('id') id: number): Promise<{ mensaje: string }> {
    return this.personasService.delete(id);
  }*/
}
