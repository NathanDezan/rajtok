import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateArtistDto {
    @IsString()
    @ApiProperty({
        example: 'The Weeknd',
        description: `Nome do artista.`,
    })
    name_artist: string;

    @IsString()
    @ApiProperty({
        example: '93',
        description: `Popularidade do artista.`,
    })
    popularity_artist: number;
}