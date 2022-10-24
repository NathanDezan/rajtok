import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentMusicService } from './comment-music.service';
import { CreateCommentMusicDto } from './dto/create-comment-music.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('comment_music')
@Controller('comment_music')
export class CommentMusicController {
  constructor(private readonly commentAlbumService: CommentMusicService) {}

  @Post()
  create(@Body() createCommentMusicDto: CreateCommentMusicDto) {
    return this.commentAlbumService.create(createCommentMusicDto);
  }

  @Get('searchall')
  findAll(@Body('limitPage') limitPage: number, @Body('search') search: string, @Body('searchValue') searchValue: string) {
    return this.commentAlbumService.findAll(limitPage, search, searchValue);
  }

  @Get('searchone')
  findOne(@Body('_id') _id: string) {
    return this.commentAlbumService.findOne(_id);
  }

  @Delete()
  remove(@Body('_id') _id: string) {
    return this.commentAlbumService.remove(_id);
  }
}

