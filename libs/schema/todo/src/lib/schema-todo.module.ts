import { TodoModel, TodoSchema } from './todo.model';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

@Module({
  imports: [MongooseModule.forFeature([{name: TodoModel.name, schema: TodoSchema}])]
})
export class SchemaTodoModule {}
