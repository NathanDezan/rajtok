import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CommentMusicDocument = CommentMusic & Document;

@Schema({versionKey: false, _id: true})
export class CommentMusic {CommentMusic
  @Prop({ required: true })
  comment: string;

  @Prop({ required: true })
  fk_id_user: string;

  @Prop({ required: true })
  fk_id_music: string;
}

export const CommentMusicSchema = SchemaFactory.createForClass(CommentMusic);
