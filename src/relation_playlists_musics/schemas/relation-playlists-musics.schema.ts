import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RelationPlaylistsMusicsDocument = RelationPlaylistsMusics & Document;

@Schema({versionKey: false, _id: true})
export class RelationPlaylistsMusics {RelationPlaylistsMusics
  @Prop({ required: true })
  fk_id_playlist: string;

  @Prop({ required: true })
  fk_id_music: string;
}

export const RelationPlaylistsMusicsSchema = SchemaFactory.createForClass(RelationPlaylistsMusics);
