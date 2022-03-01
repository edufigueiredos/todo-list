import { createReducer, on } from "@ngrx/store";
import { TodoState } from "./todo-state.model";
import { removeTodoStore, setAllTodosStore, setTodoStore, updateTodoStore } from "./todo.actions";

export const initialState: TodoState = {
  todos: []
}

export const todoStateKey = 'todoState';

export const todoReducer = createReducer(
  initialState,
  on(setAllTodosStore, (state, { todos }) => {
    state = {
      ...state,
      todos
    }
    return state
  }),
  on(setTodoStore, (state, { todo }) => {
    state.todos.push(todo);
    return state
  }),
  on(removeTodoStore, (state, { id }) => {
    const index = state.todos.findIndex(todo => todo._id === id);
    if (index >= 0) {
      state.todos.splice(index, 1);
    }
    return state
  }),
  on(updateTodoStore, (state, {id, todo}) => {
    const index = state.todos.findIndex(todo => todo._id === id);
    if (index >= 0) {
      state.todos[index] = todo;
    }
    return state
  })
)
