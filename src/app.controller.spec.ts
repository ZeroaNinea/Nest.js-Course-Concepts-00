import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

describe('AppController', () => {
  let appController: AppController;
  const configService = new ConfigService();

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, ConfigService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe(
        `Hello, ${configService.get<string>('APP_NAME', 'defaultValue')}!`,
      );
    });
  });
});
