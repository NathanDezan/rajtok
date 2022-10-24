import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';


export class CreateCommentMusicDto {
    @IsString()
    @ApiProperty({
        example: 'Essa música é incrível.',
        description: `Comentário do usuário sobre a música.`,
    })
    comment: string;

    @IsString()
    @ApiProperty({
        example: '9e62dd89-a801-4e1d-b002-0ee87a46ce81',
        description: `ID do usuário.`,
    })
    fk_id_user: string;

    @IsString()
    @ApiProperty({
        example: '9e3ee99a-32b0-4120-a6f9-28d7facc926c',
        description: `ID da música.`,
    })
    fk_id_music: string;
}
