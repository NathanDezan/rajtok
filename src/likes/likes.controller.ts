import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LikesService } from './likes.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Post()
  create(@Body() createLikeDto: CreateLikeDto) {
    return this.likesService.create(createLikeDto);
  }

  @Get('searchall')
  findAll(@Body('limitPage') limitPage: number, @Body('search') search: string, @Body('searchValue') searchValue: string) {
    return this.likesService.findAll(limitPage, search, searchValue);
  }

  @Get('searchone')
  findOne(@Body('_id') _id: string) {
    return this.likesService.findOne(_id);
  }

  @Patch()
  update(@Body('_id') _id: string, @Body() updateLikeDto: UpdateLikeDto) {
    return this.likesService.update(_id, updateLikeDto);
  }

  @Delete()
  remove(@Body('_id') _id: string) {
    return this.likesService.remove(_id);
  }
}

