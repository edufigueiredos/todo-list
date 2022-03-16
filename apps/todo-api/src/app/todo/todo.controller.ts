import { Body, Controller, Delete, Get, Param, Post, Put, Request } from '@nestjs/common';
import { Todo, UserResponse } from '@todo-list/schema/todo';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) { }

  @Get()
  public findAll(@CurrentUser() user: UserResponse): Promise<Todo[]> {
    return this.todoService.findAll(user);
  }

  @Get('/id/:id')
  public findById(@Param('id') id: string, @CurrentUser() user: UserResponse): Promise<Todo> {
    return this.todoService.findById(id, user);
  }

  @Get('/name/:name')
  public findByName(@Param('name') name: string, @CurrentUser() user: UserResponse): Promise<Todo[]> {
    return this.todoService.findByName(name, user);
  }

  @Post()
  public create(@Body() todo: Todo, @CurrentUser() user: UserResponse): Promise<Todo> {
    return this.todoService.create(todo, user);
  }

  @Put(':id')
  public update(@Param('id') id: string, @Body() todo: Todo): Promise<Todo> {
    return this.todoService.update(id, todo);
  }

  @Put('/complete/:id')
  public completeTask(@Param('id') id: string, @Body() date: {date: Date}): Promise<Todo> {
    return this.todoService.completeTask(id, date);
  }

  @Delete(':id')
  public delete(@Param('id') id: string): void {
    this.todoService.delete(id);
  }
}
