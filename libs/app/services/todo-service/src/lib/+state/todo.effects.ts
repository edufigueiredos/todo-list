import { todoSelector } from './todo.selectors';
import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { TodoService } from "../todo.service";
import { TodoState } from "./todo-state.model";

@Injectable()
export class TodoEffect {

  constructor(
    private actions$: Actions,
    private todoService: TodoService,
    private store: Store
  ) { }
}
