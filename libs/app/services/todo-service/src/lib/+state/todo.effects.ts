import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TodoService } from "../todo.service";
import {
  errorAction,
  getAllTodos,
  setAllTodosStore,
  successAction, createTodo,
  setTodoStore,
  updateTodo,
  updateTodoStore,
  deleteTodo,
  completeTodo,
  removeTodoStore
} from './todo.actions';
import { catchError, map, switchMap, tap } from 'rxjs';
import { Store } from "@ngrx/store";
import { Todo } from "@todo-list/schema/todo";

@Injectable()
export class TodoEffect {

  loadTodos$ = createEffect(
    () => this.actions$.pipe(
      ofType(getAllTodos),
      switchMap(() => this.todoService.getAll().pipe(
        tap((todos: Todo[]) => this.store.dispatch(setAllTodosStore({ todos })))
      )),
      map(() => successAction()),
      catchError(() => [errorAction()])
    )
  );

  createTodo$ = createEffect(
    () => this.actions$.pipe(
      ofType(createTodo),
      switchMap(({ todo }) => this.todoService.create(todo).pipe(
        tap((todo: Todo) => this.store.dispatch(setTodoStore({ todo })))
      )),
      map(() => successAction()),
      catchError(() => [errorAction()])
    )
  );

  updateTodo$ = createEffect(
    () => this.actions$.pipe(
      ofType(updateTodo),
      switchMap(({ id, todo: todoToUpdate }) => this.todoService.update(id, todoToUpdate).pipe(
        tap((todo: Todo) => this.store.dispatch(updateTodoStore({ id, todo })))
      )),
      map(() => successAction()),
      catchError(() => [errorAction])
    )
  );

  deleteTodo$ = createEffect(
    () => this.actions$.pipe(
      ofType(deleteTodo),
      switchMap(({ id }) => this.todoService.delete(id).pipe(
        tap(() => this.store.dispatch(removeTodoStore({ id })))
      )),
      map(() => successAction()),
      catchError(() => [errorAction])
    )
  );

  completeTodo$ = createEffect(
    () => this.actions$.pipe(
      ofType(completeTodo),
      switchMap(({ id, date }) => this.todoService.completeTask(id, date).pipe(
        tap((todo: Todo) => this.store.dispatch(updateTodoStore({ id, todo })))
      )),
      map(() => successAction()),
      catchError(() => [errorAction])
    )
  );

  constructor(
    private actions$: Actions,
    private todoService: TodoService,
    private store: Store
  ) { }
}
