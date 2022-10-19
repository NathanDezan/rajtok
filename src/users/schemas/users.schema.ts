import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { hashSync } from 'bcrypt';

export type UserDocument = User & Document;

@Schema({versionKey: false, _id: true})
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password?: string;

  hashPassword() {
    this.password = hashSync(this.password, 10);
  }

  @Prop({ required: true })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);