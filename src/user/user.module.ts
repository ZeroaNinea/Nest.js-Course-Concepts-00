import { Inject, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { HelloService } from 'src/hello/hello.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {
  constructor(
    @Inject(HelloService) private readonly userService: HelloService,
  ) {}
}
