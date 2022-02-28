import { createFeatureSelector } from "@ngrx/store";
import { TodoState } from "./todo-state.model";

export const todoSelector = createFeatureSelector<TodoState>('todoStore');
