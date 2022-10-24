import { Injectable } from '@nestjs/common';
import { CreateLikeAlbumDto } from './dto/create-like-album.dto';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { LikeAlbum, LikeAlbumDocument } from './schemas/like-album.schema';
import { RecordNotFoundException } from '../exceptions/index';

@Injectable()
export class LikeAlbumService {
  constructor(@InjectModel(LikeAlbum.name) private likeAlbumModel: Model<LikeAlbumDocument>) {}

  async create(createLikeAlbumDto: CreateLikeAlbumDto): Promise<LikeAlbum> {
    const createdLikeAlbum = new this.likeAlbumModel(createLikeAlbumDto);
    return await createdLikeAlbum.save();
  }

  async findAll(limitPage: number, search?: string, searchValue?: string) {
    try{
      const findAllLikeAlbum = await this.likeAlbumModel
        .find()
        .where(search)
        .equals(searchValue)
        .limit(limitPage)
        .exec();

      if(findAllLikeAlbum){
        return findAllLikeAlbum;
      }else{
        return null;
      }
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async findOne(id: string): Promise<LikeAlbum> {
    try{
      const findLikeAlbum = await this.likeAlbumModel.findById(id);
      return findLikeAlbum;
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async remove(id: string) {
    try{
      const findLikeAlbum = await this.likeAlbumModel.deleteOne({ _id: id }).exec();
      return true;
    } catch(e){
      throw new RecordNotFoundException();
    }
  }
}