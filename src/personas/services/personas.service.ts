/* eslint-disable prettier/prettier */
import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
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
      relations: ['area'],  // Relaciona con la entidad Area
    });
    return personas;
  }

  // Obtener una persona por id
  async findOne(id: number): Promise<Persona> {
    const persona = await this.personaRepository.findOne({
      where: { id },
      relations: ['area'],  // Relaciona con la entidad Area
    });
    if (!persona) {
      throw new NotFoundException(`Persona con ID ${id} no encontrada.`);  // Si no se encuentra la persona
    }
    return persona;
  }

  // Crear una persona
  async create(data: Partial<Persona>): Promise<Persona> {
    const existing = await this.personaRepository.findOne({ where: { correo: data.correo } });
    if (existing) {
      throw new ConflictException('El correo ya está registrado.');  // Verifica si el correo ya está registrado
    }
    const persona = this.personaRepository.create(data);
    return this.personaRepository.save(persona);  // Guarda la nueva persona
  }
}
