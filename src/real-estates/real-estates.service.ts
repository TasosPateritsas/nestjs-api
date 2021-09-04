import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRealEstateDto } from './dto/create-real-estate.dto';
import { UpdateRealEstateDto } from './dto/update-real-estate.dto';
import { RealEstate } from './entities/real-estate.entity';

@Injectable()
export class RealEstatesService {

  @InjectRepository(RealEstate)
  realEstateRepository: Repository<RealEstate>;


  create(createRealEstateDto: CreateRealEstateDto) {
    const re = this.realEstateRepository.create(createRealEstateDto);
    return this.realEstateRepository.save(re);
  }

  async findAll(): Promise<RealEstate[]> {
    return await this.realEstateRepository.find();
  }

  async findOne(id: string): Promise<RealEstate> {

    try{
      const realEstate = await this.realEstateRepository.findOne(id);
      return realEstate;
    }catch(e){
      throw new NotFoundException(`realEstate with ID=${id} not found`);
    }
    
    
    
  }

  async update(id: string, updateRealEstateDto: UpdateRealEstateDto) {
    const user = await this.realEstateRepository.preload({
      id: id,
      ...updateRealEstateDto,
    });
    if (!user) {
      throw new NotFoundException(`User with ID=${id} not found`);
    }
    return this.realEstateRepository.save(user);
  }

  async remove(id: string) {
    const user = await this.findOne(id);
    return this.realEstateRepository.remove(user);
  }
}
