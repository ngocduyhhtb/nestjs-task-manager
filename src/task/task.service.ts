import { Injectable, NotFoundException } from "@nestjs/common";
import { Task, TaskStatus } from "./task.model";
import { CreateTaskDto } from "./DTO/create-task.dto";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class TaskService {
  private task: Task[] = [
    {
      id: "1",
      title: "Test",
      description: "no",
      status: TaskStatus.OPEN
    }
  ];

  getTask = () => {
    return this.task;
  };
  createTask = ({ title, description }: CreateTaskDto): Task => {
    const newTask: Task = {
      id: uuidv4(),
      title: title,
      description,
      status: TaskStatus.OPEN
    };
    this.task.push(newTask);
    return newTask;
  };

  getTaskById(id: string): Task| NotFoundException {
    const taskResult = this.task.find(val => val.id === id);
    return taskResult ? taskResult : new NotFoundException(`Task with id: ${id} not found!`)
  }

  deleteTaskById(id: string): Task {
    const taskIndex = this.task.findIndex(val => val.id === id);
    let taskResult: Task;
    if (taskIndex > -1) {
      taskResult = this.task[taskIndex];
      this.task.splice(taskIndex, 1);
    }
    return taskResult;
  }

  updateTask(id: string, payload: any): Task {
    const taskIndex = this.task.findIndex(val => val.id === id);
    if (taskIndex > -1) {
      this.task[taskIndex] = {
        ...this.task[taskIndex],
        ...payload
      };
      return this.task[taskIndex];
    }
  }
}
