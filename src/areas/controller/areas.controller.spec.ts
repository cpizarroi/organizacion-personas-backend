/* eslint-disable prettier/prettier */
import { Test, TestingModule } from "@nestjs/testing";
import { AreasController } from "./areas.controller";
import { AreasService } from "../services/areas.service";
import { Area } from "../../entities/area.entity";

describe("AreasController", () => {
  let controller: AreasController;
  let service: AreasService;

  // Configuración previa a cada prueba
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AreasController], // Controlador que se está probando
      providers: [
        {
          provide: AreasService, // Se reemplaza el servicio real con un mock
          useValue: {
            findAll: jest.fn().mockResolvedValue([]), 
            findOne: jest.fn().mockResolvedValue({}), 
            create: jest.fn().mockResolvedValue({}), 
          },
        },
      ],
    }).compile();

    // Se obtienen las instancias del controlador y servicio
    controller = module.get<AreasController>(AreasController);
    service = module.get<AreasService>(AreasService);
  });

  // Verifica que el controlador se haya inicializado correctamente
  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  // Prueba que findAll devuelve una lista vacía
  it("should return an array of areas", async () => {
    const result: Area[] = [];
    jest.spyOn(service, "findAll").mockResolvedValue(result); // Mock del resultado esperado

    expect(await controller.findAll()).toBe(result); // Comprueba que el controlador retorne el mock
  });

  // Prueba que findOne devuelve un área específica
  it("should return a single area", async () => {
    const id = 1; // ID de ejemplo
    const result: Area = { id, nombre: "Test", personas: [] }; // Datos simulados
    jest.spyOn(service, "findOne").mockResolvedValue(result); // Mock del resultado esperado

    expect(await controller.findOne(id)).toBe(result); // Comprueba que el controlador retorne el área simulada
  });

  // Prueba que create crea una nueva área
  it("should create a new area", async () => {
    const dto: Partial<Area> = { nombre: "New Area" }; // Datos de entrada simulados
    const result: Area = { ...dto, id: 1, personas: [] } as Area; // Resultado esperado
    jest.spyOn(service, "create").mockResolvedValue(result); // Mock de la respuesta

    expect(await controller.create(dto)).toBe(result); // Comprueba que el controlador retorne el nuevo área creada
  });
});
