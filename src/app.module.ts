import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://gandev:gandev.2023@cluster0.3eyakps.mongodb.net/?retryWrites=true&w=majority'),
    TasksModule
  ],
})
export class AppModule { }
