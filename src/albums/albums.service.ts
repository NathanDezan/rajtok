import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Album, AlbumDocument } from './schemas/albums.schema';

@Injectable()
export class AlbumsService {
  constructor(@InjectModel(Album.name) private albumModel: Model<AlbumDocument>) {}

  create(createAlbumDto: CreateAlbumDto) {
    const createdAlbum = new this.albumModel(createAlbumDto);
    return createdAlbum.save();
  }

  findAll() {
    return this.albumModel.find().exec();
  }

  findOne(id: string) {
    return this.albumModel.findById(id);
  }

  update(id: string, updateAlbumDto: UpdateAlbumDto) {
    return this.albumModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateAlbumDto,
      },
      {
        new: true,
      },
    ).exec();
  }

  remove(id: string) {
    return this.albumModel.deleteOne({ _id: id}).exec();
  }
}
