import { TodoService } from './todo.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { todoReducer, todoStateKey } from './+state/todo.reducers';
import { TodoEffect } from './+state/todo.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(todoStateKey, todoReducer),
    EffectsModule.forFeature([TodoEffect])
  ],
  providers: [TodoService],
})
export class TodoServiceModule { }
