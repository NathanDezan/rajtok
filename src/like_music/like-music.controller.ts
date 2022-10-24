import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LikeMusicService } from './like-music.service';
import { CreateLikeMusicDto } from './dto/create-like-music.dto';

@Controller('like_music')
export class LikeMusicController {
  constructor(private readonly likeMusicService: LikeMusicService) {}

  @Post()
  create(@Body() createLikeMusicDto: CreateLikeMusicDto) {
    return this.likeMusicService.create(createLikeMusicDto);
  }

  @Get('searchall')
  findAll(@Body('limitPage') limitPage: number, @Body('search') search: string, @Body('searchValue') searchValue: string) {
    return this.likeMusicService.findAll(limitPage, search, searchValue);
  }

  @Get('searchone')
  findOne(@Body('_id') _id: string) {
    return this.likeMusicService.findOne(_id);
  }

  @Delete()
  remove(@Body('_id') _id: string) {
    return this.likeMusicService.remove(_id);
  }
}

