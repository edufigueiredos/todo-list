import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '@todo-list/schema/todo';
import { hash } from 'bcrypt';
import { Model } from 'mongoose';
import { UserDocument, UserModel } from '../schemas/user.schema';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(UserModel.name) private userModel: Model<UserDocument>) { }

  async create(createUserDTO: CreateUserDTO): Promise<User> {
    const user: CreateUserDTO = {
      ...createUserDTO,
      password: await hash(createUserDTO.password, 10)
    }
    const createdUser = await new this.userModel(user).save();
    createdUser.password = undefined;
    return createdUser;
  }

  async findUserByUsername(username: string): Promise<User> {
    return await this.userModel.findOne({ username }).exec();
  }
}
