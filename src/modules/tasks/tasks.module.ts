import { Module } from '@nestjs/common';
import { TasksService } from './services/tasks.service';
import { tasksProviders } from './tasks.providers';
import { DatabaseModule } from 'src/database/database.module';
import { TasksController } from './controller/tasks.controller';
import { LodashHelpers } from 'src/helpers/lodash/lodash.helpers';

@Module({
  imports: [DatabaseModule],
  providers: [TasksService, ...tasksProviders,
    {
      provide: LodashHelpers,
      useClass: LodashHelpers
    }],
  exports: [...tasksProviders],
  controllers: [TasksController]
})
export class TasksModule { }
