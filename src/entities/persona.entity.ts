/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Area } from "./area.entity";

@Entity('personas')  // Entidad 'Persona' mapeada a la tabla 'personas'
export class Persona {
  
  @PrimaryGeneratedColumn()  // Clave primaria autoincrementable
  id!: number;

  @Column({ length: 50 })  // Columna de texto con 50 caracteres para el nombre
  nombre!: string;

  @Column({ length: 50 })  // Columna de texto con 50 caracteres para el correo
  correo!: string;

  @ManyToOne(() => Area, (area) => area.personas)  // Relación muchos a uno con 'Area'
  area!: Area;
}
