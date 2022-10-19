import { Injectable } from '@nestjs/common';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Like, LikeDocument } from './schemas/likes.schema';
import { RecordNotFoundException } from '../exceptions/index';

@Injectable()
export class LikesService {
  constructor(@InjectModel(Like.name) private likeModel: Model<LikeDocument>) {}

  async create(createLikeDto: CreateLikeDto): Promise<Like> {
    const createdLike = new this.likeModel(createLikeDto);
    return await createdLike.save();
  }

  async findAll(limitPage: number, search?: string, searchValue?: string) {
    try{
      const findAllLike = await this.likeModel
        .find()
        .where(search)
        .equals(searchValue)
        .limit(limitPage)
        .exec();

      if(findAllLike){
        return findAllLike;
      }else{
        return null;
      }
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async findOne(id: string): Promise<Like> {
    try{
      const findLike = await this.likeModel.findById(id);
      return findLike;
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async update(id: string, updateLikeDto: UpdateLikeDto): Promise<Like> {
    try{
      const findLike = await this.likeModel.findByIdAndUpdate(
          {_id: id,},
          {$set: updateLikeDto,},
          {new: true,}
        ).exec();
      return findLike;
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async remove(id: string) {
    try{
      const findLike = await this.likeModel.deleteOne({ _id: id }).exec();
      return true;
    } catch(e){
      throw new RecordNotFoundException();
    }
  }
}