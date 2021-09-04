import { Test, TestingModule } from '@nestjs/testing';
import { RealEstatesService } from '../real-estates.service';
import { Repository } from 'typeorm';
import { RealEstate } from '../entities/real-estate.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('RealEstatesService', () => {
  let service: RealEstatesService;
  let realEstateRepository : MockType<Repository<RealEstate>>;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RealEstatesService,
      {
        provide : getRepositoryToken(RealEstate),
        useFactory: repositoryMockFactory,
      },
    ],
    }).compile();

    service = await module.get(RealEstatesService);
    realEstateRepository = module.get(getRepositoryToken(RealEstate));
  });

  describe('when getting a realEstate by id', () => {
    describe('and the realEstate is matched', () => {
      let realEstate: RealEstate;
      beforeEach(() => {
        realEstate = new RealEstate();
        realEstateRepository.findOne.mockReturnValue(Promise.resolve(realEstate));
      });
      it('should return the realEstate', async () => {
        const fetchedrealEstate = await service.findOne("1");
        expect(fetchedrealEstate).toEqual(realEstate);
      });
    });
    describe('and the realEstate is not matched', () => {
      beforeEach(() => {
        realEstateRepository.findOne.mockImplementation(() => {
          throw Error();
        });
      });
      it('should throw an error', async () => {
        try {
          await service.findOne("1");
        } catch (e) {
          expect(e.message).toEqual(`realEstate with ID=1 not found`);
        }
      });
    });
  });

});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(() => ({
  findOne: jest.fn(),
  find: jest.fn(),
  update: jest.fn(),
  save: jest.fn(),
}));
export type MockType<T> = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  [P in keyof T]: jest.Mock<{}>;
};
