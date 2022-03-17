import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Todo, UserResponse } from "@todo-list/schema/todo";
import { Model } from "mongoose";
import { TodoDocument, TodoModel } from "../schemas/todo.schema";

@Injectable()
export class TodoService {
  constructor(@InjectModel(TodoModel.name) private todoModel: Model<TodoDocument>) { }

  async findAll(user: UserResponse): Promise<Todo[]> {
    return await this.todoModel.find({ userId: user.id }).exec();
  }

  async findById(id: string, user: UserResponse): Promise<Todo> {
    return await this.todoModel.findOne({ _id: id, userId: user.id }).exec();
  }

  async findByName(name: string, user: UserResponse): Promise<Todo[]> {
    return await this.todoModel.find({ name: RegExp(name, 'i'), userId: user.id }).exec();
  }

  async create(todo: Todo, user: UserResponse): Promise<Todo> {
    const newDate = new Date();
    const newTodo = {
      ...todo,
      userId: user.id,
      createdAt: new Date(`${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`)
    }
    const todoCreated = await new this.todoModel(newTodo).save();
    return todoCreated;
  }

  async update(id: string, todo: Todo): Promise<Todo> {
    await this.todoModel.updateOne({ _id: id }, todo).exec();
    return await this.todoModel.findOne({ _id: id }).exec();
  }

  async completeTask(id: string, date: { date: Date }): Promise<Todo> {
    const todo = await this.todoModel.findOne({ _id: id }).exec();
    if (todo) {
      todo.completedAt = new Date(date.date);
      todo.status = 'Concluído';
      await this.todoModel.updateOne({ _id: id }, todo);
      return await this.todoModel.findOne({ _id: id }).exec();
    } else {
      throw new Error('ID passado por parâmetro e o ID do objeto são diferentes');
    }
  }

  async delete(id: string): Promise<void> {
    await this.todoModel.deleteOne({ _id: id });
  }
}
