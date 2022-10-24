import { Injectable } from '@nestjs/common';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Playlist, PlaylistDocument } from './schemas/playlists.schema';
import { RecordNotFoundException } from '../exceptions/index';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PlaylistsService {
  constructor(@InjectModel(Playlist.name) private playlistModel: Model<PlaylistDocument>) {}

  async create(createPlaylistDto: CreatePlaylistDto): Promise<Playlist> {
    const createdPlaylist = new this.playlistModel(createPlaylistDto);
    createdPlaylist._id = uuidv4();
    return createdPlaylist.save();
  }

  async findAll(limitPage: number, search?: string, searchValue?: string) {
    try{
      const findAllPlaylist = await this.playlistModel
        .find()
        .where(search)
        .equals(searchValue)
        .limit(limitPage)
        .exec();

      if(findAllPlaylist){
        return findAllPlaylist;
      }else{
        return null;
      }
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async findOne(id: string): Promise<Playlist> {
    try{
      const findPlaylist= await this.playlistModel.findById(id);
      return findPlaylist;
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async update(id: string, updatePlaylistDto: UpdatePlaylistDto): Promise<Playlist> {
    try{
      const findPlaylist = await this.playlistModel.findByIdAndUpdate(
        {_id: id,},
        {$set: updatePlaylistDto,}
        ,{new: true,}
      ).exec();

      return findPlaylist;
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async remove(id: string) {
    try{
      const findPlaylist= await this.playlistModel.deleteOne({ _id: id }).exec();
      return true;
    } catch(e){
      throw new RecordNotFoundException();
    }
  }
}
