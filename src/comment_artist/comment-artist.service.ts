import { Injectable } from '@nestjs/common';
import { CreateCommentArtistDto } from './dto/create-comment-artist.dto';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CommentArtist, CommentArtistDocument } from './schemas/comment-artist.schema';
import { RecordNotFoundException } from '../exceptions/index';

@Injectable()
export class CommentArtistService {
  constructor(@InjectModel(CommentArtist.name) private commentAlbumModel: Model<CommentArtistDocument>) {}

  async create(createCommentArtistDto: CreateCommentArtistDto): Promise<CommentArtist> {
    const createdCommentArtist = new this.commentAlbumModel(createCommentArtistDto);
    return await createdCommentArtist.save();
  }

  async findAll(limitPage: number, search?: string, searchValue?: string) {
    try{
      const findAllCommentArtist = await this.commentAlbumModel
        .find()
        .where(search)
        .equals(searchValue)
        .limit(limitPage)
        .exec();

      if(findAllCommentArtist){
        return findAllCommentArtist;
      }else{
        return null;
      }
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async findOne(id: string): Promise<CommentArtist> {
    try{
      const findCommentArtist = await this.commentAlbumModel.findById(id);
      return findCommentArtist;
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async remove(id: string) {
    try{
      const findCommentArtist = await this.commentAlbumModel.deleteOne({ _id: id }).exec();
      return true;
    } catch(e){
      throw new RecordNotFoundException();
    }
  }
}