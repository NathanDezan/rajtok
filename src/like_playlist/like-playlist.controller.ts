import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LikePlaylistService } from './like-playlist.service';
import { CreateLikePlaylistDto } from './dto/create-like-playlist.dto';

@Controller('like_playlist')
export class LikePlaylistController {
  constructor(private readonly likePlaylistService: LikePlaylistService) {}

  @Post()
  create(@Body() createLikePlaylistDto: CreateLikePlaylistDto) {
    return this.likePlaylistService.create(createLikePlaylistDto);
  }

  @Get('searchall')
  findAll(@Body('limitPage') limitPage: number, @Body('search') search: string, @Body('searchValue') searchValue: string) {
    return this.likePlaylistService.findAll(limitPage, search, searchValue);
  }

  @Get('searchone')
  findOne(@Body('_id') _id: string) {
    return this.likePlaylistService.findOne(_id);
  }

  @Delete()
  remove(@Body('_id') _id: string) {
    return this.likePlaylistService.remove(_id);
  }
}

