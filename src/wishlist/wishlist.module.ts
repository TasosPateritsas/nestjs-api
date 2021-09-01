import { Module } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { WishlistController } from './wishlist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wishlist } from './entities/wishlist.entity';
import { UsersModule } from 'src/users/users.module';
import { RealEstatesModule } from 'src/real-estates/real-estates.module';
import { UsersService } from 'src/users/users.service';
import { RealEstatesService } from 'src/real-estates/real-estates.service';
import { User } from 'src/users/entities/user.entity';
import { RealEstate } from 'src/real-estates/entities/real-estate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Wishlist]),UsersModule,RealEstatesModule, TypeOrmModule.forFeature([User]), TypeOrmModule.forFeature([RealEstate])],
  controllers: [WishlistController],
  providers: [WishlistService , UsersService,RealEstatesService]
})
export class WishlistModule {}
