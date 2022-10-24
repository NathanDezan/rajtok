import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateLikeAlbumDto {
    @IsString()
    @ApiProperty({
        example: '9e62dd89-a801-4e1d-b002-0ee87a46ce81',
        description: `ID do usuário.`,
    })
    fk_id_user: string;

    @IsString()
    @ApiProperty({
        example: 'cf60580c-0e82-4cc9-977c-1a42fc2fbb76',
        description: `ID do album.`,
    })
    fk_id_album: string;
}
