import { Injectable } from '@nestjs/common';
import { CreateCommentAlbumDto } from './dto/create-comment-album.dto';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CommentAlbum, CommentAlbumDocument } from './schemas/comment-album.schema';
import { RecordNotFoundException } from '../exceptions/index';

@Injectable()
export class CommentAlbumService {
  constructor(@InjectModel(CommentAlbum.name) private commentAlbumModel: Model<CommentAlbumDocument>) {}

  async create(createCommentAlbumDto: CreateCommentAlbumDto): Promise<CommentAlbum> {
    const createdCommentAlbum = new this.commentAlbumModel(createCommentAlbumDto);
    return await createdCommentAlbum.save();
  }

  async findAll(limitPage: number, search?: string, searchValue?: string) {
    try{
      const findAllCommentAlbum = await this.commentAlbumModel
        .find()
        .where(search)
        .equals(searchValue)
        .limit(limitPage)
        .exec();

      if(findAllCommentAlbum){
        return findAllCommentAlbum;
      }else{
        return null;
      }
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async findOne(id: string): Promise<CommentAlbum> {
    try{
      const findCommentAlbum = await this.commentAlbumModel.findById(id);
      return findCommentAlbum;
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async remove(id: string) {
    try{
      const findCommentAlbum = await this.commentAlbumModel.deleteOne({ _id: id }).exec();
      return true;
    } catch(e){
      throw new RecordNotFoundException();
    }
  }
}