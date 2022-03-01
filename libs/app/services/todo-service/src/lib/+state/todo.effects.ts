import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TodoService } from "../todo.service";
import { errorAction, loadTodosEffect, setAllTodosStore, successAction } from './todo.actions';
import { catchError, map, switchMap, tap } from 'rxjs';
import { Store } from "@ngrx/store";

@Injectable()
export class TodoEffect {

  loadTodos$ = createEffect(
    () => this.actions$.pipe(
      ofType(loadTodosEffect),
      switchMap(() => this.todoService.getAll().pipe(
        tap(todos => this.store.dispatch(setAllTodosStore({todos})))
      )),
      map(() => successAction()),
      catchError(() => [errorAction()])
    )
  )

  constructor(
    private actions$: Actions,
    private todoService: TodoService,
    private store: Store
  ) { }
}
