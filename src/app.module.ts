import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://gandev:gandev.2023@cluster0.3eyakps.mongodb.net/?retryWrites=true&w=majority',
      {
        dbName: "test"
      }
    ),
    TasksModule,
    ConfigModule.forRoot()
  ],
})
export class AppModule { }
