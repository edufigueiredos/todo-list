export interface User {
  _id?: string;
  username: string;
  password: string;
  name: string;
}

export interface UserToLogin {
  _id?: string;
  username: string;
  password: string;
}

export interface UserResponse {
  id: string,
  username: string
  name: string;
}
