import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { User } from "@todo-list/schema/todo";
import { AuthRequest } from "../models/auth-request.mode";

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): User => {
    const request = context.switchToHttp().getRequest<AuthRequest>();
    return request.user;
  }
)
