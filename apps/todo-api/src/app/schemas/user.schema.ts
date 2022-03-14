import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from "@todo-list/schema/todo";
import { Document } from 'mongoose';

export type UserDocument = UserModel & Document

@Schema()
export class UserModel implements User {
  _id?: string;
  @Prop({ required: true }) username: string;
  @Prop({ required: true }) password: string;
  @Prop({ required: true }) name: string;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
