import { Module } from '@nestjs/common';
import { RelationPlaylistsMusicsService } from './relation-playlists-musics.service';
import { RelationPlaylistsMusicsController } from './relation-playlists-musics.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RelationPlaylistsMusics, RelationPlaylistsMusicsSchema } from './schemas/relation-playlists-musics.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: RelationPlaylistsMusics.name, schema: RelationPlaylistsMusicsSchema }])],
  controllers: [RelationPlaylistsMusicsController],
  providers: [RelationPlaylistsMusicsService]
})
export class RelationPlaylistsMusicsModule {}