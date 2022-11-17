import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PlaylistsService } from './playlists.service';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('playlists')
@Controller('playlists')
export class PlaylistsController {
  constructor(private readonly playlistsService: PlaylistsService) {}

  @Post()
  create(@Body() createPlaylistDto: CreatePlaylistDto) {
    return this.playlistsService.create(createPlaylistDto);
  }

  @Get('searchall')
  findAll(@Query('limitPage') limitPage: number) {
    console.warn(limitPage || 10)
    return this.playlistsService.findAll(10);
  }

  @Get('searchone')
  findOne(@Body('_id') _id: string) {
    return this.playlistsService.findOne(_id);
  }

  @Patch()
  update(@Body('_id') _id: string, @Body() updatePlaylistDto: UpdatePlaylistDto) {
    return this.playlistsService.update(_id, updatePlaylistDto);
  }

  @Delete()
  remove(@Body('_id') _id: string) {
    return this.playlistsService.remove(_id);
  }
}
