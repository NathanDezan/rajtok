import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LikePlaylistDocument = LikePlaylist & Document;

@Schema({versionKey: false, _id: true})
export class LikePlaylist {LikePlaylist
  @Prop({ required: true })
  fk_id_user: string;

  @Prop({ required: true })
  fk_id_playlist: string;
}

export const LikePlaylistSchema = SchemaFactory.createForClass(LikePlaylist);
