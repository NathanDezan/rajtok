import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateLikePlaylistDto {
    @IsString()
    @ApiProperty({
        example: '9e62dd89-a801-4e1d-b002-0ee87a46ce81',
        description: `ID do usuário.`,
    })
    fk_id_user: string;

    @IsString()
    @ApiProperty({
        example: '34c25603-adff-4144-870b-5d864757bc06',
        description: `ID da playlist.`,
    })
    fk_id_playlist: string;
}
