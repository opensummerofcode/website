import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectResolver } from './project.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectSchema } from './schemas/project.schema';
import { FileModule } from '../file/file.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Project', schema: ProjectSchema }]),
    FileModule,
  ],
  providers: [ProjectService, ProjectResolver],
})
export class ProjectModule {}
