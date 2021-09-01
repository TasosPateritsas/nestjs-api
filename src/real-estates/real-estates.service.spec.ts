import { Test, TestingModule } from '@nestjs/testing';
import { RealEstatesService } from './real-estates.service';

describe('RealEstatesService', () => {
  let service: RealEstatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RealEstatesService],
    }).compile();

    service = module.get<RealEstatesService>(RealEstatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
