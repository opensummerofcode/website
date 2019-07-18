import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentResolver } from './student.resolver';

@Module({
  providers: [StudentService, StudentResolver],
})
export class StudentModule {}
