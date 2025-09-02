import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task, Priority } from './types';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = await this.prisma.task.create({
      data: {
        title: createTaskDto.title,
        description: createTaskDto.description,
        completed: createTaskDto.completed ?? false,
        priority: createTaskDto.priority ?? Priority.MEDIUM,
        dueDate: createTaskDto.dueDate ? new Date(createTaskDto.dueDate) : null,
      },
    });

    return task as Task;
  }

  async findAll(): Promise<Task[]> {
    const tasks = await this.prisma.task.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return tasks as Task[];
  }

  async findOne(id: string): Promise<Task> {
    const task = await this.prisma.task.findUnique({
      where: { id },
    });

    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    return task as Task;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const existingTask = await this.findOne(id);

    const updateData: any = { ...updateTaskDto };
    if (updateTaskDto.dueDate) {
      updateData.dueDate = new Date(updateTaskDto.dueDate);
    }

    const updatedTask = await this.prisma.task.update({
      where: { id },
      data: updateData,
    });

    return updatedTask as Task;
  }

  async remove(id: string): Promise<void> {
    await this.findOne(id);
    await this.prisma.task.delete({
      where: { id },
    });
  }

  async toggleComplete(id: string): Promise<Task> {
    const task = await this.findOne(id);
    const updatedTask = await this.prisma.task.update({
      where: { id },
      data: { completed: !task.completed },
    });

    return updatedTask as Task;
  }
}
