import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo, TodoDocument, TodoModel } from '@todo-list/schema/todo';
import { Model } from 'mongoose';

@Injectable()
export class TodoService {
  constructor(@InjectModel(TodoModel.name) private todoModel: Model<TodoDocument>) { }

  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async findById(id: string): Promise<Todo> {
    return this.todoModel.findById(id).exec();
  }

  async findByName(name: string): Promise<Todo[]> {
    return this.todoModel.find({name: RegExp(name, 'i')}).exec();
  }

  async create(todo: Todo): Promise<Todo> {
    const todoCreated = new this.todoModel(todo);
    return todoCreated.save();
  }

  async update(id: string, todo: Todo): Promise<Todo> {
    await this.todoModel.updateOne({_id: id}, todo).exec();
    return this.findById(id);
  }
  async delete(id: string): Promise<void> {
    this.todoModel.deleteOne({_id: id});
  }
}
