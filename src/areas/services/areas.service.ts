/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Area } from "../../entities/area.entity";

@Injectable()
export class AreasService {
  constructor(
    @InjectRepository(Area)
    private readonly areaRepository: Repository<Area>,
  ) {}

  async findAll(): Promise<Area[]> {
    const areas = await this.areaRepository.find();
    return areas;
  }

  async findOne(id: number): Promise<Area> {
    const area = await this.areaRepository.findOne({ where: { id } });
    if (!area) {
      throw new NotFoundException(`Área con ID ${id} no encontrada.`);
    }
    return area;
  }

  async create(data: Partial<Area>): Promise<Area> {
    const area = this.areaRepository.create(data);
    const savedArea = await this.areaRepository.save(area);
    return savedArea;
  }
}


  /*async update(id: number, data: Partial<Area>): Promise<{ mensaje: string }> {
    console.log(
      `Updating area with id: ${id} with data: ${JSON.stringify(data)}`,
    );
    const result = await this.areaRepository.update(id, data);

    if (result.affected && result.affected > 0) {
      const mensaje = `Área con ID ${id} actualizada con éxito.`;
      console.log(mensaje);
      return { mensaje };
    } else {
      throw new NotFoundException(
        `No se encontró el área con ID ${id} para actualizar.`,
      );
    }
  }

  async delete(id: number): Promise<{ mensaje: string }> {
    console.log(`Intentando eliminar el área con id: ${id}`);
    const result = await this.areaRepository.delete(id);
  
    if (result.affected && result.affected > 0) {
      const mensaje = `Área con ID ${id} eliminada con éxito.`;
      console.log(mensaje);
      return { mensaje };
    } else {
      throw new NotFoundException(
        `No se encontró el área con ID ${id} para eliminar.`,
    }
  }*/
}
