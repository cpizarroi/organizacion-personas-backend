/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Persona } from './persona.entity';  

@Entity('areas')  // Entidad 'Area' mapeada a la tabla 'areas'
export class Area {
  
  @PrimaryGeneratedColumn()  // Clave primaria autoincrementable
  id!: number;

  @Column({ length: 50 })  // Columna de texto con 50 caracteres para nombre
  nombre!: string;

  @OneToMany(() => Persona, (persona) => persona.area)  // Relación uno a muchos con 'Persona'
  personas!: Persona[];
}
