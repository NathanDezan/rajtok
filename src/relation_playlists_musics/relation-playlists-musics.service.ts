import { Injectable } from '@nestjs/common';
import { CreateRelationPlaylistsMusicsDto } from './dto/create-relation-playlists-musics.dto';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { RelationPlaylistsMusics, RelationPlaylistsMusicsDocument } from './schemas/relation-playlists-musics.schema';
import { RecordNotFoundException } from '../exceptions/index';

@Injectable()
export class RelationPlaylistsMusicsService {
  constructor(@InjectModel(RelationPlaylistsMusics.name) private relationPlaylistsMusicsModel: Model<RelationPlaylistsMusicsDocument>) {}

  async create(createRelationPlaylistsMusicsDto: CreateRelationPlaylistsMusicsDto): Promise<RelationPlaylistsMusics> {
    const createdRelationPlaylistsMusics = new this.relationPlaylistsMusicsModel(createRelationPlaylistsMusicsDto);
    return await createdRelationPlaylistsMusics.save();
  }

  async findAll(limitPage: number, search?: string, searchValue?: string) {
    try{
      const findAllRelationPlaylistsMusics = await this.relationPlaylistsMusicsModel
        .find()
        .where(search)
        .equals(searchValue)
        .limit(limitPage)
        .exec();

      if(findAllRelationPlaylistsMusics){
        return findAllRelationPlaylistsMusics;
      }else{
        return null;
      }
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async findOne(id: string): Promise<RelationPlaylistsMusics> {
    try{
      const findRelationPlaylistsMusics = await this.relationPlaylistsMusicsModel.findById(id);
      return findRelationPlaylistsMusics;
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async remove(id: string) {
    try{
      const findRelationPlaylistsMusics = await this.relationPlaylistsMusicsModel.deleteOne({ _id: id }).exec();
      return true;
    } catch(e){
      throw new RecordNotFoundException();
    }
  }
}