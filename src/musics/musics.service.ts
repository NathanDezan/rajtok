import { Injectable } from '@nestjs/common';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Music, MusicDocument } from './schemas/musics.schema';

@Injectable()
export class MusicsService {
  constructor(@InjectModel(Music.name) private musicModel: Model<MusicDocument>) {}

  async create(createMusicDto: CreateMusicDto): Promise<Music> {
    const createdMusic = new this.musicModel(createMusicDto);
    return createdMusic.save();
  }
  findAll() {
    return this.musicModel.find().exec();
  }

  findOne(_id: string) {
    return this.musicModel.findById(_id);
  }

  update(id: string, updateUserDto: UpdateMusicDto) {
    return this.musicModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateUserDto,
      },
      {
        new: true,
      },
      ).exec();
  }

  remove(id: string) {
    return this.musicModel.deleteOne({ _id: id }).exec();
  }
}
