import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  getHello(): string {
    return 'Hello, Nest.js!';
  }

  getHelloWithName(name: string): string {
    return `Hello, ${name}!`;
  }
}
