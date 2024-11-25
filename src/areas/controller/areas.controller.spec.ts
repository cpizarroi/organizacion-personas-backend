/* eslint-disable prettier/prettier */
import { Test, TestingModule } from "@nestjs/testing";
import { AreasController } from "./areas.controller";
import { AreasService } from "../services/areas.service";
import { Area } from "../../entities/area.entity";

describe("AreasController", () => {
  let controller: AreasController;
  let service: AreasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AreasController],
      providers: [
        {
          provide: AreasService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([]),
            findOne: jest.fn().mockResolvedValue({}),
            create: jest.fn().mockResolvedValue({}),
          },
        },
      ],
    }).compile();

    controller = module.get<AreasController>(AreasController);
    service = module.get<AreasService>(AreasService);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  it("should return an array of areas", async () => {
    const result: Area[] = [];
    jest.spyOn(service, "findAll").mockResolvedValue(result);

    expect(await controller.findAll()).toBe(result);
  });

  it("should return a single area", async () => {
    const id = 1;
    const result: Area = { id, nombre: "Test", personas: [] };
    jest.spyOn(service, "findOne").mockResolvedValue(result);

    expect(await controller.findOne(id)).toBe(result);
  });

  it("should create a new area", async () => {
    const dto: Partial<Area> = { nombre: "New Area" };
    const result: Area = { ...dto, id: 1, personas: [] } as Area;
    jest.spyOn(service, "create").mockResolvedValue(result);

    expect(await controller.create(dto)).toBe(result);
  });
});
