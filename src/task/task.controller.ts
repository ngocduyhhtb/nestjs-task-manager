import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe
} from "@nestjs/common";
import { TaskService } from "./task.service";
import { CreateTaskDto } from "./DTO/create-task.dto";
import { Task } from "./task.model";
import { UpdateTaskDto } from "./DTO/update-task.dto";
import { TaskStatusValidationPipe } from "./pipe/task-status-validation.pipe";

@Controller("task")
export class TaskController {
  constructor(private readonly taskService: TaskService) {
  }

  @Get("/")
  getAllTask() {
    return this.taskService.getTask();
  }

  @Post("/create")
  @UsePipes(ValidationPipe)
  createOneTask(
    @Body() createTaskDto: CreateTaskDto
  ): Task {
    return this.taskService.createTask(createTaskDto);
  }

  @Get("/:id")
  getTaskById(@Param("id") id: string): Task | NotFoundException {
    return this.taskService.getTaskById(id);
  }

  @Delete("/:id")
  deleteTaskById(@Param("id") id: string): Task {
    return this.taskService.deleteTaskById(id);
  }

  @Patch("/update/:id")
  updateTask(@Param("id") id: string, @Body(TaskStatusValidationPipe) updateTaskDTO: UpdateTaskDto): Task {
    return this.taskService.updateTask(id, updateTaskDTO);
  }
}
