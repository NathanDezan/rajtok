import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentAlbumService } from './comment-album.service';
import { CreateCommentAlbumDto } from './dto/create-comment-album.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('comment_album')
@Controller('comment_album')
export class CommentAlbumController {
  constructor(private readonly commentAlbumService: CommentAlbumService) {}

  @Post()
  create(@Body() createCommentAlbumDto: CreateCommentAlbumDto) {
    return this.commentAlbumService.create(createCommentAlbumDto);
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

