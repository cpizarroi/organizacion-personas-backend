/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Area } from "./area.entity";

@Entity('personas') 
export class Persona {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 50 })
  nombre!: string;

  @Column({ length: 50 })
  correo!: string;

  @ManyToOne(() => Area, (area) => area.personas)
  area!: Area;
}

