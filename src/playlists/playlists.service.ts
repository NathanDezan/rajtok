import { Injectable } from '@nestjs/common';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Playlist, PlaylistDocument } from './schemas/playlists.schema';

@Injectable()
export class PlaylistsService {
  constructor(@InjectModel(Playlist.name) private playlistModel: Model<PlaylistDocument>) {}

  async create(createPlaylistDto: CreatePlaylistDto): Promise<Playlist> {
    const createdPlaylist = new this.playlistModel(createPlaylistDto);
    return createdPlaylist.save();
  }
  findAll() {
    return this.playlistModel.find().exec();
  }

  findOne(_id: string) {
    return this.playlistModel.findById(_id);
  }

  update(id: string, updateUserDto: UpdatePlaylistDto) {
    return this.playlistModel.findByIdAndUpdate(
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
    return this.playlistModel.deleteOne({ _id: id }).exec();
  }
}
