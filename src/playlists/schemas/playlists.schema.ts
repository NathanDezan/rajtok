import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PlaylistDocument = Playlist & Document;

@Schema({versionKey: false, _id: true})
export class Playlist {
  @Prop({ required: true })
  name_playlist: string;

  @Prop({ required: true })
  date_created_playlist: Date;

  @Prop({ required: true })
  likes_playlist: number;

  @Prop({ required: true })
  energy_playlist: number;

  @Prop({ required: true })
  dancability_playlist: number;

  @Prop({ required: true })
  popularity_playlist: number;
}

export const PlaylistSchema = SchemaFactory.createForClass(Playlist);
