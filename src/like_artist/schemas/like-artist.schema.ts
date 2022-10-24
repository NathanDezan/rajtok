import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LikeArtistDocument = LikeArtist & Document;

@Schema({versionKey: false, _id: true})
export class LikeArtist {LikeArtist
  @Prop({ required: true })
  fk_id_user: string;

  @Prop({ required: true })
  fk_id_artist: string;
}

export const LikeArtistSchema = SchemaFactory.createForClass(LikeArtist);
