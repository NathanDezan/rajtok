import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LikeDocument = Like & Document;

@Schema({versionKey: false, _id: true})
export class Like {
  @Prop({ required: true })
  fk_identity_user: string;

  @Prop({ required: true })
  fk_identity_playlist: string;
}

export const LikeSchema = SchemaFactory.createForClass(Like);