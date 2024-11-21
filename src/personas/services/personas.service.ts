/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Persona } from "../../entities/persona.entity";

@Injectable()
export class PersonasService {
  constructor(
    @InjectRepository(Persona)
    private readonly personaRepository: Repository<Persona>,
  ) {}

  // Obtener todas las personas, incluyendo la relación con el área
  async findAll(): Promise<Persona[]> {
    const personas = await this.personaRepository.find({
      relations: ['area'],  
    });
    return personas;
  }

  // Obtener una persona por id
  async findOne(id: number): Promise<Persona> {
    const persona = await this.personaRepository.findOne({
      where: { id },
      relations: ['area'],  
    });
    if (!persona) {
      throw new NotFoundException(`Persona con ID ${id} no encontrada.`);
    }
    return persona;
  }

  // Crear una persona
  async create(data: Partial<Persona>): Promise<Persona> {
    const persona = this.personaRepository.create(data);
    const savedPersona = await this.personaRepository.save(persona);
    return savedPersona;
  }
}
