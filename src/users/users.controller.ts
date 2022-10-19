import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('/searchall')
  findAll(@Body('limitPage') limitPage: number, @Body('search') search: string, @Body('searchValue') searchValue: string) {
    return this.usersService.findAll(limitPage, search, searchValue);
  }

  @Get('/searchone')
  findOne(@Body('_id') _id: string) {
    return this.usersService.findOne(_id);
  }

  @Patch()
  update(@Body('_id') _id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(_id, updateUserDto);
  }

  @Delete()
  remove(@Body('_id') _id: string) {
    return this.usersService.remove(_id);
  }
}

/*

example input

create()
  {
    
  }
  findAll()
    {
      "limitPage": 2,
      "search": "username",
      "searchValue": "dezan"
    }
    {
      "limitPage": 2,
      "search": "email",
      "searchValue": "nathan@email.com"
    }
*/