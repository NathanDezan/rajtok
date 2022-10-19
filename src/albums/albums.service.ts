import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Album, AlbumDocument } from './schemas/albums.schema';
import { RecordNotFoundException } from '../exceptions/index';

@Injectable()
export class AlbumsService {
  constructor(@InjectModel(Album.name) private albumModel: Model<AlbumDocument>) {}

  async create(createAlbumDto: CreateAlbumDto): Promise<Album> {
    const createdAlbum = new this.albumModel(createAlbumDto);
    return await createdAlbum.save();
  }

  async findAll(limitPage: number, search?: string, searchValue?: string) {
    try{
      if(search == 'name_artist'){
        /*implementação futura*/        
      }else{
        const findAllAlbum = await this.albumModel
          .find()
          .where(search)
          .equals(searchValue)
          .limit(limitPage)
          .exec();

        if(findAllAlbum){
          return findAllAlbum;
        }else{
          return null;
        }
      }
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async findOne(id: string): Promise<Album> {
    try{
      const findAlbum = await this.albumModel.findById(id);
      return findAlbum;
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async update(id: string, updateUserDto: UpdateAlbumDto): Promise<Album> {
    try{
      const findAlbum = await this.albumModel.findByIdAndUpdate({_id: id,},{$set: updateUserDto,},{new: true,}).exec();
      return findAlbum;
    } catch(e){
      throw new RecordNotFoundException();
    }
  }

  async remove(id: string) {
    try{
      const findAlbum = await this.albumModel.deleteOne({ _id: id }).exec();
      return true;
    } catch(e){
      throw new RecordNotFoundException();
    }
  }
}
