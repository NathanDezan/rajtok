import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateRelationPlaylistsMusicsDto {
    @IsString()
    @ApiProperty({
        example: '2227eef4-aa6a-4334-862e-23bd9c13149e',
        description: `ID da playlist.`,
    })

    fk_id_playlist: string;
    @IsString()
    @ApiProperty({
        example: '9e3ee99a-32b0-4120-a6f9-28d7facc926c',
        description: `ID da música.`,
    })
    fk_id_music: string;
}
