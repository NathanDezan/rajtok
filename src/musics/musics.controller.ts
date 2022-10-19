import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MusicsService } from './musics.service';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';

@Controller('musics')
export class MusicsController {
  constructor(private readonly musicsService: MusicsService) {}

  @Post()
  create(@Body() createMusicDto: CreateMusicDto) {
    return this.musicsService.create(createMusicDto);
  }

  @Get('searchall')
  findAll() {
    return this.musicsService.findAll();
  }

  @Get('searchone')
  findOne(@Body('_id') _id: string) {
    return this.musicsService.findOne(_id);
  }

  @Patch()
  update(@Body('_id') _id: string, @Body() updateMusicDto: UpdateMusicDto) {
    return this.musicsService.update(_id, updateMusicDto);
  }

  @Delete()
  remove(@Body('_id') _id: string) {
    return this.musicsService.remove(_id);
  }
}
