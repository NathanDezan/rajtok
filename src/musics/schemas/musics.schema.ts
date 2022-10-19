import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MusicDocument = Music & Document;

@Schema({versionKey: false, _id: true})
export class Music {
  @Prop({ required: true })
  name_music: string;

  @Prop({ required: true })
  fk_identity_album: string;

  @Prop({ required: true })
  popularity_music: number;

  @Prop({ required: true })
  dancability_music: number;

  @Prop({ required: true })
  energy_music: number;
}

export const MusicSchema = SchemaFactory.createForClass(Music);