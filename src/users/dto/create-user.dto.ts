import { IsEmail, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {

    @IsString()
    @ApiProperty({
        example: '9e62dd89-a801-4e1d-b002-0ee87a46ce81',
        description: `ID do usuário.`,
    })
    _id: string;

    @IsString()
    @ApiProperty({
        example: 'Nathan Dezan',
        description: `Nome do usuário.`,
    })
    name: string;

    @IsString()
    @MinLength(3)
    @ApiProperty({
        example: 'dezan123',
        description: `Nome do usuário.`,
    })
    username: string;

    @IsString()
    @ApiProperty({
        example: '60BDaLm0o^p1',
        description: `Senha do usuário.`,
    })
    @MinLength(8)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'password too weak',
    })
    password: string;

    @IsEmail()
    @ApiProperty({
        example: 'nathan@email.com',
        description: `Email do usuário.`,
    })
    email: string;
    
    @IsString()
    @ApiProperty({
        example: 'user',
        description: `Role do usuário.`,
    })
    role: string
}