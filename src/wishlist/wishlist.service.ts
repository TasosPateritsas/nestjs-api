import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RealEstatesService } from 'src/real-estates/real-estates.service';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { Wishlist } from './entities/wishlist.entity';

@Injectable()
export class WishlistService {

  private logger = new Logger(WishlistService.name);
  
  constructor(
    @InjectRepository(Wishlist)
    private whishlistRepository: Repository<Wishlist>,
    private readonly userService: UsersService,
    private readonly realEstateService: RealEstatesService
  ){}
  
  
  async create(createWishlistDto: CreateWishlistDto) {

    try{
      await this.userService.findOne(createWishlistDto.userId);

      await this.realEstateService.findOne(createWishlistDto.realEstateId);
     
    }
    catch( e ){
      this.logger.error('Error fetching user. Details:', e);
      throw e;
      
    }
    

    const wish = this.whishlistRepository.create(createWishlistDto);
    return this.whishlistRepository.save(wish);
    
  }


  async findOne(userId: string):Promise<Wishlist[]> {

    const list = await this.whishlistRepository.find({where: {userId: userId}});

    if(!list){
      throw new NotFoundException(`User with ID=${userId} not found`);
    }

    return list;
  }

  

  async remove(id: number) {
    const wish = await this.whishlistRepository.findOne(id);
    return this.whishlistRepository.remove(wish);
  }
}
