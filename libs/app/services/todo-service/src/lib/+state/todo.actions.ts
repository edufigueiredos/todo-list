import { createAction, props } from '@ngrx/store'
import { Todo } from '@todo-list/schema/todo';

export const setAllTodosStore = createAction('[Todo] Carrega todas as tarefa no Store', props<{ todos: Todo[] }>());
export const setTodoStore = createAction('[Todo] Adiciona uma tarefa no Store', props<{todo: Todo}>());
export const removeTodoStore = createAction('[Todo] Remove uma tafera do Store', props<{id: string}>());
export const updateTodoStore = createAction('[Todo] Atualiza uma todo no Store', props<{id: string, todo: Todo}>());
export const loadTodosEffect = createAction('[Todo] Carregar tarefas');
export const loadTodoByIdEffect = createAction('[Todo] Carrega tarefa por ID', props<{ id: string }>());
export const createTodoEffect = createAction('[Todo] Cria uma tarefa', props<{ todo: Todo }>());
export const updateTodoEffect = createAction('[Todo] Atualiza uma tarefa', props<{ id: string, todo: Todo }>());
export const completeTodoEffect = createAction('[Todo] Completa uma tarefa', props<{ id: string, date: { date: Date } }>());
export const deleteTodoEffect = createAction('[Todo] Apaga uma tarefa', props<{id: string}>());
