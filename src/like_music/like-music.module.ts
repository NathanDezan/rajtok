import { Module } from '@nestjs/common';
import { LikeMusicService } from './like-music.service';
import { LikeMusicController } from './like-music.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LikeMusic, LikeMusicSchema } from './schemas/like-music.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: LikeMusic.name, schema: LikeMusicSchema }])],
  controllers: [LikeMusicController],
  providers: [LikeMusicService]
})
export class LikeMusicModule {}