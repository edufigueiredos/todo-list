import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodoState } from "./todo-state.model";
import { todoStateKey } from "./todo.reducers";

export const todoSelector = createFeatureSelector<TodoState>(todoStateKey);

export const allTodosSelector = createSelector(
  todoSelector,
  (state) => state.todos
)
