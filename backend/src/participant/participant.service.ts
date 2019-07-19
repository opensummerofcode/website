import { Injectable } from '@nestjs/common';
import { IParticipant } from './interfaces/participant.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ParticipantService {
  constructor(
    @InjectModel('Participant')
    private readonly participantModel: Model<IParticipant>,
  ) {}
  async create(input: any): Promise<IParticipant> {
    return this.participantModel.create(input);
  }
}
