import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'TestNest2020$',
      database: 'corporation',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    TasksModule,
  ],
})
export class AppModule {}
