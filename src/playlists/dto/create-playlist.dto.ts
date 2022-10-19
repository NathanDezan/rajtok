export class CreatePlaylistDto {
    name_playlist: string;
    date_created_playlist: Date;
    likes_playlist: number;
    energy_playlist: number;
    dancability_playlist: number;
    popularity_playlist: number;
    fk_identity_music: string;
    fk_identity_user: string;
}
