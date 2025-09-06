import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(@Inject() private readonly configService: ConfigService) {}

  getHello(): string {
    const appName = this.configService.get<string>('APP_NAME', 'defaultValue');
    return `Hello, ${appName}!`;
  }
}
