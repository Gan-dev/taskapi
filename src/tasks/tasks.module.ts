import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from '../schemas/task.schema'

@Module({
  //conexion y uso del schema
  imports: [
    MongooseModule.forFeature([{
      name: Task.name,
      schema: TaskSchema,
    },
    ])
  ],
  controllers: [TasksController],
  providers: [TasksService]
})

export class TasksModule { }