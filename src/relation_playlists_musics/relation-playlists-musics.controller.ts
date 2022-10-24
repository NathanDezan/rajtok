import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RelationPlaylistsMusicsService } from './relation-playlists-musics.service';
import { CreateRelationPlaylistsMusicsDto } from './dto/create-relation-playlists-musics.dto';

@Controller('relation_playlists_musics')
export class RelationPlaylistsMusicsController {
  constructor(private readonly relationPlaylistsMusicsService: RelationPlaylistsMusicsService) {}

  @Post()
  create(@Body() createRelationPlaylistsMusicsDto: CreateRelationPlaylistsMusicsDto) {
    return this.relationPlaylistsMusicsService.create(createRelationPlaylistsMusicsDto);
  }

  @Get('searchall')
  findAll(@Body('limitPage') limitPage: number, @Body('search') search: string, @Body('searchValue') searchValue: string) {
    return this.relationPlaylistsMusicsService.findAll(limitPage, search, searchValue);
  }

  @Get('searchone')
  findOne(@Body('_id') _id: string) {
    return this.relationPlaylistsMusicsService.findOne(_id);
  }

  @Delete()
  remove(@Body('_id') _id: string) {
    return this.relationPlaylistsMusicsService.remove(_id);
  }
}

