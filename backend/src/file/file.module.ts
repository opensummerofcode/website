import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [ConfigModule],
  providers: [FileService],
})
export class FileModule {}
