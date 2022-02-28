import { TodoService } from './todo.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { todoReducer } from './+state/todo.reducers';
import { TodoEffect } from './+state/todo.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('todoStore', todoReducer),
    EffectsModule.forFeature([TodoEffect])
  ],
  providers: [TodoService],
})
export class TodoServiceModule { }
