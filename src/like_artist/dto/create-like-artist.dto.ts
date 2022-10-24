import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateLikeArtistDto {
    @IsString()
    @ApiProperty({
        example: '9e62dd89-a801-4e1d-b002-0ee87a46ce81',
        description: `ID do usuário.`,
    })
    fk_id_user: string;

    @IsString()
    @ApiProperty({
        example: 'e37dc23b-06bd-4ac3-952c-5261b5ab4986',
        description: `ID do artista.`,
    })
    fk_id_artist: string;
}
