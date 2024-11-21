/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Persona } from './persona.entity';

@Entity('areas') 
export class Area {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 50 })
  nombre!: string;

  @OneToMany(() => Persona, (persona) => persona.area)
  personas!: Persona[];
}
