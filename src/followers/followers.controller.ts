import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FollowersService } from './followers.service';
import { CreateFollowDto } from './dto/create-follow.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('followers')
@Controller('followers')
export class FollowersController {
  constructor(private readonly followersService: FollowersService) {}

  @Post()
  create(@Body() createFollowDto: CreateFollowDto) {
    return this.followersService.create(createFollowDto);
  }

  @Get('searchall')
  findAll(@Body('limitPage') limitPage: number, @Body('search') search: string, @Body('searchValue') searchValue: string) {
    return this.followersService.findAll(limitPage, search, searchValue);
  }

  @Get('searchone')
  findOne(@Body('_id') _id: string) {
    return this.followersService.findOne(_id);
  }

  @Delete()
  remove(@Body('_id') _id: string) {
    return this.followersService.remove(_id);
  }
}

