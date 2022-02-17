import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Todo } from '@todo-list/schema/todo';
import { Document } from 'mongoose';

export type TodoDocument = TodoModel & Document;

@Schema()
export class TodoModel implements Todo {
  _id?: string;
  @Prop({ required: true }) name: string;
  @Prop() description?: string;
  @Prop({ required: true }) date: Date;
  @Prop({ required: true }) priority: string;
  @Prop({ default: new Date() }) createdAt?: Date;
  @Prop() completedAt?: Date;
  @Prop({ default: 'Pendente' }) status?: string;
}

export const TodoSchema = SchemaFactory.createForClass(TodoModel);
