import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMusicDto {
    @IsString()
    @ApiProperty({
        example: '9e3ee99a-32b0-4120-a6f9-28d7facc926c',
        description: `ID da música.`,
    })
    _id: string;

    @IsString()
    @ApiProperty({
        example: 'Blinding Lights',
        description: `Nome da música.`,
    })
    name: string;

    @IsString()
    @ApiProperty({
        example: '90',
        description: `Popularidade da música.`,
    })
    popularity: number;

    @IsString()
    @ApiProperty({
        example: '0.514',
        description: `Dançabilidade da música.`,
    })
    dancability: number;

    @IsString()
    @ApiProperty({
        example: '0.73',
        description: `Energia da música.`,
    })
    energy: number;

    @IsString()
    @ApiProperty({
        example: '171',
        description: `Duração da música em segundos.`,
    })
    duration: number;

    @IsString()
    @ApiProperty({
        example: 'cf60580c-0e82-4cc9-977c-1a42fc2fbb76',
        description: `ID do album.`,
    })
    fk_id_album: string;
}
