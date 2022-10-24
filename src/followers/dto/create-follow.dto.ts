import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateFollowDto {
    @IsString()
    @ApiProperty({
        example: '9e62dd89-a801-4e1d-b002-0ee87a46ce81',
        description: `ID do usuário.`,
    })
    fk_id_user: string;

    @IsString()
    @ApiProperty({
        example: '68073f81-4eca-41f8-b887-87832fda9175',
        description: `ID do usuário que está sendo seguido.`,
    })
    fk_id_user_follow: string;
}
