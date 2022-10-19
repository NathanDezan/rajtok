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
  findAll(@Body('limitPage') limitPage: number, @Body('search') search: string, @Body('searchValue') searchValue: string) {
    return this.albumsService.findAll(limitPage, search, searchValue);
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

/*
example input

  create()
    {
      "name_album": "nathan_album_1",
      "fk_identity_artist": "fk_identity_nathan"
    }
    
  findAll()
    {
      "limitPage": 2,
      "search": "name_album",
      "searchValue": "dezan_album"
    }

    or

    (ainda nao implementado)
    {
      "limitPage": 2,
      "search": "name_artist",
      "searchValue": "nathan dezan"
    }

  findOne()
    {
      "_id": "634ff5f80dcbbad3c7a036e0"
    }
    
  update()
    {
      "_id": "634ffd95276d4ef2494a5838",
      "name_album": "nathan_album_2"
    }

  remove()
    {
      "_id": "634ff5f80dcbbad3c7a036e0"
    }
*/