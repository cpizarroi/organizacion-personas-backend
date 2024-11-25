/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Area } from "../../entities/area.entity";

@Injectable()
export class AreasService {
  constructor(
    @InjectRepository(Area)  // Inyección del repositorio de 'Area' para interactuar con la base de datos
    private readonly areaRepository: Repository<Area>,
  ) {}

  // Método que obtiene todas las áreas almacenadas en la base de datos
  async findAll(): Promise<Area[]> {
    const areas = await this.areaRepository.find();  // Consulta a la base de datos
    return areas;  // Devuelve las áreas encontradas
  }

  // Método que obtiene una sola área por su ID
  async findOne(id: number): Promise<Area> {
    const area = await this.areaRepository.findOne({ where: { id } }); 
    if (!area) {  // Si no se encuentra el área, lanza una excepción
      throw new NotFoundException(`Área con ID ${id} no encontrada.`);
    }
    return area;  // Si se encuentra el área, se devuelve
  }

  // Método que crea una nueva área en la base de datos
  async create(data: Partial<Area>): Promise<Area> {
    const area = this.areaRepository.create(data);  // Crea una instancia de área con los datos proporcionados
    const savedArea = await this.areaRepository.save(area);  // Guarda el área en la base de datos
    return savedArea;  // Devuelve el área guardada
  }

  /* 
  // Método comentado para actualizar un área existente por su ID
  async update(id: number, data: Partial<Area>): Promise<{ mensaje: string }> {
    console.log(
      `Updating area with id: ${id} with data: ${JSON.stringify(data)}`,
    );
    const result = await this.areaRepository.update(id, data);  // Actualiza el área con el ID proporcionado

    if (result.affected && result.affected > 0) {  // Si se actualizó con éxito
      const mensaje = `Área con ID ${id} actualizada con éxito.`;
      console.log(mensaje);
      return { mensaje };  // Devuelve un mensaje de éxito
    } else {  // Si no se encontró el área para actualizar
      throw new NotFoundException(
        `No se encontró el área con ID ${id} para actualizar.`,
      );
    }
  }

  // Método comentado para eliminar un área por su ID
  async delete(id: number): Promise<{ mensaje: string }> {
    console.log(`Intentando eliminar el área con id: ${id}`);
    const result = await this.areaRepository.delete(id);  // Elimina el área con el ID proporcionado
  
    if (result.affected && result.affected > 0) {  // Si se eliminó con éxito
      const mensaje = `Área con ID ${id} eliminada con éxito.`;
      console.log(mensaje);
      return { mensaje };  // Devuelve un mensaje de éxito
    } else {  // Si no se encontró el área para eliminar
      throw new NotFoundException(
        `No se encontró el área con ID ${id} para eliminar.`,
      );
    }
  }
  */
}
