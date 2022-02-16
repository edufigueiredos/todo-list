export interface Todo {
  _id: string;
  name: string;
  description: string;
  date: Date;
  priority: string;
  createdAt: Date;
  completedAt: Date;
  status: string;
}
