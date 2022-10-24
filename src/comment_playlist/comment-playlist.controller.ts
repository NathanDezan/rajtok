import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentPlaylistService } from './comment-playlist.service';
import { CreateCommentPlaylistDto } from './dto/create-comment-playlist.dto';

@Controller('comment_playlist')
export class CommentPlaylistController {
  constructor(private readonly commentAlbumService: CommentPlaylistService) {}

  @Post()
  create(@Body() createCommentPlaylistDto: CreateCommentPlaylistDto) {
    return this.commentAlbumService.create(createCommentPlaylistDto);
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

