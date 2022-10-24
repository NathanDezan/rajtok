import { Module } from '@nestjs/common';
import { LikeArtistService } from './like-artist.service';
import { LikeArtistController } from './like-artist.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LikeArtist, LikeArtistSchema } from './schemas/like-artist.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: LikeArtist.name, schema: LikeArtistSchema }])],
  controllers: [LikeArtistController],
  providers: [LikeArtistService]
})
export class LikeArtistModule {}