import { EntityRepository, Repository } from "typeorm";
import { TaskEntity } from "../entity/task.entity";

@EntityRepository(TaskEntity)
export class TaskRepository extends Repository<TaskEntity> {

}