import { Controller, Inject, Get, Param, Query } from '@nestjs/common';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
  // private readonly helloService = Inject(HelloService);

  constructor(
    @Inject(HelloService) private readonly helloService: HelloService,
  ) {}

  @Get('first-route')
  getHello(): string {
    return this.helloService.getHello();
  }

  @Get('user/:name')
  getHelloWithName(@Param('name') name: string): string {
    return this.helloService.getHelloWithName(name);
  }

  @Get('query')
  getHelloWithQuery(@Query('name') name: string): string {
    return this.helloService.getHelloWithName(name || 'world');
  }
}
