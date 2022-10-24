import { Module } from '@nestjs/common';
import { CommentAlbumService } from './comment-album.service';
import { CommentAlbumController } from './comment-album.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentAlbum, CommentAlbumSchema } from './schemas/comment-album.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: CommentAlbum.name, schema: CommentAlbumSchema }])],
  controllers: [CommentAlbumController],
  providers: [CommentAlbumService]
})
export class CommentAlbumModule {}