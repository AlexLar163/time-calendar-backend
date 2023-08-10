import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './errors/all-exceptions.filter';
import { LodashHelpers } from './helpers/lodash/lodash.helpers';

@Module({
  imports: [DatabaseModule, TasksModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter
    },
    {
      provide: LodashHelpers,
      useClass: LodashHelpers
    }
  ],
})
export class AppModule { }
