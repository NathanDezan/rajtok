import { Injectable } from '@nestjs/common';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Music, MusicDocument } from './schemas/musics.schema';
import { RecordNotFoundException } from '../exceptions/index';

@Injectable()
export class MusicsService {
  constructor(@InjectModel(Music.name) private musicModel: Model<MusicDocument>) {}

  async create(createMusicDto: CreateMusicDto): Promise<Music> {
    const createdMusic = new this.musicModel(createMusicDto);
    return createdMusic.save();
  }

  async findAll(limitPage: number, search?: string, searchValue?: string) {
    try{
      const findAllMusic = await this.musicModel
        .find()
        .where(search)
        .equals(searchValue)
        .limit(limitPage)
        .exec();

      if(findAllMusic){
        return findAllMusic;
      }else{
        return null;
      }
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async findOne(id: string): Promise<Music> {
    try{
      const findMusic= await this.musicModel.findById(id);
      return findMusic;
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async update(id: string, updateMusicDto: UpdateMusicDto): Promise<Music> {
    try{
      const findMusic = await this.musicModel.findByIdAndUpdate(
          {_id: id,},
          {$set: updateMusicDto,}
          ,{new: true,}
        ).exec();
      return findMusic;
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async remove(id: string) {
    try{
      const findMusic = await this.musicModel.deleteOne({ _id: id }).exec();
      return true;
    } catch(e){
      throw new RecordNotFoundException();
    }
  }
}
