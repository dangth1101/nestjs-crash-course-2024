import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from 'src/users/dtos/create_user.dto';
import { CreateUserType } from 'src/users/utils/type';

@Injectable()
export class UsersService {
  private fakeUsers: CreateUserDTO[] = [
    { username: 'tester1', email: 'tester1@test.com', age: 12 },
    { username: 'tester2', email: 'tester2@test.com', age: 13 },
    { username: 'tester3', email: 'tester3@test.com', age: 14 },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userPayload: CreateUserDTO) {
    this.fakeUsers.push(userPayload);
    return;
  }

  fetchUserById(id: number) {
    // return { id, username: 'tester4', email: 'tester4@test.com' };
    return null;
  }
}
