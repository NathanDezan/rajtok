import { Injectable } from '@nestjs/common';
import { CreateLikeArtistDto } from './dto/create-like-artist.dto';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { LikeArtist, LikeArtistDocument } from './schemas/like-artist.schema';
import { RecordNotFoundException } from '../exceptions/index';

@Injectable()
export class LikeArtistService {
  constructor(@InjectModel(LikeArtist.name) private likeArtistModel: Model<LikeArtistDocument>) {}

  async create(createLikeArtistDto: CreateLikeArtistDto): Promise<LikeArtist> {
    const createdLikeArtist = new this.likeArtistModel(createLikeArtistDto);
    return await createdLikeArtist.save();
  }

  async findAll(limitPage: number, search?: string, searchValue?: string) {
    try{
      const findAllLikeArtist = await this.likeArtistModel
        .find()
        .where(search)
        .equals(searchValue)
        .limit(limitPage)
        .exec();

      if(findAllLikeArtist){
        return findAllLikeArtist;
      }else{
        return null;
      }
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async findOne(id: string): Promise<LikeArtist> {
    try{
      const findLikeArtist = await this.likeArtistModel.findById(id);
      return findLikeArtist;
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async remove(id: string) {
    try{
      const findLikeArtist = await this.likeArtistModel.deleteOne({ _id: id }).exec();
      return true;
    } catch(e){
      throw new RecordNotFoundException();
    }
  }
}