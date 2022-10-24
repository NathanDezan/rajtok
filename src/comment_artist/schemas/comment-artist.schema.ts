import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CommentArtistDocument = CommentArtist & Document;

@Schema({versionKey: false, _id: true})
export class CommentArtist {CommentArtist
  @Prop({ required: true })
  comment: string;

  @Prop({ required: true })
  fk_id_user: string;

  @Prop({ required: true })
  fk_id_artist: string;
}

export const CommentArtistSchema = SchemaFactory.createForClass(CommentArtist);
