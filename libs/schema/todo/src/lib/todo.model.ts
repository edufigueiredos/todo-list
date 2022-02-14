import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = TodoModel & Document;

export interface Todo {
  _id: string;
  name: string;
  description: string;
  createdAt: Date;
  completedAt: Date;
  status: string;
}

@Schema()
export class TodoModel implements Todo {
  _id: string;
  @Prop({required: true}) name: string;
  @Prop() description: string;
  @Prop({default: new Date()}) createdAt: Date;
  @Prop() completedAt: Date;
  @Prop({default: 'Pendente'}) status: string;
}

export const TodoSchema = SchemaFactory.createForClass(TodoModel);
