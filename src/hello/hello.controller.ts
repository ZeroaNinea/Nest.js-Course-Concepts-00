import { Controller, Inject, Get } from '@nestjs/common';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
  // private readonly helloService = Inject(HelloService);

  constructor(
    @Inject(HelloService) private readonly helloService: HelloService,
  ) {}

  @Get()
  getHello(): string {
    return this.helloService.getHello();
  }
}
