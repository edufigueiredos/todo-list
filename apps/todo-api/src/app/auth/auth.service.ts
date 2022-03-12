import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@todo-list/schema/todo';
import { compare } from 'bcrypt';
import { UserService } from '../user/user.service';
import { UserPayload } from './models/user-payload.model';
import { UserToken } from './models/user-token.model';

@Injectable()
export class AuthService {

  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) { }

  login(user: User): UserToken {
    const payload: UserPayload = {
      sub: user._id,
      username: user.username,
      name: user.name
    };

    const jwtToken = this.jwtService.sign(payload);
    return {
      access_token: jwtToken
    }
  }

  async validateUser(username: string, password: string) {
    const user = await this.userService.findUserByUsername(username);
    if (user) {
      const isPasswordValid = await compare(password, user.password);
      if (isPasswordValid) {
        user.password = undefined
        return user;
      }
    }

    throw new Error('Nome de usuário ou senha estão incorretos.');
  }
}
