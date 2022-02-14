import { Module } from '@nestjs/common';
import { SchemaTodoModule } from '@todo-list/schema/todo';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  imports: [SchemaTodoModule],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
