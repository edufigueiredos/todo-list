import { Todo } from "@todo-list/schema/todo";

export interface ICrud {
  findAll: () => Promise<Todo[]>;
  findById: (id: string) => Promise<Todo>;
  findByName: (name: string) => Promise<Todo[]>;
  create: (todo: Todo) => Promise<Todo>;
  update: (id: string, todo: Todo) =>Promise<Todo>,
  delete: (id: string) => void
}
