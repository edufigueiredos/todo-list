import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from "@todo-list/schema/todo";
import { Document, Types } from 'mongoose';
import { TodoModel } from "./todo.schema";

export type UserDocument = UserModel & Document

@Schema()
export class UserModel implements User {
  _id?: string;
  @Prop({ required: true }) username: string;
  @Prop({ required: true }) password: string;
  @Prop({ required: true }) name: string;
  @Prop([{required: true, type: Types.ObjectId, ref: 'TodoModel'}]) todos: TodoModel[]
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
