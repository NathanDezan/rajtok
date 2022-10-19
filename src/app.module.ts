import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ArtistsModule } from './artists/artists.module';
import { AlbumsModule } from './albums/albums.module';
import { ConfigModule } from '@nestjs/config';
import { PlaylistsModule } from './playlists/playlists.module';
import { MusicsModule } from './musics/musics.module';
import { LikesModule } from './likes/likes.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    MongooseModule.forRoot('mongodb+srv://dezan:8sF4HNOBr5ixyp5N@cluster0.fpik1s7.mongodb.net/?retryWrites=true&w=majority'), 
    UsersModule, ArtistsModule, AlbumsModule, PlaylistsModule, MusicsModule, LikesModule],
})
export class AppModule {}