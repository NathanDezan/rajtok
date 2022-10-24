import { Injectable } from '@nestjs/common';
import { CreateLikePlaylistDto } from './dto/create-like-playlist.dto';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { LikePlaylist, LikePlaylistDocument } from './schemas/like-playlist.schema';
import { RecordNotFoundException } from '../exceptions/index';

@Injectable()
export class LikePlaylistService {
  constructor(@InjectModel(LikePlaylist.name) private likePlaylistModel: Model<LikePlaylistDocument>) {}

  async create(createLikePlaylistDto: CreateLikePlaylistDto): Promise<LikePlaylist> {
    const createdLikePlaylist = new this.likePlaylistModel(createLikePlaylistDto);
    return await createdLikePlaylist.save();
  }

  async findAll(limitPage: number, search?: string, searchValue?: string) {
    try{
      const findAllLikePlaylist = await this.likePlaylistModel
        .find()
        .where(search)
        .equals(searchValue)
        .limit(limitPage)
        .exec();

      if(findAllLikePlaylist){
        return findAllLikePlaylist;
      }else{
        return null;
      }
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async findOne(id: string): Promise<LikePlaylist> {
    try{
      const findLikePlaylist = await this.likePlaylistModel.findById(id);
      return findLikePlaylist;
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async remove(id: string) {
    try{
      const findLikePlaylist = await this.likePlaylistModel.deleteOne({ _id: id }).exec();
      return true;
    } catch(e){
      throw new RecordNotFoundException();
    }
  }
}