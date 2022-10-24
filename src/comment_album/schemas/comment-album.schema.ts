import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CommentAlbumDocument = CommentAlbum & Document;

@Schema({versionKey: false, _id: true})
export class CommentAlbum {CommentAlbum
  @Prop({ required: true })
  comment: string;

  @Prop({ required: true })
  fk_id_user: string;

  @Prop({ required: true })
  fk_id_album: string;
}

export const CommentAlbumSchema = SchemaFactory.createForClass(CommentAlbum);
