import { CreateTaskDateDto } from './create-task-date.dto'
export class CreateTaskDto {
  readonly title: string;
  readonly description: string;
  readonly type: string;
  readonly repetitive: boolean;
  readonly completed: boolean;
  readonly date: CreateTaskDateDto;
}