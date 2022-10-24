import { Module } from '@nestjs/common';
import { CommentArtistService } from './comment-artist.service';
import { CommentArtistController } from './comment-artist.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentArtist, CommentArtistSchema } from './schemas/comment-artist.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: CommentArtist.name, schema: CommentArtistSchema }])],
  controllers: [CommentArtistController],
  providers: [CommentArtistService]
})
export class CommentArtistModule {}