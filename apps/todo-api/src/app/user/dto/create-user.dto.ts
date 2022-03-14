import { User } from "@todo-list/schema/todo";
import {} from 'class-transformer';
import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class CreateUserDTO implements User {

  @IsString({message: 'Nome de usuário precisa ser um texto'})
  @MinLength(4, {message: 'O nome de usuário precisa ter no mínimo 4 caracteres'})
  @MaxLength(20, {message: 'O nome de usuário precisa ter no máximo 20 caracteres'})
  username: string;

  @IsString({message: 'Senha precisa ser um texto'})
  @MinLength(4, {message: 'A senha precisa ter no mínimo 4 caracteres'})
  @MaxLength(20, {message: 'A senha precisa ter no máximo 20 caracteres'})
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Sua senha é fraca',
  })
  password: string;

  @IsString({message: 'Nome precisa ser um texto'})
  name: string;
}
