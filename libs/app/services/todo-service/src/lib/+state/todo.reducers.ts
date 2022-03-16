import { createReducer, on } from "@ngrx/store";
import { Todo } from "@todo-list/schema/todo";
import { TodoState } from "./todo-state.model";
import { clearTodoStore, removeTodoStore, setAllTodosStore, setTodoStore, updateTodoStore } from "./todo.actions";

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
    state = {
      ...state,
      todos: [
        ...state.todos,
        { ...todo }
      ]
    }
    return state
  }),
  on(clearTodoStore, (state) => {
    state = { todos: [] }
    return state;
  }),
  on(removeTodoStore, (state, { id }) => {
    state = {
      ...state,
      todos: state.todos.filter(todo => todo._id !== id)
    }
    return state
  }),
  on(updateTodoStore, (state, { id, todo }) => {
    state = {
      ...state,
      todos: state.todos.map((todoMap: Todo) => todoMap._id === id ? todo : todoMap)
    }
    return state;
  })
)
