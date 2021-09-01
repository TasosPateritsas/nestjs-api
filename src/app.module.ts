import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RealEstatesModule } from './real-estates/real-estates.module';
import { WishlistModule } from './wishlist/wishlist.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 35000,
      username: 'user',
      password: 'password',
      database: 'db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    RealEstatesModule,
    WishlistModule,
  ],
  
})
export class AppModule {}
