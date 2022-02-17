export interface Todo {
  _id?: string;
  name: string;
  description?: string;
  date: Date | string;
  priority: string;
  createdAt?: Date;
  completedAt?: Date;
  status?: string;
}
