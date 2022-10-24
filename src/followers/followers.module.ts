import { Module } from '@nestjs/common';
import { FollowersService } from './followers.service';
import { FollowersController } from './followers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Follow, FollowSchema } from './schemas/followers.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Follow.name, schema: FollowSchema }])],
  controllers: [FollowersController],
  providers: [FollowersService]
})
export class FollowersModule {}