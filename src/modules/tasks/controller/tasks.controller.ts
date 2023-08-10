import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from '../services/tasks.service';
import { TaskInterface } from 'src/modules/tasks/interfaces/task.interface';
import { CreateTaskDto } from '../dto/create-task.dto'
import { UpdateTaskDto } from '../dto/update-task.dto'

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) { }
  @Get()
  findAll(): Promise<TaskInterface[]> {
    return this.tasksService.findAll()
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<TaskInterface> {
    return this.tasksService.createTask(createTaskDto)
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string): Promise<object> {
    return this.tasksService.deleteTask(id)
  }

  @Put()
  updateTask(@Body() updateTaskDto: UpdateTaskDto): Promise<TaskInterface> {
    return this.tasksService.updateTask(updateTaskDto)
  }
}
