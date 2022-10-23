import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FollowDocument = Follow & Document;

@Schema({versionKey: false, _id: true})
export class Follow {Follow
  @Prop({ required: true })
  fk_id_user: string;

  @Prop({ required: true })
  fk_id_user_follow: string;
}

export const FollowSchema = SchemaFactory.createForClass(Follow);
