import { Injectable, Inject } from '@nestjs/common'
import { Model } from 'mongoose'
import { TaskInterface } from '../interfaces/task.interface'
import { CreateTaskDto } from '../dto/create-task.dto'
import { UpdateTaskDto } from '../dto/update-task.dto'
import { LodashHelpers } from '../../../helpers/lodash/lodash.helpers';

@Injectable()
export class TasksService {
  constructor(
    @Inject("TASK_MODEL")
    private taskModel: Model<TaskInterface>,
    private readonly lodashHelpers: LodashHelpers
  ) { }

  findAll(): Promise<TaskInterface[]> {
    return this.taskModel.find().exec()
  }

  createTask(createTaskDto: CreateTaskDto): Promise<TaskInterface> {
    try {
      const createdTask = new this.taskModel(createTaskDto)
      return createdTask.save()
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteTask(id: string): Promise<object> {
    try {
      const deletedTask = await this.taskModel.findByIdAndDelete(id)
      return (deletedTask) ? { success: true } : { success: false }
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateTask(updateTaskDto: UpdateTaskDto): Promise<TaskInterface> {
    try {
      await this.taskModel.findByIdAndUpdate(updateTaskDto?._id, updateTaskDto)
      const findTask = await this.taskModel.findById(updateTaskDto?._id)
      return findTask
    } catch (error) {
      throw new Error(error);
    }
  }

}
