import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskController } from './task/task.controller';
import { TaskModule } from './task/task.module';
import { TaskService } from "./task/task.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import typeOrmConfig from "./config/typeorm.config";

@Module({
  imports: [TaskModule, TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [AppController, TaskController],
  providers: [AppService, TaskService],
})
export class AppModule {}
