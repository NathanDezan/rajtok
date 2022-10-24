import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateAlbumDto {
    @IsString()
    @ApiProperty({
        example: 'After Hours',
        description: `Nome do album.`,
    })
    name_album: string;

    @IsString()
    @ApiProperty({
        example: 'e37dc23b-06bd-4ac3-952c-5261b5ab4986',
        description: `Artista responsável pelo album.`,
    })
    fk_identity_artist: string;
}
