import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';

@Controller('albums')
export class AlbumsController {
  constructor(private readonly albumsService: AlbumsService) {}

  @Post()
  create(@Body() createAlbumDto: CreateAlbumDto) {
    return this.albumsService.create(createAlbumDto);
  }

  @Get('/searchall')
  findAll() {
    return this.albumsService.findAll();
  }

  @Get('/searchone')
  findOne(@Body('_id') _id: string) {
    return this.albumsService.findOne(_id);
  }

  @Patch()
  update(@Body('_id') id: string, @Body() updateAlbumDto: UpdateAlbumDto) {
    return this.albumsService.update(id, updateAlbumDto);
  }

  @Delete()
  remove(@Body('_id') _id: string) {
    return this.albumsService.remove(_id);
  }
}
