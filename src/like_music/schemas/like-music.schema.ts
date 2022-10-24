import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LikeMusicDocument = LikeMusic & Document;

@Schema({versionKey: false, _id: true})
export class LikeMusic {LikeMusic
  @Prop({ required: true })
  fk_id_user: string;

  @Prop({ required: true })
  fk_id_music: string;
}

export const LikeMusicSchema = SchemaFactory.createForClass(LikeMusic);
