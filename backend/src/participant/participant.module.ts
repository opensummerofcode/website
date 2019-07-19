import { Module } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { ParticipantResolver } from './participant.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { ParticipantSchema } from './schemas/participant.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Participant', schema: ParticipantSchema }])],
  providers: [ParticipantResolver, ParticipantService],
})
export class StudentModule {}
