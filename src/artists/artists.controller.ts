import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';

@Controller('artists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Post()
  create(@Body() createArtistDto: CreateArtistDto) {
    return this.artistsService.create(createArtistDto);
  }

  @Get('searchall')
  findAll(@Body('limitPage') limitPage: number, @Body('search') search: string, @Body('searchValue') searchValue: string) {
    return this.artistsService.findAll(limitPage, search, searchValue);
  }

  @Get('searchone')
  findOne(@Body('_id') _id: string) {
    return this.artistsService.findOne(_id);
  }

  @Patch()
  update(@Body('_id') _id: string, @Body() updateArtistDto: UpdateArtistDto) {
    return this.artistsService.update(_id, updateArtistDto);
  }

  @Delete()
  remove(@Body('_id') _id: string) {
    return this.artistsService.remove(_id);
  }
}

/*
example input

  create()
    {
      "name_artist": "nathan_artist",
      "popularity_artist": 30
    }
    
  findAll()
    {
      "limitPage": 2,
      "search": "name_artist",
      "searchValue": "dezan"
    }

    or

    {
      "limitPage": 2,
      "search": "popularity_artist",
      "searchValue": "nathan@email.com"
    }

  findOne()
    {
      "_id": "634ff5f80dcbbad3c7a036e0"
    }
    
  update()
    {
      "_id": "634ff5f80dcbbad3c7a036e0",
      "name_artist": "nathan_artist_2"
    }

  remove()
    {
      "_id": "634ff5f80dcbbad3c7a036e0"
    }
*/