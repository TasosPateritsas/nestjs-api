import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { UsersService } from '../users.service';

describe('UsersService', () => {
  let service: UsersService;
  let usersService : UsersService;
  let usersMockRepository: MockType<Repository<User>>;
  beforeEach(async () => {
    
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide :getRepositoryToken(User),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);

    usersService = await module.get(UsersService);
    usersMockRepository = module.get(getRepositoryToken(User));
  });

  describe('when getting a user by id', () => {
    describe('and the user is matched', () => {
      let user: User;
      beforeEach(() => {
        user = new User();
        usersMockRepository.findOne.mockReturnValue(Promise.resolve(user));
      });
      it('should return the user', async () => {
        const fetchedUser = await usersService.findOne("1");
        expect(fetchedUser).toEqual(user);
      });
    });
    describe('and the user is not matched', () => {
      beforeEach(() => {
        usersMockRepository.findOne.mockImplementation(() => {
          throw Error();
        });
      });
      it('should throw an error', async () => {
        try {
          await usersService.findOne("1");
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
