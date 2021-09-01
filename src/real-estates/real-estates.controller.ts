import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { RealEstatesService } from './real-estates.service';
import { CreateRealEstateDto } from './dto/create-real-estate.dto';
import { UpdateRealEstateDto } from './dto/update-real-estate.dto';
import { RealEstate } from './entities/real-estate.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('real-estates')
@Controller('real-estates')
export class RealEstatesController {
  constructor(private readonly realEstatesService: RealEstatesService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  create(@Body() createRealEstateDto: CreateRealEstateDto): Promise<RealEstate> {
    return this.realEstatesService.create(createRealEstateDto);
  }
  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  async findAll(): Promise<RealEstate[]>  {
    return this.realEstatesService.findAll();
  }
  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<RealEstate>  {
    return this.realEstatesService.findOne(id);
  }
  @UseInterceptors(ClassSerializerInterceptor)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRealEstateDto: UpdateRealEstateDto): Promise<RealEstate>  {
    return this.realEstatesService.update(id, updateRealEstateDto);
  }
  @UseInterceptors(ClassSerializerInterceptor)
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<RealEstate>  {
    return this.realEstatesService.remove(id);
  }
}
