import {BadRequestException, PipeTransform } from "@nestjs/common";
import { TaskStatus } from "../task.model";
import { UpdateTaskDto } from "../DTO/update-task.dto";

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowTaskStatus = [
    TaskStatus.OPEN,
    TaskStatus.DONE,
    TaskStatus.IN_PROGRESS
  ];

  transform(value: UpdateTaskDto): any{
    console.log(value);
    if(!this.isValidStatus(value.status)){
      return new BadRequestException(`${value.status} is an invalid status`);
    }
    return value;
  }

  private isValidStatus(status: any): boolean {
    const idx = this.allowTaskStatus.indexOf(status);
    return idx !== -1;
  }
}