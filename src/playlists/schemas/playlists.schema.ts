import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PlaylistDocument = Playlist & Document;

@Schema({versionKey: false, _id: true})
export class Playlist {
  @Prop({ required: true })
  name_playlist: string;

  @Prop({ required: true })
  date_created_playlist: string;

  @Prop({ required: true })
  likes_playlist: string;

  @Prop({ required: true })
  energy_playlist: string;

  @Prop({ required: true })
  dancability_playlist: string;

  @Prop({ required: true })
  popularity_playlist: string;
}

export const PlaylistSchema = SchemaFactory.createForClass(Playlist);
