import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePlaylistDto {
    @IsString()
    @ApiProperty({
        example: '2227eef4-aa6a-4334-862e-23bd9c13149e',
        description: `ID da playlist.`,
    })
    _id: string;

    @IsString()
    @ApiProperty({
        example: 'Playlist do balacobaco',
        description: `Nome da playlist.`,
    })
    name: string;

    @IsString()
    @ApiProperty({
        example: '23/10/2022',
        description: `Data de criação da playlist.`,
    })
    date_created: string;

    @IsString()
    @ApiProperty({
        example: '1.403',
        description: `Energia da playlist (baseado nas músicas adicionadas).`,
    })
    energy: string;

    @IsString()
    @ApiProperty({
        example: '1.301',
        description: `Dançabilidade da playlist (baseado nas músicas adicionadas).`,
    })
    dancability: string;

    @IsString()
    @ApiProperty({
        example: '170',
        description: `Popularidade da playlist (baseado nas músicas adicionadas).`,
    })
    popularity: string;

    @IsString()
    @ApiProperty({
        example: '9e62dd89-a801-4e1d-b002-0ee87a46ce81',
        description: `ID do usuário.`,
    })
    fk_id_user: string;
}