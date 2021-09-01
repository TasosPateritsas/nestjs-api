import { Module } from '@nestjs/common';
import { RealEstatesService } from './real-estates.service';
import { RealEstatesController } from './real-estates.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RealEstate } from './entities/real-estate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RealEstate])],
  controllers: [RealEstatesController],
  providers: [RealEstatesService]
})
export class RealEstatesModule {}
