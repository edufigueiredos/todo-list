import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodoState } from "./todo-state.model";
import { todoStateKey } from "./todo.reducers";

export const todoSelector = createFeatureSelector<TodoState>(todoStateKey);

export const allTodosSelector = createSelector(
  todoSelector,
  (state) => state.todos
);

export const getTodoSelector = (id: string) => createSelector(
  allTodosSelector,
  (state) => {
    const index = state.findIndex(todo => todo._id === id);
    return state[index];
  }
)
