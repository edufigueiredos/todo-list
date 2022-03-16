import { UserResponse } from "@todo-list/schema/todo";

export interface AuthRequest extends Request {
  user: UserResponse
}
