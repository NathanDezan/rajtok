import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/users.schema';
import { RecordNotFoundException } from '../exceptions/index';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    createdUser._id = uuidv4();
    return await createdUser.save();
  }

  async findAll(limitPage: number, search?: string, searchValue?: string) {
    try{
      const findAllUser = await this.userModel.find().where(search).equals(searchValue).limit(limitPage).exec();

      if(findAllUser){
        return findAllUser;
      }else{
        return null;
      }
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async findOne(id: string): Promise<User> {
    try{
      const findUser = await this.userModel.findById(id);
      return findUser;
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    try{
      const findUser = await this.userModel.findByIdAndUpdate({_id: id,},{$set: updateUserDto,},{new: true,}).exec();
      return findUser;
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async remove(id: string) {
    try{
      const findUser = await this.userModel.deleteOne({ _id: id }).exec();
      return true;
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async findByEmail(email: string, includePassword: boolean = false){
    try{
      const findUser = await this.userModel.find().where('email').equals(email).exec();

      if(includePassword){
        return findUser;
      }
    } catch(e){
      throw new RecordNotFoundException();
    }
  }
}
