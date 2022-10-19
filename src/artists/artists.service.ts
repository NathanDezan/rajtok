import { Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Artist, ArtistDocument } from './schemas/artists.schema';
import { RecordNotFoundException } from '../exceptions/index';

@Injectable()
export class ArtistsService {
  constructor(@InjectModel(Artist.name) private artistModel: Model<ArtistDocument>) {}

  async create(createArtistDto: CreateArtistDto): Promise<Artist> {
    const createdArtist = new this.artistModel(createArtistDto);
    return await createdArtist.save();
  }

  async findAll(limitPage: number, search?: string, searchValue?: string) {
    try{
      const findAllArtist = await this.artistModel.find().where(search).equals(searchValue).limit(limitPage).exec();

      if(findAllArtist){
        return findAllArtist;
      }else{
        return null;
      }
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async findOne(id: string): Promise<Artist> {
    try{
      const findArtist = await this.artistModel.findById(id);
      return findArtist;
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async update(id: string, updateUserDto: UpdateArtistDto): Promise<Artist> {
    try{
      const findArtist = await this.artistModel.findByIdAndUpdate({_id: id,},{$set: updateUserDto,},{new: true,}).exec();
      return findArtist;
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async remove(id: string) {
    try{
      const findArtist = await this.artistModel.deleteOne({ _id: id }).exec();
      return true;
    } catch(e){
      throw new RecordNotFoundException();
    }
  }
}
