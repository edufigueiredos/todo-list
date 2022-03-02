import { createAction, props } from '@ngrx/store'
import { Todo } from '@todo-list/schema/todo';

export const setAllTodosStore = createAction('[Todo] [Store] Carrega todas as tarefa no Store', props<{ todos: Todo[] }>());
export const setTodoStore = createAction('[Todo] [Store] Adiciona uma tarefa no Store', props<{ todo: Todo }>());
export const removeTodoStore = createAction('[Todo] [Store] Remove uma tafera do Store', props<{ id: string }>());
export const updateTodoStore = createAction('[Todo] [Store] Atualiza uma todo no Store', props<{ id: string, todo: Todo }>());

export const successAction = createAction('[Todo] Sucesso');
export const errorAction = createAction('[Todo] Erro');

export const getAllTodos = createAction('[Todo] [Http] Carregar tarefas');
export const createTodo = createAction('[Todo] [Http] Cria uma tarefa', props<{ todo: Todo }>());
export const updateTodo = createAction('[Todo] [Http] Atualiza uma tarefa', props<{ id: string, todo: Todo }>());
export const completeTodo = createAction('[Todo] [Http] Completa uma tarefa', props<{ id: string, date: { date: Date } }>());
export const deleteTodo = createAction('[Todo] [Http] Apaga uma tarefa', props<{ id: string }>());
// export const loadTodoByIdEffect = createAction('[Todo] Carrega tarefa por ID', props<{ id: string }>());
