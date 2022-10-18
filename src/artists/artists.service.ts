import { Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Artist, ArtistDocument } from './schemas/artists.schema';

@Injectable()
export class ArtistsService {
  constructor(@InjectModel(Artist.name) private artistModel: Model<ArtistDocument>) {}

  async create(createArtistDto: CreateArtistDto): Promise<Artist> {
    const createdArtist = new this.artistModel(createArtistDto);
    return createdArtist.save();
  }
  findAll() {
    return this.artistModel.find().exec();
  }

  findOne(_id: string) {
    return this.artistModel.findById(_id);
  }

  update(id: string, updateUserDto: UpdateArtistDto) {
    return this.artistModel.findByIdAndUpdate(
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
    return this.artistModel.deleteOne({ _id: id }).exec();
  }
}
