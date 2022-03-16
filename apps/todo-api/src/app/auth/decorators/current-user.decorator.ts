import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { UserResponse } from "@todo-list/schema/todo";
import { AuthRequest } from "../models/auth-request.mode";

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): UserResponse => {
    const request = context.switchToHttp().getRequest<AuthRequest>();
    return request.user;
  }
)
