import { IsString } from 'class-validator';

export class CreatePlaylistDto {
    @IsString()
    _id: string;

    @IsString()
    name: string;

    @IsString()
    date_created: string;

    @IsString()
    energy: string;

    @IsString()
    dancability: string;

    @IsString()
    popularity: string;

    @IsString()
    fk_id_user: string;
}