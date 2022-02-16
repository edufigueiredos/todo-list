import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TodoService } from './todo.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClient
  ],
  providers: [TodoService]
})
export class TodoServiceModule {}
