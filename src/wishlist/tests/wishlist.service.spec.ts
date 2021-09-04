import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { RealEstate } from '../../real-estates/entities/real-estate.entity';
import { RealEstatesService } from '../../real-estates/real-estates.service';
import { Repository } from 'typeorm';
import { Wishlist } from '../entities/wishlist.entity';
import { WishlistService } from '../wishlist.service';
import { UsersService } from '../../users/users.service';
import { User } from '../../users/entities/user.entity';
import { CreateWishlistDto } from '../dto/create-wishlist.dto';
import { Logger } from '@nestjs/common';


describe('WishlistService', () => {
  let service: WishlistService;
  let wishlistMockRepository: MockType<Repository<Wishlist>>;
  let realEstateService : RealEstatesService;
  let realEstateMockRepository: MockType<Repository<RealEstate>>;
  let userService : UsersService;
  let userMockRepository: MockType<Repository<User>>;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WishlistService,
      {
        provide :getRepositoryToken(Wishlist),
        useFactory: repositoryMockFactory,
      },
      RealEstatesService,
      {
        provide :getRepositoryToken(RealEstate),
        useFactory: repositoryMockFactory,
      },
      UsersService,
      {
        provide :getRepositoryToken(User),
        useFactory: repositoryMockFactory,
      },
    ],
    }).compile();

    service = await module.get(WishlistService);
    wishlistMockRepository = module.get(getRepositoryToken(Wishlist));
    realEstateService = await module.get(RealEstatesService);
    realEstateMockRepository = module.get(getRepositoryToken(RealEstate));
    userService = await module.get(UsersService);
    userMockRepository = module.get(getRepositoryToken(User));
  });

  describe('when getting a wishlist by id', () => {
    describe('and the user is matched', () => {
      let wishlist: Wishlist;
      beforeEach(() => {
        wishlist = new Wishlist();
        wishlistMockRepository.find.mockReturnValue(Promise.resolve(wishlist));
        
      });
      it('should return the wishlist', async () => {
        const fetchedwishlist = await service.findOne("1");
        expect(fetchedwishlist).toEqual(wishlist);
      });
    });
    describe('and the wishlist is not matched', () => {
      beforeEach(() => {
        wishlistMockRepository.find.mockImplementation(() => {
          throw Error();
        });
      });
      it('should throw an error', async () => {
        try {
          await service.findOne("1");
        } catch (e) {
          expect(e.message).toEqual(``);
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