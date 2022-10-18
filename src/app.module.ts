import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ArtistsModule } from './artists/artists.module';
import { AlbumsModule } from './albums/albums.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://dezan:<>@cluster0.fpik1s7.mongodb.net/?retryWrites=true&w=majority'), UsersModule, ArtistsModule, AlbumsModule],
})
export class AppModule {}