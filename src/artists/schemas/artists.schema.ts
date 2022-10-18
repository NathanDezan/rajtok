import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ArtistDocument = Artist & Document;

@Schema({versionKey: false, _id: true})
export class Artist {
  @Prop({ required: true })
  name_artist: string;

  @Prop({ required: true })
  popularity_artist: number;
}

export const ArtistSchema = SchemaFactory.createForClass(Artist);