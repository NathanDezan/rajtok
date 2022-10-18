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
  findAll() {
    return this.artistsService.findAll();
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
