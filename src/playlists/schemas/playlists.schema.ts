import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PlaylistDocument = Playlist & Document;

@Schema({versionKey: false, _id: true})
export class Playlist {
  @Prop({ required: true })
  _id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  date_created: string;

  @Prop({ required: true })
  energy: string;

  @Prop({ required: true })
  dancability: string;

  @Prop({ required: true })
  popularity: string;

  @Prop({ required: true })
  fk_id_user: string;
}

export const PlaylistSchema = SchemaFactory.createForClass(Playlist);
