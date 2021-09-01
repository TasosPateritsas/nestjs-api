import { IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    
    @ApiProperty({
        example: 'John',
        description: 'The first name of the user',
        required: true,
      })
    @IsString()
    @MinLength(1)
    @MaxLength(50)
    readonly firstName: string;

    @ApiProperty({
        example: 'Doe',
        description: 'The last name of the user',
        required: true,
      })
    @IsString()
    @MinLength(1)
    @MaxLength(50)
    readonly lastName: string;

    @ApiProperty({
        example: 'email@test.com',
        description: 'The email of the user',
        required: true,
      })
    @IsString()
    @MinLength(4)
    @MaxLength(50)
    readonly email: string;

    @ApiProperty({
        example: 'easyPass!23',
        description:
          'Password contains at least 8 characters long including uppercase and special characters',
        required: true,
      })
      @MinLength(8, { message: 'Password is too short' })
      @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'Password is too weak',
      })
    @IsString()
    readonly password: string;
}
