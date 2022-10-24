import { Module } from '@nestjs/common';
import { LikeAlbumService } from './like-album.service';
import { LikeAlbumController } from './like-album.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LikeAlbum, LikeAlbumSchema } from './schemas/like-album.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: LikeAlbum.name, schema: LikeAlbumSchema }])],
  controllers: [LikeAlbumController],
  providers: [LikeAlbumService]
})
export class LikeAlbumModule {}