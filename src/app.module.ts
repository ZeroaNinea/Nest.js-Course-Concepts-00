import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { UserModule } from './user/user.module';
// import appConfig from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Import ConfigModule globally to use environment variables.
      validationSchema: Joi.object({
        APP_NAME: Joi.string().default('defaultApp'),
      }),
      // load: [appConfig], // Use the `appConfig` for default values.
    }),
    HelloModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
