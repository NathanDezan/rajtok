import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LikeAlbumDocument = LikeAlbum & Document;

@Schema({versionKey: false, _id: true})
export class LikeAlbum {LikeAlbum
  @Prop({ required: true })
  fk_id_user: string;

  @Prop({ required: true })
  fk_id_album: string;
}

export const LikeAlbumSchema = SchemaFactory.createForClass(LikeAlbum);
