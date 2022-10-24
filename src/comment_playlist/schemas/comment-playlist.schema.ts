import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CommentPlaylistDocument = CommentPlaylist & Document;

@Schema({versionKey: false, _id: true})
export class CommentPlaylist {CommentPlaylist
  @Prop({ required: true })
  comment: string;

  @Prop({ required: true })
  fk_id_user: string;

  @Prop({ required: true })
  fk_id_playlist: string;
}

export const CommentPlaylistSchema = SchemaFactory.createForClass(CommentPlaylist);
