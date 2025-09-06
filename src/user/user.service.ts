import { Inject, Injectable } from '@nestjs/common';
import { HelloService } from '../hello/hello.service';

@Injectable()
export class UserService {
  constructor(
    @Inject(HelloService) private readonly userService: HelloService,
  ) {}
}
