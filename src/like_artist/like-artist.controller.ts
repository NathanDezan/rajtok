import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LikeArtistService } from './like-artist.service';
import { CreateLikeArtistDto } from './dto/create-like-artist.dto';

@Controller('like_artist')
export class LikeArtistController {
  constructor(private readonly likeArtistService: LikeArtistService) {}

  @Post()
  create(@Body() createLikeArtistDto: CreateLikeArtistDto) {
    return this.likeArtistService.create(createLikeArtistDto);
  }

  @Get('searchall')
  findAll(@Body('limitPage') limitPage: number, @Body('search') search: string, @Body('searchValue') searchValue: string) {
    return this.likeArtistService.findAll(limitPage, search, searchValue);
  }

  @Get('searchone')
  findOne(@Body('_id') _id: string) {
    return this.likeArtistService.findOne(_id);
  }

  @Delete()
  remove(@Body('_id') _id: string) {
    return this.likeArtistService.remove(_id);
  }
}

