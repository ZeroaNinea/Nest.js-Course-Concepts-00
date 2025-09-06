import { Inject, Injectable } from '@nestjs/common';
import { HelloService } from '../hello/hello.service';

@Injectable()
export class UserService {
  constructor(
    @Inject(HelloService) private readonly helloService: HelloService,
  ) {}

  getAllUsers() {
    return [
      {
        id: 1,
        name: 'Sangam',
      },
      {
        id: 2,
        name: 'John',
      },
      {
        id: 3,
        name: 'Victor',
      },
    ];
  }

  getUserById(id: number) {
    return this.getAllUsers().find((user) => user.id === id);
  }

  getWelcomeMessage(userId: number) {
    const user = this.getUserById(userId);

    if (!user) {
      return 'User not found!';
    }

    return this.helloService.getHelloWithName(user.name);
  }
}
