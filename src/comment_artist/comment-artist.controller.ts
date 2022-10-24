import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentArtistService } from './comment-artist.service';
import { CreateCommentArtistDto } from './dto/create-comment-artist.dto';

@Controller('comment_artist')
export class CommentArtistController {
  constructor(private readonly commentAlbumService: CommentArtistService) {}

  @Post()
  create(@Body() createCommentArtistDto: CreateCommentArtistDto) {
    return this.commentAlbumService.create(createCommentArtistDto);
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

