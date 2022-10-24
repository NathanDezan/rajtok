import { Injectable } from '@nestjs/common';
import { CreateCommentPlaylistDto } from './dto/create-comment-playlist.dto';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CommentPlaylist, CommentPlaylistDocument } from './schemas/comment-playlist.schema';
import { RecordNotFoundException } from '../exceptions/index';

@Injectable()
export class CommentPlaylistService {
  constructor(@InjectModel(CommentPlaylist.name) private commentAlbumModel: Model<CommentPlaylistDocument>) {}

  async create(createCommentPlaylistDto: CreateCommentPlaylistDto): Promise<CommentPlaylist> {
    const createdCommentPlaylist = new this.commentAlbumModel(createCommentPlaylistDto);
    return await createdCommentPlaylist.save();
  }

  async findAll(limitPage: number, search?: string, searchValue?: string) {
    try{
      const findAllCommentPlaylist = await this.commentAlbumModel
        .find()
        .where(search)
        .equals(searchValue)
        .limit(limitPage)
        .exec();

      if(findAllCommentPlaylist){
        return findAllCommentPlaylist;
      }else{
        return null;
      }
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async findOne(id: string): Promise<CommentPlaylist> {
    try{
      const findCommentPlaylist = await this.commentAlbumModel.findById(id);
      return findCommentPlaylist;
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async remove(id: string) {
    try{
      const findCommentPlaylist = await this.commentAlbumModel.deleteOne({ _id: id }).exec();
      return true;
    } catch(e){
      throw new RecordNotFoundException();
    }
  }
}