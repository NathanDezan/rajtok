import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MusicDocument = Music & Document;

@Schema({versionKey: false, _id: true})
export class Music {
  @Prop({ required: true })
  _id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  popularity: number;

  @Prop({ required: true })
  dancability: number;

  @Prop({ required: true })
  energy: number;

  @Prop({ required: true })
  duration: number;

  @Prop({ required: true })
  fk_id_album: string;
}

export const MusicSchema = SchemaFactory.createForClass(Music);