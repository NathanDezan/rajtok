import { Injectable } from '@nestjs/common';
import { CreateCommentMusicDto } from './dto/create-comment-music.dto';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CommentMusic, CommentMusicDocument } from './schemas/comment-music.schema';
import { RecordNotFoundException } from '../exceptions/index';

@Injectable()
export class CommentMusicService {
  constructor(@InjectModel(CommentMusic.name) private commentAlbumModel: Model<CommentMusicDocument>) {}

  async create(createCommentMusicDto: CreateCommentMusicDto): Promise<CommentMusic> {
    const createdCommentMusic = new this.commentAlbumModel(createCommentMusicDto);
    return await createdCommentMusic.save();
  }

  async findAll(limitPage: number, search?: string, searchValue?: string) {
    try{
      const findAllCommentMusic = await this.commentAlbumModel
        .find()
        .where(search)
        .equals(searchValue)
        .limit(limitPage)
        .exec();

      if(findAllCommentMusic){
        return findAllCommentMusic;
      }else{
        return null;
      }
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async findOne(id: string): Promise<CommentMusic> {
    try{
      const findCommentMusic = await this.commentAlbumModel.findById(id);
      return findCommentMusic;
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async remove(id: string) {
    try{
      const findCommentMusic = await this.commentAlbumModel.deleteOne({ _id: id }).exec();
      return true;
    } catch(e){
      throw new RecordNotFoundException();
    }
  }
}