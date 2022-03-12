import { CreateUserDTO } from './dto/create-user.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { IsPublic } from '../auth/decorators/is-public.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @IsPublic()
  @Post()
  create(@Body() user: CreateUserDTO) {
    return this.userService.create(user);
  }
}
