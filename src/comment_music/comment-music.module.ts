import { Module } from '@nestjs/common';
import { CommentMusicService } from './comment-music.service';
import { CommentMusicController } from './comment-music.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentMusic, CommentMusicSchema } from './schemas/comment-music.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: CommentMusic.name, schema: CommentMusicSchema }])],
  controllers: [CommentMusicController],
  providers: [CommentMusicService]
})
export class CommentMusicModule {}