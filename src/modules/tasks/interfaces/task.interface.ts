import { Document } from "mongoose";
import { TaskDateInterface } from './task-date.interface'
export interface TaskInterface extends Document {
  readonly _id?: string,
  readonly title: string,
  readonly description: string,
  readonly type: string,
  readonly repetitive: boolean,
  readonly completed: boolean,
  readonly date: TaskDateInterface
}
