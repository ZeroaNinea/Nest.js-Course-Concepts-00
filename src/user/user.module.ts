import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { HelloModule } from 'src/hello/hello.module';
import { HelloService } from 'src/hello/hello.service';

@Module({
  controllers: [UserController],
  providers: [UserService, HelloService],
  imports: [HelloModule],
})
export class UserModule {}
