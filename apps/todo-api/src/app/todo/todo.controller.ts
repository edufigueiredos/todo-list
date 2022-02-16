import { TodoService } from './todo.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Todo } from '@todo-list/schema/todo';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) { }

  @Get()
  public findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Get('/id/:id')
  public findById(@Param('id') id: string): Promise<Todo> {
    return this.todoService.findById(id);
  }

  @Get('/name/:name')
  public findByName(@Param('name') name: string): Promise<Todo[]> {
    return this.todoService.findByName(name);
  }

  @Post()
  public create(@Body() todo: Todo): Promise<Todo> {
    return this.todoService.create(todo);
  }

  @Put(':id')
  public update(@Param('id') id: string, @Body() todo: Todo): Promise<Todo> {
    return this.todoService.update(id, todo);
  }

  @Delete(':id')
  public delete(@Param('id') id: string): void {
    this.todoService.delete(id);
  }
}
