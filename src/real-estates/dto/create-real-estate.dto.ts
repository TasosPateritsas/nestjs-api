import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, IsString, MaxLength, MinLength } from 'class-validator';
export class CreateRealEstateDto {

    @ApiProperty({
        example: 'Apartment',
        description: 'The name of tha real estate',
        required: true,
      })
    @IsString()
    @MinLength(1)
    @MaxLength(30)
    readonly name: string;

    @ApiProperty({
        example: 'Chaina 30, Chalkida',
        description: 'The address of the real estate',
        required: true,
      })
    @IsString()
    @MinLength(1)
    @MaxLength(30)
    readonly address: string;

    @ApiProperty({
        example: '46e3851c-75e0-4314-8461-783e47347d04',
        description: 'The ID of the seller',
        required: true,
      })
    @IsString()
    @MinLength(1)
    @MaxLength(50)
    readonly sellerId: string;

    @ApiProperty({
        example: '1000',
        description: 'The price of real estate',
        required: true,
      })
    @IsNumberString()
    @MinLength(1)
    @MaxLength(10)
    readonly price: number;
    
}
