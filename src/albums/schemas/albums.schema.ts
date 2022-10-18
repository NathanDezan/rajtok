import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AlbumDocument = Album & Document;

@Schema({versionKey: false, _id: true})
export class Album {
  @Prop({ required: true })
  name_album: string;

  @Prop({ required: true })
  fk_identity_artist: string;
}

export const AlbumSchema = SchemaFactory.createForClass(Album);