import { Controller, Get } from '@nestjs/common';
import { User } from '@todo-list/schema/todo';

import { AppService } from './app.service';
import { CurrentUser } from './auth/decorators/current-user.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('me')
  getMe(@CurrentUser() user: User) {
    return user;
  }
}
