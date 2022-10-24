import { Module } from '@nestjs/common';
import { LikePlaylistService } from './like-playlist.service';
import { LikePlaylistController } from './like-playlist.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LikePlaylist, LikePlaylistSchema } from './schemas/like-playlist.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: LikePlaylist.name, schema: LikePlaylistSchema }])],
  controllers: [LikePlaylistController],
  providers: [LikePlaylistService]
})
export class LikePlaylistModule {}