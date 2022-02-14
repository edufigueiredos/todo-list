export interface Todo {
  _id: string;
  name: string;
  description: string;
  createdAt: Date;
  completedAt: Date;
  status: string;
}
