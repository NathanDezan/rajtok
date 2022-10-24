import { IsString } from 'class-validator';


export class CreateMusicDto {
    @IsString()
    _id: string;

    @IsString()
    name: string;

    @IsString()
    popularity: number;

    @IsString()
    dancability: number;

    @IsString()
    energy: number;

    @IsString()
    duration: number;

    @IsString()
    fk_id_album: string;
}
