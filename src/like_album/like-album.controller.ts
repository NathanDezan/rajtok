import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LikeAlbumService } from './like-album.service';
import { CreateLikeAlbumDto } from './dto/create-like-album.dto';

@Controller('like_album')
export class LikeAlbumController {
  constructor(private readonly likeAlbumService: LikeAlbumService) {}

  @Post()
  create(@Body() createLikeAlbumDto: CreateLikeAlbumDto) {
    return this.likeAlbumService.create(createLikeAlbumDto);
  }

  @Get('searchall')
  findAll(@Body('limitPage') limitPage: number, @Body('search') search: string, @Body('searchValue') searchValue: string) {
    return this.likeAlbumService.findAll(limitPage, search, searchValue);
  }

  @Get('searchone')
  findOne(@Body('_id') _id: string) {
    return this.likeAlbumService.findOne(_id);
  }

  @Delete()
  remove(@Body('_id') _id: string) {
    return this.likeAlbumService.remove(_id);
  }
}

