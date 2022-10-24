import { Module } from '@nestjs/common';
import { CommentPlaylistService } from './comment-playlist.service';
import { CommentPlaylistController } from './comment-playlist.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentPlaylist, CommentPlaylistSchema } from './schemas/comment-playlist.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: CommentPlaylist.name, schema: CommentPlaylistSchema }])],
  controllers: [CommentPlaylistController],
  providers: [CommentPlaylistService]
})
export class CommentPlaylistModule {}