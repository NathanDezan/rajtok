import { Injectable } from '@nestjs/common';
import { CreateLikeMusicDto } from './dto/create-like-music.dto';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { LikeMusic, LikeMusicDocument } from './schemas/like-music.schema';
import { RecordNotFoundException } from '../exceptions/index';

@Injectable()
export class LikeMusicService {
  constructor(@InjectModel(LikeMusic.name) private likeMusicModel: Model<LikeMusicDocument>) {}

  async create(createLikeMusicDto: CreateLikeMusicDto): Promise<LikeMusic> {
    const createdLikeMusic = new this.likeMusicModel(createLikeMusicDto);
    return await createdLikeMusic.save();
  }

  async findAll(limitPage: number, search?: string, searchValue?: string) {
    try{
      const findAllLikeMusic = await this.likeMusicModel
        .find()
        .where(search)
        .equals(searchValue)
        .limit(limitPage)
        .exec();

      if(findAllLikeMusic){
        return findAllLikeMusic;
      }else{
        return null;
      }
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async findOne(id: string): Promise<LikeMusic> {
    try{
      const findLikeMusic = await this.likeMusicModel.findById(id);
      return findLikeMusic;
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async remove(id: string) {
    try{
      const findLikeMusic = await this.likeMusicModel.deleteOne({ _id: id }).exec();
      return true;
    } catch(e){
      throw new RecordNotFoundException();
    }
  }
}