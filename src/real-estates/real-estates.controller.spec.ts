import { Test, TestingModule } from '@nestjs/testing';
import { RealEstatesController } from './real-estates.controller';
import { RealEstatesService } from './real-estates.service';

describe('RealEstatesController', () => {
  let controller: RealEstatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RealEstatesController],
      providers: [RealEstatesService],
    }).compile();

    controller = module.get<RealEstatesController>(RealEstatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
