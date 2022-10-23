import { Injectable } from '@nestjs/common';
import { CreateFollowDto } from './dto/create-follow.dto';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Follow, FollowDocument } from './schemas/followers.schema';
import { RecordNotFoundException } from '../exceptions/index';

@Injectable()
export class FollowersService {
  constructor(@InjectModel(Follow.name) private followModel: Model<FollowDocument>) {}

  async create(createFollowDto: CreateFollowDto): Promise<Follow> {
    const createdFollow = new this.followModel(createFollowDto);
    return await createdFollow.save();
  }

  async findAll(limitPage: number, search?: string, searchValue?: string) {
    try{
      const findAllFollow = await this.followModel
        .find()
        .where(search)
        .equals(searchValue)
        .limit(limitPage)
        .exec();

      if(findAllFollow){
        return findAllFollow;
      }else{
        return null;
      }
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async findOne(id: string): Promise<Follow> {
    try{
      const findFollow = await this.followModel.findById(id);
      return findFollow;
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async remove(id: string) {
    try{
      const findFollow = await this.followModel.deleteOne({ _id: id }).exec();
      return true;
    } catch(e){
      throw new RecordNotFoundException();
    }
  }
}