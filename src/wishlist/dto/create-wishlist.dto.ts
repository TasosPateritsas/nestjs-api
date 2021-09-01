import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateWishlistDto {

    @ApiProperty({
        example: '46e3851c-75e0-4314-8461-783e47347d04',
        description: 'The ID of the user',
        required: true,
    })
    @IsString()
    @MinLength(4)
    @MaxLength(50)
    readonly userId: string;

    @ApiProperty({
        example: 'be54f8e1-178b-45c8-ab0e-cc502c48c761',
        description: 'The ID of the real estate',
        required: true,
    })
    @IsString()
    @MinLength(4)
    @MaxLength(50)
    readonly realEstateId: string;


}
